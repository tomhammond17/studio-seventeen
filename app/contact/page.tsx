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
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-content px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="max-w-copy">
            <p className="text-sm uppercase tracking-[0.24em] text-accent-soft">
              Contact
            </p>
            <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-text sm:text-5xl">
              Let&apos;s talk about the workflow you need to sharpen.
            </h1>
            <p className="mt-5 text-base leading-7 text-text-muted sm:text-lg">
              Reach out if you need help with industrial tooling, simulation,
              or an operational workflow that should be faster and more
              reliable than it is now.
            </p>
            <div className="mt-10 space-y-6 border-t border-white/6 pt-8">
              <div>
                <p className="font-heading text-sm font-semibold uppercase tracking-[0.24em] text-text-soft">
                  Email
                </p>
                <a
                  href="mailto:hello@studioseventeen.io"
                  className="mt-2 inline-flex text-base text-accent transition-colors hover:text-accent-soft"
                >
                  hello@studioseventeen.io
                </a>
              </div>
              <div>
                <p className="font-heading text-sm font-semibold uppercase tracking-[0.24em] text-text-soft">
                  Best for
                </p>
                <p className="mt-2 text-base leading-7 text-text-muted">
                  Product inquiries, custom tooling, simulator hosting, and
                  teams that need an opinionated engineering partner.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/8 pt-8 lg:pl-10 lg:pt-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
