import { NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const supabase = createServerClient();

    if (!supabase) {
      return NextResponse.json(
        {
          error:
            "Contact form is not configured. On Netlify, add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY (or SUPABASE_URL and SUPABASE_ANON_KEY), then redeploy.",
        },
        { status: 503 },
      );
    }

    const { error } = await supabase.from("contact_messages").insert({
      name: String(name).trim(),
      email: String(email).trim(),
      subject: subject ? String(subject).trim() : null,
      message: String(message).trim(),
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Could not save your message. Please try again later." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
