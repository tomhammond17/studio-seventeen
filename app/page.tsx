import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Studio Seventeen — Industrial software tools",
};

export default function HomePage() {
  const modmapper = projects.find((project) => project.slug === "modmapper");

  return (
    <>
      <Hero />

      <section className="border-b border-white/5 py-16 sm:py-20">
        <div className="mx-auto max-w-content px-6">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.24em] text-accent-soft">
              What we build
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-text sm:text-4xl">
              Focused products shaped by operational reality.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-text-muted sm:text-lg">
              Conversion, simulation, and operator-facing tooling for teams
              that need reliability without buying into platform bloat.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Domain expertise first",
                description:
                  "We design around the shape of the problem before we design around growth mechanics.",
              },
              {
                title: "Narrow scope, high leverage",
                description:
                  "Each product does one important job extremely well and avoids the bloat that slows industrial teams down.",
              },
              {
                title: "Built for practitioners",
                description:
                  "Our tools are meant for laptops, staging rigs, field deployments, and the engineers who have to trust them.",
              },
            ].map(({ title, description }) => (
              <div key={title} className="border-t border-white/8 pt-5">
                <h3 className="font-heading text-lg font-medium text-text">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-text-muted">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 py-16 sm:py-20">
        <div className="mx-auto max-w-content px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-copy">
              <p className="text-sm uppercase tracking-[0.24em] text-accent-soft">
                Featured work
              </p>
              <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-text sm:text-4xl">
                Current tools, not concept art.
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-sm text-accent transition-colors hover:text-accent-soft"
            >
              Browse all projects
            </Link>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            {modmapper && (
              <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-surface/85">
                <div className="space-y-6 px-7 py-8 sm:px-8 sm:py-9">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-heading text-2xl font-semibold text-text">
                      {modmapper.name}
                    </h3>
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-accent-soft">
                      {modmapper.status}
                    </span>
                  </div>
                  <p className="max-w-xl text-base leading-7 text-text-soft">
                    Convert Modbus register maps between CSV, XML, JSON,
                    IEC 61131-3, and PDF without patching brittle scripts
                    together by hand.
                  </p>

                  <div className="grid gap-4 border-t border-white/8 pt-6 md:grid-cols-3">
                    {[
                      "Automates repeated format conversion work",
                      "Validates address ranges before they become field bugs",
                      "Handles large maps quickly enough for real delivery workflows",
                    ].map((item) => (
                      <p
                        key={item}
                        className="text-sm leading-6 text-text-muted"
                      >
                        {item}
                      </p>
                    ))}
                  </div>

                  <div className="border-l border-accent/40 pl-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-accent-soft">
                      Why teams keep it open
                    </p>
                    <div className="mt-4 space-y-3 text-sm leading-6 text-text-muted">
                      <p>
                        One place to clean up inconsistent register maps before
                        they spread across downstream teams.
                      </p>
                      <p>
                        Fast validation for address ranges, duplicates, and
                        export quality before delivery day.
                      </p>
                      <p>
                        Output formats that fit the way controls engineers
                        already work instead of forcing a new workflow.
                      </p>
                    </div>
                  </div>

                  <Link
                    href={modmapper.url}
                    className="inline-flex rounded-full bg-accent px-6 py-3 font-heading text-sm font-medium text-black transition-colors hover:bg-accent/90"
                  >
                    View pricing
                  </Link>
                </div>
              </article>
            )}

            <article className="flex flex-col justify-between border-t border-white/10 pt-7 lg:pl-6">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-accent-soft">
                  Simulation suite
                </p>
                <h3 className="mt-4 font-heading text-2xl font-semibold text-text">
                  Product pages for simulator licenses and DER bundle pricing.
                </h3>
                <p className="mt-4 text-sm leading-7 text-text-muted">
                  Generator, battery, and PV simulators for SCADA and HMI teams
                  that need realistic Modbus behavior before hardware arrives.
                </p>
                <div className="mt-8 space-y-4 border-t border-white/8 pt-6">
                  {[
                    "Generator Fleet Simulator",
                    "BESS Simulator",
                    "PV Simulator",
                    "DER Toolkit bundle",
                  ].map((name) => (
                    <div key={name} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      <p className="text-sm text-text-soft">{name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/simulators"
                  className="text-sm text-accent transition-colors hover:text-accent-soft"
                >
                  Explore simulator pricing
                </Link>
                <Link
                  href="/products/der-toolkit"
                  className="text-sm text-text-muted transition-colors hover:text-text"
                >
                  See the DER toolkit
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-content px-6">
          <div className="grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="max-w-2xl space-y-5">
              <p className="text-sm uppercase tracking-[0.24em] text-accent-soft">
                Why it feels different
              </p>
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-text sm:text-4xl">
                Small tools. Sharp scope. No platform theater.
              </h2>
              <p className="text-base leading-7 text-text-muted">
                We keep the promise narrow enough to keep it credible: clear
                workflows, fast feedback, and software that respects the person
                using it.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-white/12 px-6 py-3 text-sm text-text transition-colors hover:border-accent/50 hover:text-accent-soft"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
