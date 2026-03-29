import Link from "next/link";

export default function AboutStub() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-content px-6">
        <Link
          href="/about"
          className="text-sm text-text-muted hover:text-text transition-colors"
        >
          Studio Seventeen, est. 2025. We build focused SaaS for industrial
          practitioners. →
        </Link>
      </div>
    </section>
  );
}
