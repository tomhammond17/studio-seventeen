import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import ContactForm from "@/components/ContactForm";

// Mock fetch
const mockFetch = vi.fn();
global.fetch = mockFetch;

beforeEach(() => {
  mockFetch.mockReset();
});

describe("ContactForm — validation", () => {
  it("shows validation errors on empty submit", async () => {
    render(<ContactForm />);
    fireEvent.submit(screen.getByRole("button", { name: /send message/i }).closest("form")!);
    await waitFor(() => {
      expect(screen.getByText("Name is required")).toBeInTheDocument();
      expect(screen.getByText("Email is required")).toBeInTheDocument();
      expect(screen.getByText("Subject is required")).toBeInTheDocument();
      expect(screen.getByText("Message is required")).toBeInTheDocument();
    });
  });

  it("shows error for invalid email", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.type(screen.getByLabelText("Email"), "not-an-email");
    fireEvent.submit(screen.getByRole("button", { name: /send message/i }).closest("form")!);
    await waitFor(() => {
      expect(screen.getByText("Please enter a valid email address")).toBeInTheDocument();
    });
  });

  it("does not call fetch when validation fails", async () => {
    render(<ContactForm />);
    fireEvent.submit(screen.getByRole("button", { name: /send message/i }).closest("form")!);
    expect(mockFetch).not.toHaveBeenCalled();
  });
});

describe("ContactForm — submission", () => {
  async function fillAndSubmit() {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.type(screen.getByLabelText("Name"), "Test User");
    await user.type(screen.getByLabelText("Email"), "test@example.com");
    await user.type(screen.getByLabelText("Subject"), "Test Subject");
    await user.type(screen.getByLabelText("Message"), "This is a test message.");
    await user.click(screen.getByRole("button", { name: /send message/i }));
  }

  it("shows success state on 200", async () => {
    mockFetch.mockResolvedValueOnce({ ok: true, status: 200 });
    await fillAndSubmit();
    await waitFor(() => {
      expect(screen.getByText("Message sent!")).toBeInTheDocument();
    });
  });

  it("shows rate limit message on 429", async () => {
    mockFetch.mockResolvedValueOnce({ ok: false, status: 429 });
    await fillAndSubmit();
    await waitFor(() => {
      expect(screen.getByText(/please wait a few minutes/i)).toBeInTheDocument();
    });
  });

  it("shows generic error on 500", async () => {
    mockFetch.mockResolvedValueOnce({ ok: false, status: 500 });
    await fillAndSubmit();
    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
    });
  });

  it("shows network error on fetch rejection", async () => {
    mockFetch.mockRejectedValueOnce(new Error("Network error"));
    await fillAndSubmit();
    await waitFor(() => {
      expect(screen.getByText(/unable to reach the server/i)).toBeInTheDocument();
    });
  });

  it("posts to /api/contact with correct fields", async () => {
    mockFetch.mockResolvedValueOnce({ ok: true, status: 200 });
    await fillAndSubmit();
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith("/api/contact", expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({ "Content-Type": "application/json" }),
        body: expect.stringContaining("Test User"),
      }));
    });
  });
});
