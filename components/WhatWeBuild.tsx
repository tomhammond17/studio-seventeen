const valueProps = [
  {
    title: "Automation-first",
    description:
      "Manual processes become liabilities. We build tools that eliminate repetitive work and reduce human error in critical workflows.",
  },
  {
    title: "Format-agnostic",
    description:
      "Industrial data lives in dozens of formats. Our tools handle the conversions so your team doesn't have to.",
  },
  {
    title: "Offline-capable",
    description:
      "Factory floors and field sites don't have reliable internet. Software that works anywhere, not just in ideal conditions.",
  },
  {
    title: "Auditable output",
    description:
      "Every transformation is traceable. Know exactly what changed, when, and why — because in industrial environments, that matters.",
  },
];

export default function WhatWeBuild() {
  return (
    <section className="py-16 border-t border-white/10">
      <div className="mx-auto max-w-content px-6">
        <h2 className="font-heading text-2xl font-semibold mb-10">
          What we build
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {valueProps.map(({ title, description }) => (
            <li key={title} className="flex flex-col gap-2">
              <span className="font-heading font-medium text-accent">
                {title}
              </span>
              <p className="text-text-muted text-sm leading-relaxed">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
