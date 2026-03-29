import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Studio Seventeen.",
};

export default function ContactPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-content px-6">
        <div className="max-w-lg">
          <h1 className="font-heading text-3xl sm:text-4xl font-semibold mb-4">
            Get in touch
          </h1>
          <p className="text-text-muted mb-10">
            Have a project in mind, a question about our tools, or just want to
            say hello? Send us a message.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
