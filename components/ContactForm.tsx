"use client";

import { useState, FormEvent } from "react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type SubmitStatus = "idle" | "submitting" | "success" | "error";

function validateForm(data: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  } else if (data.name.trim().length > 100) {
    errors.name = "Name must be 100 characters or fewer";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Please enter a valid email address";
  }

  if (!data.subject.trim()) {
    errors.subject = "Subject is required";
  } else if (data.subject.trim().length > 200) {
    errors.subject = "Subject must be 200 characters or fewer";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required";
  } else if (data.message.trim().length > 5000) {
    errors.message = "Message must be 5000 characters or fewer";
  }

  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [serverError, setServerError] = useState<string>("");
  const [submittedEmail, setSubmittedEmail] = useState<string>("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.status === 429) {
        setStatus("error");
        setServerError("Please wait a few minutes before submitting again.");
        return;
      }

      if (!res.ok) {
        setStatus("error");
        setServerError(
          "Something went wrong. Please try again or email us directly."
        );
        return;
      }

      setSubmittedEmail(form.email);
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
      setServerError(
        "Unable to reach the server. Please check your connection and try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[1.5rem] border border-green-500/20 bg-green-500/10 p-6 text-center">
        <p className="mb-2 font-heading text-xl font-semibold text-green-300">
          Message sent!
        </p>
        <p className="text-sm text-text-muted">
          We&apos;ll get back to {submittedEmail || "your inbox"} within a few
          days.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-accent transition-colors hover:text-accent-soft"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div>
        <p className="font-heading text-2xl font-semibold text-text">
          Get in touch
        </p>
        <p className="mt-2 text-sm leading-6 text-text-muted">
          Tell us what you are building and where the workflow is breaking
          down.
        </p>
      </div>

      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-sm font-medium text-text"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          disabled={status === "submitting"}
          className="w-full rounded-xl border border-white/10 bg-panel px-4 py-3 text-text placeholder:text-text-muted transition-colors focus:border-accent focus:outline-none disabled:opacity-50"
          placeholder="Your name"
          aria-describedby={errors.name ? "name-error" : undefined}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-xs text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-text"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          disabled={status === "submitting"}
          className="w-full rounded-xl border border-white/10 bg-panel px-4 py-3 text-text placeholder:text-text-muted transition-colors focus:border-accent focus:outline-none disabled:opacity-50"
          placeholder="you@example.com"
          aria-describedby={errors.email ? "email-error" : undefined}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-xs text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="subject"
          className="mb-1.5 block text-sm font-medium text-text"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={form.subject}
          onChange={handleChange}
          disabled={status === "submitting"}
          className="w-full rounded-xl border border-white/10 bg-panel px-4 py-3 text-text placeholder:text-text-muted transition-colors focus:border-accent focus:outline-none disabled:opacity-50"
          placeholder="What's this about?"
          aria-describedby={errors.subject ? "subject-error" : undefined}
          aria-invalid={!!errors.subject}
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1 text-xs text-red-400">
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-text"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          disabled={status === "submitting"}
          className="w-full resize-y rounded-xl border border-white/10 bg-panel px-4 py-3 text-text placeholder:text-text-muted transition-colors focus:border-accent focus:outline-none disabled:opacity-50"
          placeholder="Tell us what you're working on..."
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-400">
            {errors.message}
          </p>
        )}
        <p className="mt-1 text-xs text-text-muted text-right">
          {form.message.length}/5000
        </p>
      </div>

      {serverError && (
        <p role="alert" className="text-sm text-red-400">
          {serverError}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="self-start rounded-full bg-accent px-6 py-3 font-heading font-medium text-black transition-colors hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "submitting" ? "Sending..." : "Send message"}
        </button>
        <p className="text-xs text-text-muted">
          Prefer email? Reach us directly at hello@studioseventeen.io.
        </p>
      </div>
    </form>
  );
}
