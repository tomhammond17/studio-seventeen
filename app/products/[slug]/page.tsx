import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SignalDemo from "@/components/SignalDemo";
import { products, productsBySlug } from "@/data/products";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = productsBySlug[params.slug];

  if (!product) {
    return {};
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} — Studio Seventeen`,
      description: product.description,
      url: `https://studioseventeen.io/products/${product.slug}`,
      siteName: "Studio Seventeen",
      type: "website",
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = productsBySlug[params.slug];

  if (!product) {
    notFound();
  }

  const relatedProducts = product.relatedSlugs
    .map((slug) => productsBySlug[slug])
    .filter(Boolean);

  return (
    <>
      <section className="border-b border-white/5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-content gap-12 px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-end">
          <div className="max-w-copy">
            <p className="text-sm uppercase tracking-[0.24em] text-accent-soft">
              {product.eyebrow}
            </p>
            <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-text sm:text-5xl">
              {product.title}
            </h1>
            <p className="mt-5 text-base leading-7 text-text-muted sm:text-lg">
              {product.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={product.primaryCta.href}
                className="inline-flex rounded-full bg-accent px-6 py-3 font-heading text-sm font-medium text-black transition-colors hover:bg-accent/90"
              >
                {product.primaryCta.label}
              </Link>
              {product.secondaryCta &&
                (product.secondaryCta.external ? (
                  <a
                    href={product.secondaryCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full border border-white/12 px-6 py-3 text-sm text-text transition-colors hover:border-accent/50 hover:text-accent-soft"
                  >
                    {product.secondaryCta.label}
                  </a>
                ) : (
                  <Link
                    href={product.secondaryCta.href}
                    className="inline-flex rounded-full border border-white/12 px-6 py-3 text-sm text-text transition-colors hover:border-accent/50 hover:text-accent-soft"
                  >
                    {product.secondaryCta.label}
                  </Link>
                ))}
            </div>
          </div>

          <div className="border-t border-white/8 pt-6 lg:pl-10 lg:pt-0">
            <div className="space-y-6">
              <div className="border-b border-white/8 pb-6">
                <p className="text-xs uppercase tracking-[0.24em] text-accent-soft">
                  Best for
                </p>
                <p className="mt-3 font-heading text-2xl font-medium text-text">
                  {product.audience}
                </p>
              </div>

              <div className="grid gap-4">
                {product.highlights.map((item) => (
                  <div key={item} className="border-b border-white/8 pb-4">
                    <p className="text-sm leading-6 text-text-muted">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 py-16 sm:py-20">
        <div className="mx-auto max-w-content px-6">
          <div className="max-w-copy">
            <p className="text-sm uppercase tracking-[0.24em] text-accent-soft">
              Pricing
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-text sm:text-4xl">
              Clear buying paths for real engineering work.
            </h2>
          </div>

          <div
            className={`mt-10 grid gap-6 ${
              product.pricing.length === 3
                ? "lg:grid-cols-3"
                : "lg:grid-cols-2"
            }`}
          >
            {product.pricing.map((tier) => (
              <article
                key={tier.name}
                className={`rounded-[1.8rem] border px-6 py-6 sm:px-7 ${
                  tier.highlight
                    ? "border-accent/35 bg-accent/[0.08]"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.24em] text-accent-soft">
                      {tier.cadence}
                    </p>
                    <h3 className="mt-3 font-heading text-2xl font-semibold text-text">
                      {tier.name}
                    </h3>
                  </div>
                  {tier.badge && (
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-accent-soft">
                      {tier.badge}
                    </span>
                  )}
                </div>
                <p className="mt-6 font-heading text-4xl font-semibold text-text">
                  {tier.price}
                </p>
                <p className="mt-4 text-sm leading-7 text-text-muted">
                  {tier.summary}
                </p>
              </article>
            ))}
          </div>

          {product.comparisonNote && (
            <div className="mt-8 border-l border-accent/40 pl-5">
              <p className="text-xs uppercase tracking-[0.24em] text-accent-soft">
                Buying note
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-text-muted">
                {product.comparisonNote}
              </p>
            </div>
          )}
        </div>
      </section>

      {product.comparisonTable && (
        <section className="border-b border-white/5 py-16 sm:py-20">
          <div className="mx-auto max-w-content px-6">
            <div className="max-w-copy">
              <p className="text-sm uppercase tracking-[0.24em] text-accent-soft">
                Comparison
              </p>
              <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-text sm:text-4xl">
                One view of the plan differences.
              </h2>
            </div>

            <div className="mt-10 overflow-hidden rounded-[1.8rem] border border-white/10">
              <div className="grid grid-cols-[minmax(180px,1.15fr)_repeat(3,minmax(0,1fr))] gap-px bg-white/10">
                <div className="bg-bg px-5 py-4 text-[0.68rem] uppercase tracking-[0.24em] text-text-muted">
                  Feature
                </div>
                {product.comparisonTable.columns.map((column) => (
                  <div
                    key={column}
                    className="bg-bg px-5 py-4 text-[0.68rem] uppercase tracking-[0.24em] text-accent-soft"
                  >
                    {column}
                  </div>
                ))}
                {product.comparisonTable.rows.map((row) => (
                  <Fragment key={row.label}>
                    <div
                      className="bg-bg px-5 py-4 text-sm text-text"
                    >
                      {row.label}
                    </div>
                    {row.values.map((value) => (
                      <div
                        key={`${row.label}-${value}`}
                        className="bg-bg px-5 py-4 text-sm leading-6 text-text-muted"
                      >
                        {value}
                      </div>
                    ))}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="border-b border-white/5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-content gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.95fr)] lg:items-start">
          <div className="max-w-copy">
            <p className="text-sm uppercase tracking-[0.24em] text-accent-soft">
              What this page promises
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-text sm:text-4xl">
              Specific value instead of marketing filler.
            </h2>
            <div className="mt-8 space-y-5">
              {product.deliverables.map((item, index) => (
                <div
                  key={item}
                  className="grid grid-cols-[auto_1fr] gap-4 border-b border-white/8 pb-5"
                >
                  <p className="font-heading text-sm tracking-[0.24em] text-accent-soft">
                    0{index + 1}
                  </p>
                  <p className="text-sm leading-7 text-text-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/8 pt-6 lg:pl-10 lg:pt-0">
            <p className="text-sm uppercase tracking-[0.24em] text-accent-soft">
              Why it is priced this way
            </p>
            <div className="mt-6 space-y-5">
              {product.proofPoints.map((item) => (
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
          <SignalDemo demo={product.demo} />
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-content px-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-copy">
                <p className="text-sm uppercase tracking-[0.24em] text-accent-soft">
                  Related pages
                </p>
                <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-text sm:text-4xl">
                  Continue through the Studio Seventeen product stack.
                </h2>
              </div>
              <Link
                href="/products"
                className="text-sm text-accent transition-colors hover:text-accent-soft"
              >
                Back to all products
              </Link>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((relatedProduct) => (
                <article
                  key={relatedProduct.slug}
                  className="border-t border-white/10 pt-5"
                >
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-accent-soft">
                    {relatedProduct.category}
                  </p>
                  <h3 className="mt-4 font-heading text-2xl font-semibold text-text">
                    {relatedProduct.shortName}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-text-muted">
                    {relatedProduct.description}
                  </p>
                  <Link
                    href={`/products/${relatedProduct.slug}`}
                    className="mt-5 inline-flex text-sm text-accent transition-colors hover:text-accent-soft"
                  >
                    View page
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
