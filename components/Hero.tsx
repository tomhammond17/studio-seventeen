import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-content px-6">
        <h1 className="font-mono font-bold text-2xl sm:text-3xl mb-2">
          Studio Seventeen
        </h1>
        <p className="text-text text-base mb-2">
          Precision tools for industrial software.
        </p>
        <p className="text-text-muted text-sm max-w-lg">
          We build focused software for engineers who work with power systems,
          Modbus protocols, and industrial automation — tools that do one thing
          well and work reliably in every environment.
        </p>
      </div>
    </section>
  );
}
