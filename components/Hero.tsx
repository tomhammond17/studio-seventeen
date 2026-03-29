import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_18%_24%,rgba(232,93,38,0.2),transparent_0_42%),radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.08),transparent_0_28%)]" />
      <div className="mx-auto grid max-w-content gap-16 px-6 py-20 sm:py-24 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-end lg:py-32">
        <div className="relative max-w-copy">
          <div className="flex flex-wrap items-center gap-4 text-[0.72rem] uppercase tracking-[0.3em] text-accent-soft">
            <p className="font-medium text-text">Studio Seventeen</p>
            <span className="h-px w-10 bg-white/12" />
            <p>Industrial software tools</p>
          </div>
          <h1 className="mt-8 font-heading text-5xl font-semibold leading-[0.92] tracking-[-0.04em] text-text sm:text-6xl lg:text-[5.25rem]">
            Software for teams who have to trust the output.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-text-soft sm:text-[1.15rem]">
            We build narrow, reliable tools for power systems, simulation, and
            messy operational data, then keep them sharp enough to earn a place
            in real delivery workflows.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-accent px-6 py-3 font-heading text-sm font-medium text-black transition-colors hover:bg-accent/90"
            >
              Explore our work
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/12 px-6 py-3 text-sm text-text transition-colors hover:border-white/30"
            >
              Talk to the studio
            </Link>
          </div>
          <div className="mt-10 grid gap-4 border-t border-white/8 pt-6 text-sm text-text-muted sm:grid-cols-3">
            {[
              "Conversion and validation tools for industrial data.",
              "Simulation environments for SCADA and EMS testing.",
              "Focused products with fast feedback and low operational drag.",
            ].map((item) => (
              <p key={item} className="max-w-[18rem] leading-6">
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2.5rem] bg-accent/8 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-7 py-7 shadow-[0_28px_90px_rgba(0,0,0,0.35)] sm:px-8 sm:py-8">
            <div className="flex items-center justify-between gap-6 border-b border-white/8 pb-5">
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.28em] text-accent-soft">
                  Working model
                </p>
                <p className="mt-3 max-w-sm font-heading text-2xl font-medium leading-tight text-text">
                  From field data and unstable inputs to dependable operator
                  tooling.
                </p>
              </div>
              <p className="max-w-[8rem] text-right text-xs uppercase tracking-[0.26em] text-text-muted">
                Shipping focused products now
              </p>
            </div>

            <div className="space-y-6 py-7">
              {[
                {
                  label: "Map",
                  detail: "Normalize CSV, XML, JSON, and PDF register formats.",
                },
                {
                  label: "Validate",
                  detail: "Catch gaps, collisions, and inconsistent address ranges.",
                },
                {
                  label: "Deploy",
                  detail: "Hand teams tooling they can run on laptops, plants, and field sites.",
                },
              ].map(({ label, detail }) => (
                <div key={label} className="grid grid-cols-[auto_1fr] gap-4">
                  <div className="flex flex-col items-center">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
                    {label !== "Deploy" && (
                      <span className="mt-3 h-full w-px bg-white/10" />
                    )}
                  </div>
                  <div className="pb-1">
                    <p className="font-heading text-lg font-medium text-text">
                      {label}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-text-muted">
                      {detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-5 border-t border-white/8 pt-5 sm:grid-cols-2">
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.26em] text-accent-soft">
                  Domains
                </p>
                <p className="mt-2 text-sm leading-6 text-text-muted">
                  Industrial automation, power systems, simulation, and
                  conversion-heavy workflows.
                </p>
              </div>
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.26em] text-accent-soft">
                  Operating bias
                </p>
                <p className="mt-2 text-sm leading-6 text-text-muted">
                  Small scope, sharp fit, and behavior sturdy enough for
                  environments where downtime is expensive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
