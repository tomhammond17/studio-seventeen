import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-x-0 top-0 h-[24rem] bg-[radial-gradient(circle_at_18%_24%,rgba(232,93,38,0.2),transparent_0_42%),radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.08),transparent_0_28%)] sm:h-[30rem] lg:h-[34rem]" />
      <div className="mx-auto grid max-w-content gap-16 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-end lg:py-32">
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

        <div className="relative lg:pl-10">
          <div className="absolute inset-y-0 left-0 hidden w-px bg-white/8 lg:block" />
          <div className="space-y-10 border-t border-white/8 pt-6 lg:border-t-0 lg:pt-0">
            <div className="flex items-end justify-between gap-6 border-b border-white/8 pb-6">
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.28em] text-accent-soft">
                  Working model
                </p>
                <p className="mt-3 max-w-sm font-heading text-2xl font-medium leading-tight text-text">
                  From unstable field inputs to dependable operator tooling.
                </p>
              </div>
              <p className="max-w-[8rem] text-right text-xs uppercase tracking-[0.26em] text-text-muted">
                Shipping focused products now
              </p>
            </div>

            <div className="space-y-7">
              {[
                {
                  count: "01",
                  label: "Map the source",
                  detail: "Normalize CSV, XML, JSON, and PDF register formats without manual cleanup loops.",
                },
                {
                  count: "02",
                  label: "Validate the edge cases",
                  detail: "Catch collisions, gaps, and inconsistent address ranges before they become field bugs.",
                },
                {
                  count: "03",
                  label: "Ship something teams will keep using",
                  detail: "Deliver tools that can live on laptops, plant networks, and test environments without friction.",
                },
              ].map(({ count, label, detail }) => (
                <div
                  key={label}
                  className="grid gap-4 border-b border-white/8 pb-7 sm:grid-cols-[auto_1fr]"
                >
                  <p className="font-heading text-sm font-medium tracking-[0.24em] text-accent-soft">
                    {count}
                  </p>
                  <div>
                    <p className="font-heading text-xl font-medium text-text">
                      {label}
                    </p>
                    <p className="mt-2 max-w-md text-sm leading-6 text-text-muted">
                      {detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
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
