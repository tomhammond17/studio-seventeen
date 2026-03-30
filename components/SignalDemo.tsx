import type { ProductDetail } from "@/data/products";

interface SignalDemoProps {
  demo: ProductDetail["demo"];
}

export default function SignalDemo({ demo }: SignalDemoProps) {
  return (
    <div className="signal-demo rounded-[1.8rem] border border-white/10 bg-black/30 p-5 sm:p-6">
      <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-5">
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.26em] text-accent-soft">
            Demo loop
          </p>
          <h3 className="mt-3 font-heading text-2xl font-semibold text-text">
            {demo.title}
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-6 text-text-muted">
            {demo.caption}
          </p>
        </div>
        <div className="hidden h-3 w-3 rounded-full bg-accent shadow-[0_0_18px_rgba(232,93,38,0.65)] sm:block" />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {demo.metrics.map((metric, index) => (
          <div
            key={metric.label}
            className="rounded-[1.2rem] border border-white/8 bg-white/[0.02] px-4 py-4"
            style={{ animationDelay: `${index * 160}ms` }}
          >
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-text-muted">
              {metric.label}
            </p>
            <p
              className={`mt-3 font-heading text-2xl font-semibold ${
                metric.accent ? "text-accent-soft" : "text-text"
              }`}
            >
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 overflow-hidden rounded-[1.4rem] border border-white/8 bg-white/[0.02]">
        <div className="grid grid-cols-[84px_minmax(0,1fr)_auto] gap-3 border-b border-white/8 px-4 py-3 text-[0.68rem] uppercase tracking-[0.24em] text-text-muted">
          <span>Address</span>
          <span>Register</span>
          <span>Value</span>
        </div>
        <div className="signal-demo__feed">
          {demo.feed.map((item, index) => (
            <div
              key={`${item.address}-${item.register}`}
              className="signal-demo__row grid grid-cols-[84px_minmax(0,1fr)_auto] gap-3 px-4 py-3 text-sm"
              style={{ animationDelay: `${index * 280}ms` }}
            >
              <span className="font-mono text-text-soft">{item.address}</span>
              <span className="text-text">{item.register}</span>
              <span className="font-mono text-accent-soft">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
