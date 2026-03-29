import { NextRequest, NextResponse } from "next/server";
import { getResend } from "@/lib/resend";
import { checkRateLimit } from "@/lib/rate-limit";

function sanitize(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function validatePayload(body: unknown): { valid: true; data: ContactPayload } | { valid: false; error: string } {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { valid: false, error: "Invalid request body" };
  }

  const { name, email, subject, message } = body as Record<string, unknown>;

  if (typeof name !== "string" || !name.trim()) {
    return { valid: false, error: "Name is required" };
  }
  if (name.trim().length > 100) {
    return { valid: false, error: "Name must be 100 characters or fewer" };
  }

  if (typeof email !== "string" || !email.trim()) {
    return { valid: false, error: "Email is required" };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return { valid: false, error: "Invalid email address" };
  }

  if (typeof subject !== "string" || !subject.trim()) {
    return { valid: false, error: "Subject is required" };
  }
  if (subject.trim().length > 200) {
    return { valid: false, error: "Subject must be 200 characters or fewer" };
  }

  if (typeof message !== "string" || !message.trim()) {
    return { valid: false, error: "Message is required" };
  }
  if (message.trim().length > 5000) {
    return { valid: false, error: "Message must be 5000 characters or fewer" };
  }

  return {
    valid: true,
    data: {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    },
  };
}

export async function POST(req: NextRequest) {
  // Get client IP for rate limiting
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  const rateLimit = checkRateLimit(ip);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please wait before submitting again." },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil(rateLimit.retryAfterMs / 1000)),
        },
      }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const validation = validatePayload(body);
  if (!validation.valid) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  const { name, email, subject, message } = validation.data;

  const contactEmail = process.env.CONTACT_EMAIL ?? "hello@studioseventeen.io";

  try {
    await getResend().emails.send({
      from: "Studio Seventeen Contact Form <noreply@studioseventeen.io>",
      to: contactEmail,
      reply_to: email,
      subject: `[Contact] ${sanitize(subject)}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>From:</strong> ${sanitize(name)} (${sanitize(email)})</p>
        <p><strong>Subject:</strong> ${sanitize(subject)}</p>
        <hr />
        <p>${sanitize(message).replace(/\n/g, "<br />")}</p>
      `,
      text: `New contact form submission\n\nFrom: ${name} (${email})\nSubject: ${subject}\n\n${message}`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 503 }
    );
  }
}
