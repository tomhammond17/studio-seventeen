import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Studio Seventeen is an independent software studio building precision tools for industrial engineers.",
};

export default function AboutPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-content px-6">
        <div className="max-w-copy">
          <p className="text-sm uppercase tracking-[0.24em] text-accent-soft">
            About
          </p>
          <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-text sm:text-5xl">
            An independent studio for industrial software.
          </h1>
          <p className="mt-5 text-base leading-7 text-text-muted sm:text-lg">
            We build focused products for engineers who work in environments
            where failures are expensive, debugging time is limited, and the
            software still has to earn trust every day.
          </p>
        </div>

        <div className="mt-12 grid gap-12 border-t border-white/6 pt-10 lg:grid-cols-[220px_minmax(0,1fr)]">
          <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.24em] text-text-soft">
            The founder
          </h2>
          <div className="max-w-2xl space-y-4">
            <p className="text-base leading-7 text-text-muted">
              Studio Seventeen is founder-led and deliberately small. That
              keeps product decisions close to the engineering work, the
              operational realities, and the people who actually need the tool.
            </p>
            <p className="text-base leading-7 text-text-soft">
              The studio stays focused on practical software that reduces
              manual operations, clarifies failure modes, and holds up once it
              leaves the demo environment.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-12 border-t border-white/6 pt-10 lg:grid-cols-[220px_minmax(0,1fr)]">
          <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.24em] text-text-soft">
            Our mission
          </h2>
          <div className="max-w-2xl space-y-4">
            <p className="text-base leading-7 text-text-muted">
              Industrial software is still full of brittle workflows, aging
              assumptions, and tools that fall apart outside ideal conditions.
              We build sharp replacements that solve one real problem well and
              stay dependable once they leave the demo environment.
            </p>
            <p className="text-base leading-7 text-text-soft">
              We are not building an ecosystem. We are building tools engineers
              can reach for with confidence.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-12 border-t border-white/6 pt-10 lg:grid-cols-[220px_minmax(0,1fr)]">
          <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.24em] text-text-soft">
            Hiring
          </h2>
          <div className="max-w-2xl space-y-4">
            <p className="text-base leading-7 text-text-muted">
              We hire slowly. When we do, we look for engineers who care about
              correctness, enjoy ambiguity, and have respect for the realities
              of industrial or embedded systems.
            </p>
            <p className="text-base leading-7 text-text-muted">
              If that sounds like you, write to{" "}
              <a
                href="mailto:hello@studioseventeen.io"
                className="text-accent transition-colors hover:text-accent-soft"
              >
                hello@studioseventeen.io
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
