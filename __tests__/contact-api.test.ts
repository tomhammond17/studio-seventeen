import { describe, it, expect, vi, beforeEach } from "vitest";
import { NextRequest } from "next/server";

// Mock Resend
const mockSend = vi.hoisted(() =>
  vi.fn().mockResolvedValue({ id: "test-email-id" })
);

vi.mock("@/lib/resend", () => ({
  getResend: vi.fn(() => ({
    emails: {
      send: mockSend,
    },
  })),
}));

// Mock rate limiter to allow all by default
vi.mock("@/lib/rate-limit", () => ({
  checkRateLimit: vi.fn().mockReturnValue({ allowed: true, retryAfterMs: 0 }),
}));

import { POST } from "@/app/api/contact/route";
import { checkRateLimit } from "@/lib/rate-limit";

const mockResendSend = mockSend;
const mockCheckRateLimit = vi.mocked(checkRateLimit);

function makeRequest(body: unknown, ip = "127.0.0.1"): NextRequest {
  return new NextRequest("http://localhost/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": ip,
    },
    body: JSON.stringify(body),
  });
}

const validPayload = {
  name: "Test User",
  email: "test@example.com",
  subject: "Test Subject",
  message: "This is a valid test message.",
};

beforeEach(() => {
  vi.clearAllMocks();
  mockCheckRateLimit.mockReturnValue({ allowed: true, retryAfterMs: 0 });
  mockResendSend.mockResolvedValue({ id: "test-email-id" } as never);
});

describe("POST /api/contact", () => {
  it("returns 200 on valid input", async () => {
    const res = await POST(makeRequest(validPayload));
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.success).toBe(true);
  });

  it("calls resend with correct fields", async () => {
    await POST(makeRequest(validPayload));
    expect(mockResendSend).toHaveBeenCalledWith(
      expect.objectContaining({
        to: expect.any(String),
        reply_to: "test@example.com",
      })
    );
  });

  it("returns 400 for missing name", async () => {
    const res = await POST(makeRequest({ ...validPayload, name: "" }));
    expect(res.status).toBe(400);
  });

  it("returns 400 for invalid email", async () => {
    const res = await POST(makeRequest({ ...validPayload, email: "not-an-email" }));
    expect(res.status).toBe(400);
  });

  it("returns 400 for name over 100 chars", async () => {
    const res = await POST(makeRequest({ ...validPayload, name: "a".repeat(101) }));
    expect(res.status).toBe(400);
  });

  it("returns 400 for subject over 200 chars", async () => {
    const res = await POST(makeRequest({ ...validPayload, subject: "s".repeat(201) }));
    expect(res.status).toBe(400);
  });

  it("returns 400 for message over 5000 chars", async () => {
    const res = await POST(makeRequest({ ...validPayload, message: "m".repeat(5001) }));
    expect(res.status).toBe(400);
  });

  it("returns 429 when rate limited", async () => {
    mockCheckRateLimit.mockReturnValue({ allowed: false, retryAfterMs: 60000 });
    const res = await POST(makeRequest(validPayload));
    expect(res.status).toBe(429);
    expect(res.headers.get("Retry-After")).toBe("60");
  });

  it("returns 503 when Resend throws", async () => {
    mockResendSend.mockRejectedValueOnce(new Error("Resend down"));
    const res = await POST(makeRequest(validPayload));
    expect(res.status).toBe(503);
  });

  it("returns 400 for invalid JSON", async () => {
    const req = new NextRequest("http://localhost/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "not json",
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it("sanitizes XSS in subject before passing to Resend", async () => {
    const xssPayload = { ...validPayload, subject: "<script>alert(1)</script>" };
    await POST(makeRequest(xssPayload));
    expect(mockResendSend).toHaveBeenCalledWith(
      expect.objectContaining({
        subject: expect.not.stringContaining("<script>"),
      })
    );
  });
});
