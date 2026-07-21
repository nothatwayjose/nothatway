import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";

// Uses the Node.js runtime for Cloudflare/OpenNext compatibility.
export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return NextResponse.json({ ok: false, fieldErrors }, { status: 422 });
  }

  // Honeypot filled -> pretend success so bots learn nothing.
  if (parsed.data.website) return NextResponse.json({ ok: true });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM || "Portfolio <onboarding@resend.dev>";
  if (!apiKey || !to) {
    console.error("Email not configured: set RESEND_API_KEY and CONTACT_TO_EMAIL");
    return NextResponse.json({ ok: false, error: "Something went wrong. Please try again." }, { status: 500 });
  }

  const { fullName, email, company, reason, message } = parsed.data;
  const esc = (s: string) => s.replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c] as string));
  const html = `
    <h2>New portfolio inquiry</h2>
    <p><strong>Name:</strong> ${esc(fullName)}</p>
    <p><strong>Email:</strong> ${esc(email)}</p>
    <p><strong>Company:</strong> ${esc(company || "—")}</p>
    <p><strong>Reason:</strong> ${esc(reason)}</p>
    <p><strong>Message:</strong></p>
    <p>${esc(message).replace(/\n/g, "<br>")}</p>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Portfolio contact — ${fullName} (${reason})`,
        html,
      }),
    });
    if (!res.ok) {
      console.error("Resend error", res.status);
      return NextResponse.json({ ok: false, error: "Something went wrong. Please try again." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Network error. Please try again." }, { status: 500 });
  }
}
