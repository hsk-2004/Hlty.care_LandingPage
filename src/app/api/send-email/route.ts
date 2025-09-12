import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const { fullName, email, role, country } = await request.json();

    // Validate required fields
    if (!fullName || !email || !role || !country) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check if Resend API key is available
    if (!process.env.RESEND_API_KEY) {
      console.log('Resend API key not found. Logging form data instead.');
      console.log('Form Data:', { fullName, email, role, country });
      
      // For development/testing, just log the data
      return NextResponse.json(
        { message: 'Form data logged (Resend not configured)' },
        { status: 200 }
      );
    }

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Email content
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'noreply@hlty.com',
      to: [`${process.env.RESEND_TO_EMAIL}`],
      subject: 'New Early Access Registration - HLTY',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #11595F; border-bottom: 2px solid #6EBCC2; padding-bottom: 10px;">
            New Early Access Registration
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #11595F; margin-top: 0;">User Information:</h3>
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Role:</strong> ${role}</p>
            <p><strong>Country:</strong> ${country}</p>
          </div>
          
          <div style="background-color: #e8f4f8; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #11595F;">
              <strong>Registration Time:</strong> ${new Date().toLocaleString()}
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 14px;">
              This email was sent from the HLTY Early Access form.
            </p>
          </div>
        </div>
      `,
      text: `
        New Early Access Registration
        
        User Information:
        - Full Name: ${fullName}
        - Email: ${email}
        - Role: ${role}
        - Country: ${country}
        
        Registration Time: ${new Date().toLocaleString()}
        
        This email was sent from the HLTY Early Access form.
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      throw new Error(`Resend error: ${JSON.stringify(error)}`);
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

