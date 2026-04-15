import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { password?: string };
    const secret = process.env.ADMIN_SECRET;

    if (!secret || body.password !== secret) {
      return NextResponse.json(
        { error: "Invalid password." },
        { status: 401 },
      );
    }

    // Fetch signups from Supabase
    const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const table =
      process.env.SUPABASE_COMMUNITY_SIGNUPS_TABLE || "community_signups";

    if (!url || !key) {
      return NextResponse.json(
        { error: "Supabase is not configured." },
        { status: 500 },
      );
    }

    const res = await fetch(
      `${url}/rest/v1/${encodeURIComponent(table)}?order=created_at.desc`,
      {
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
        },
        cache: "no-store",
      },
    );

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Admin fetch failed:", errorText);
      return NextResponse.json(
        { error: "Failed to fetch data." },
        { status: 500 },
      );
    }

    const signups = await res.json();
    return NextResponse.json({ signups });
  } catch (err) {
    console.error("Admin auth error:", err);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  }
}
