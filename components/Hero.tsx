import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
          Precision tools for{" "}
          <span className="text-accent">industrial software</span>
        </h1>
        <p className="text-text-muted text-lg sm:text-xl max-w-2xl mb-10">
          We build focused, reliable software for engineers who need tools that
          work — every time, in every environment.
        </p>
        <Link
          href="/projects"
          className="inline-block bg-accent text-white font-heading font-medium px-6 py-3 rounded hover:bg-accent/90 transition-colors"
        >
          View our projects →
        </Link>
      </div>
    </section>
  );
}
