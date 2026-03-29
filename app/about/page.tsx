import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Studio Seventeen is an independent software studio building precision tools for industrial engineers.",
};

export default function AboutPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-content px-6 max-w-2xl">
        <h1 className="font-heading text-3xl sm:text-4xl font-semibold mb-10">
          About Studio Seventeen
        </h1>

        <div className="space-y-10">
          <div>
            <h2 className="font-heading text-xl font-semibold mb-3">
              The founder
            </h2>
            <p className="text-text-muted leading-relaxed">
              [Founder bio placeholder — the founder will provide details about
              their background in industrial software, what drove them to start
              Studio Seventeen, and their philosophy on building tools that work
              in real environments.]
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold mb-3">
              Our mission
            </h2>
            <p className="text-text-muted leading-relaxed">
              Industrial software is underserved. The tools engineers rely on
              were built decades ago, ship on decade-old assumptions, and break
              in environments where failure isn&apos;t an option. We build
              focused replacements — small, sharp tools that do one thing
              extremely well and work reliably in every environment they&apos;re
              deployed to.
            </p>
            <p className="text-text-muted leading-relaxed mt-3">
              We are not building a platform. We are not building an ecosystem.
              We are building tools.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold mb-3">Hiring</h2>
            <p className="text-text-muted leading-relaxed">
              We hire slowly and deliberately. When we do hire, we look for
              engineers who care deeply about correctness, who have experience
              with industrial or embedded systems, and who are comfortable with
              ambiguity.
            </p>
            <p className="text-text-muted leading-relaxed mt-3">
              If that sounds like you and you want to work on problems that
              matter in the physical world, reach out at{" "}
              <a
                href="mailto:hello@studioseventeen.com"
                className="text-accent underline"
              >
                hello@studioseventeen.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
