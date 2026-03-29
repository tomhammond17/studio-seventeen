import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-content px-6">
        <h1 className="font-mono font-bold text-2xl sm:text-3xl mb-2">
          Studio Seventeen
        </h1>
        <p className="text-text text-base mb-6">
          Precision tools for industrial software.
        </p>
        <div
          className="bg-[#111111] border border-[#222222] rounded-md p-4 font-mono text-sm mb-6 max-w-xl"
          role="img"
          aria-label="Terminal demo: modmapper convert registers.csv --format json"
        >
          <p className="text-text-muted mb-3">
            modmapper convert registers.csv --format json
          </p>
          <div className="text-text space-y-1 pl-2">
            <p>Parsed 847 Modbus registers</p>
            <p>Validated address ranges (0x0000-0x034E)</p>
            <p>Generated registers.json (42 KB)</p>
          </div>
          <p className="text-text-muted mt-3 pl-2">Done in 0.3s</p>
        </div>
        <Link href="/projects" className="text-accent hover:underline text-sm">
          Explore our tools →
        </Link>
      </div>
    </section>
  );
}
