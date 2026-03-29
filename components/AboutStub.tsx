import Link from "next/link";

export default function AboutStub() {
  return (
    <section className="py-16 border-t border-white/10">
      <div className="mx-auto max-w-content px-6">
        <h2 className="font-heading text-2xl font-semibold mb-4">About us</h2>
        <p className="text-text-muted leading-relaxed max-w-2xl mb-2">
          Studio Seventeen is an independent software studio building precision
          tools for industrial engineers. We believe software should be as
          reliable as the hardware it supports.
        </p>
        <p className="text-text-muted leading-relaxed max-w-2xl mb-6">
          We work slowly and deliberately — shipping fewer things but building
          each one right.
        </p>
        <Link
          href="/about"
          className="text-accent hover:underline text-sm"
        >
          Learn more about us →
        </Link>
      </div>
    </section>
  );
}
