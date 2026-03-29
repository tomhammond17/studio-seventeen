import type { Metadata } from "next";
import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("@/components/ContactForm"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Studio Seventeen.",
};

export default function ContactPage() {
  return (
    <section className="py-10 sm:py-12">
      <div className="mx-auto max-w-content px-6">
        <div className="max-w-lg">
          <h1 className="font-heading text-xl sm:text-2xl font-semibold mb-3">
            Get in touch
          </h1>
          <p className="text-text-muted text-sm mb-8">
            Have a project in mind, a question about our tools, or just want to
            say hello? Send us a message.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
