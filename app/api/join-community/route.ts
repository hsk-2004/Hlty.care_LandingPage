import { NextResponse } from "next/server";

const ageOptions = new Set(["0-5", "6-10", "11-13", "14-16", "16+"]);
const interestOptions = new Set([
  "Playshops & Events",
  "Books & Comics",
  "Games & Learning Kits",
  "Early access to new Hlty Beings projects",
]);
const childInterestOptions = new Set([
  "Dance",
  "Sports",
  "Art & Design",
  "Music / Theatre",
  "Science & Curiosity",
  "Reading & Stories",
]);
const newsletterPreferences = new Set(["newsletter", "skip"]);

function getTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function getStringArray(value: unknown) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    const parentGuardianName = getTrimmedString(body.parentGuardianName);
    const email = getTrimmedString(body.email).toLowerCase();
    const phoneNumber = getTrimmedString(body.phoneNumber);
    const childAge = getTrimmedString(body.childAge);
    const interests = getStringArray(body.interests);
    const childInterests = getStringArray(body.childInterests);
    const newsletterPreference = getTrimmedString(body.newsletterPreference);
    const source = getTrimmedString(body.source) || "workshop_join_community";

    if (!parentGuardianName) {
      return NextResponse.json(
        { error: "Parent/Guardian name is required." },
        { status: 400 },
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 },
      );
    }

    if (!ageOptions.has(childAge)) {
      return NextResponse.json(
        { error: "Please choose a child age range." },
        { status: 400 },
      );
    }

    if (!interests.length || interests.some((item) => !interestOptions.has(item))) {
      return NextResponse.json(
        { error: "Select at least one interest." },
        { status: 400 },
      );
    }

    if (
      !childInterests.length ||
      childInterests.some((item) => !childInterestOptions.has(item))
    ) {
      return NextResponse.json(
        { error: "Select at least one child interest." },
        { status: 400 },
      );
    }

    if (!newsletterPreferences.has(newsletterPreference)) {
      return NextResponse.json(
        { error: "Please choose a newsletter preference." },
        { status: 400 },
      );
    }

    const supabaseUrl =
      process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const tableName =
      process.env.SUPABASE_COMMUNITY_SIGNUPS_TABLE || "community_signups";

    if (!supabaseUrl || !supabaseServiceRoleKey) {
      console.error(
        "Missing Supabase environment variables for join community submission.",
      );
      return NextResponse.json(
        { error: "Form is not configured yet. Add the Supabase environment variables." },
        { status: 500 },
      );
    }

    // Check if email already exists
    const checkResponse = await fetch(
      `${supabaseUrl}/rest/v1/${encodeURIComponent(tableName)}?email=eq.${encodeURIComponent(email)}&select=id`,
      {
        headers: {
          apikey: supabaseServiceRoleKey,
          Authorization: `Bearer ${supabaseServiceRoleKey}`,
        },
      },
    );

    if (checkResponse.ok) {
      const existing = (await checkResponse.json()) as { id: string }[];
      if (existing.length > 0) {
        return NextResponse.json(
          { already_joined: true, message: "You've already joined the Hlty Beings Playground!" },
          { status: 409 },
        );
      }
    }

    // Insert new signup
    const response = await fetch(
      `${supabaseUrl}/rest/v1/${encodeURIComponent(tableName)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseServiceRoleKey,
          Authorization: `Bearer ${supabaseServiceRoleKey}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          parent_guardian_name: parentGuardianName,
          email,
          phone_number: phoneNumber || null,
          child_age: childAge,
          interests,
          child_interests: childInterests,
          newsletter_preference: newsletterPreference,
          newsletter_opt_in: newsletterPreference === "newsletter",
          source,
        }),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Supabase insert failed for join community form:", errorText);

      return NextResponse.json(
        { error: "We couldn't save your details right now. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Unexpected join community submission error:", error);
    return NextResponse.json(
      { error: "Something went wrong while submitting the form." },
      { status: 500 },
    );
  }
}
