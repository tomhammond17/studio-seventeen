import type { Metadata } from "next";
import Link from "next/link";
import SignalDemo from "@/components/SignalDemo";
import { productsBySlug } from "@/data/products";

export const metadata: Metadata = {
  title: "Simulator Products",
  description:
    "Generator, BESS, and PV simulator product pages with perpetual pricing, optional maintenance, and bundle options for SCADA and HMI teams.",
  openGraph: {
    title: "Simulator Products — Studio Seventeen",
    description:
      "Generator, BESS, and PV simulator product pages with perpetual pricing, optional maintenance, and bundle options for SCADA and HMI teams.",
    url: "https://studioseventeen.io/simulators",
    siteName: "Studio Seventeen",
    type: "website",
  },
};

const simulatorSlugs = [
  "generator-fleet-simulator",
  "bess-simulator",
  "pv-simulator",
] as const;

const simulatorProducts = simulatorSlugs.map((slug) => productsBySlug[slug]);
const simulatorBundle = productsBySlug["simulator-suite"];
const derToolkit = productsBySlug["der-toolkit"];

export default function SimulatorsPage() {
  return (
    <>
      <section className="border-b border-white/5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-content gap-12 px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-end">
          <div className="max-w-copy">
            <p className="text-sm uppercase tracking-[0.24em] text-accent-soft">
              Simulator products
            </p>
            <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-text sm:text-5xl">
              Start testing SCADA without hardware.
            </h1>
            <p className="mt-5 text-base leading-7 text-text-muted sm:text-lg">
              Studio Seventeen offers generator, battery, and PV simulators for
              teams that need realistic Modbus behavior before equipment lands
              in the lab. The pricing is direct: perpetual licenses for project
              work, optional maintenance for active teams, and bundle options
              when the scope spans the whole DER stack.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-accent px-6 py-3 font-heading text-sm font-medium text-black transition-colors hover:bg-accent/90"
              >
                Talk to us about simulator access
              </Link>
              <Link
                href="/products/der-toolkit"
                className="inline-flex rounded-full border border-white/12 px-6 py-3 text-sm text-text transition-colors hover:border-accent/50 hover:text-accent-soft"
              >
                View the DER toolkit
              </Link>
            </div>
          </div>

          <div className="border-t border-white/8 pt-6 lg:pl-10 lg:pt-0">
            <div className="space-y-6">
              {[
                "Realistic register behavior instead of flat sample values.",
                "Protocol-accurate Modbus responses for HMI and SCADA validation.",
                "Simple configuration so teams can stand up scenarios quickly.",
              ].map((item) => (
                <div key={item} className="border-b border-white/8 pb-5">
                  <p className="text-sm leading-6 text-text-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 py-16 sm:py-20">
        <div className="mx-auto max-w-content px-6">
          <div className="max-w-copy">
            <p className="text-sm uppercase tracking-[0.24em] text-accent-soft">
              Individual licenses
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-text sm:text-4xl">
              Choose the simulator that matches the asset class you are shipping now.
            </h2>
          </div>

          <div className="mt-10 flex flex-col">
            {simulatorProducts.map((product) => (
              <article
                key={product.slug}
                className="grid gap-8 border-t border-white/10 py-10 last:border-b last:border-white/10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]"
              >
                <div className="max-w-2xl">
                  <p className="text-sm uppercase tracking-[0.24em] text-accent-soft">
                    {product.shortName}
                  </p>
                  <h3 className="mt-4 font-heading text-3xl font-semibold text-text">
                    {product.title}
                  </h3>
                  <p className="mt-5 text-base leading-7 text-text-muted">
                    {product.intro}
                  </p>

                  <div className="mt-7 grid gap-4 border-t border-white/8 pt-6 md:grid-cols-3">
                    {product.highlights.map((item) => (
                      <p key={item} className="text-sm leading-6 text-text-muted">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="lg:pl-10">
                  <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.02] px-6 py-6">
                    <p className="text-[0.68rem] uppercase tracking-[0.24em] text-accent-soft">
                      Pricing
                    </p>
                    <div className="mt-4 space-y-5">
                      {product.pricing.map((tier) => (
                        <div key={tier.name} className="border-b border-white/8 pb-5 last:border-b-0 last:pb-0">
                          <div className="flex items-center justify-between gap-4">
                            <p className="font-heading text-xl font-medium text-text">
                              {tier.name}
                            </p>
                            <p className="font-heading text-xl text-text">
                              {tier.price}
                            </p>
                          </div>
                          <p className="mt-1 text-[0.68rem] uppercase tracking-[0.22em] text-text-muted">
                            {tier.cadence}
                          </p>
                          <p className="mt-3 text-sm leading-6 text-text-muted">
                            {tier.summary}
                          </p>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/products/${product.slug}`}
                      className="mt-6 inline-flex text-sm text-accent transition-colors hover:text-accent-soft"
                    >
                      View full product page
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-content gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.95fr)]">
          <div className="max-w-copy">
            <p className="text-sm uppercase tracking-[0.24em] text-accent-soft">
              Bundle options
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-text sm:text-4xl">
              Buy the full simulator bench, or step up to the complete DER workflow.
            </h2>
            <p className="mt-5 text-base leading-7 text-text-muted">
              Teams working across multiple asset types usually want one clean
              purchase, not a scattered collection of one-off tools. The bundle
              pages keep that decision short and easy to scan.
            </p>
          </div>

          <div className="grid gap-6">
            {[simulatorBundle, derToolkit].map((product) => (
              <article
                key={product.slug}
                className="rounded-[1.6rem] border border-white/10 bg-white/[0.02] px-6 py-6"
              >
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-accent-soft">
                  {product.category}
                </p>
                <h3 className="mt-4 font-heading text-2xl font-semibold text-text">
                  {product.shortName}
                </h3>
                <p className="mt-4 text-sm leading-7 text-text-muted">
                  {product.description}
                </p>
                <div className="mt-5 border-t border-white/8 pt-5">
                  <p className="font-heading text-3xl font-semibold text-text">
                    {product.pricing[0].price}
                  </p>
                  <p className="mt-2 text-sm text-text-muted">
                    {product.pricing[0].summary}
                  </p>
                </div>
                <Link
                  href={`/products/${product.slug}`}
                  className="mt-5 inline-flex text-sm text-accent transition-colors hover:text-accent-soft"
                >
                  View bundle details
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-content px-6">
          <SignalDemo demo={simulatorBundle.demo} />
        </div>
      </section>
    </>
  );
}
