import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Studio Seventeen — Precision tools for industrial software",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Product: ModMapper */}
      <section className="py-10">
        <div className="mx-auto max-w-content px-6">
          <div className="border border-white/10 rounded-lg p-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h2 className="font-heading font-semibold text-lg">ModMapper</h2>
              <span className="font-mono text-xs text-accent whitespace-nowrap">
                [LIVE]
              </span>
            </div>
            <p className="text-text-muted text-sm mb-4 max-w-lg">
              Modbus register map converter — automate your CSV ↔ XML ↔ JSON ↔
              PDF workflows. Built for engineers who maintain large register maps
              and need reliable format conversion.
            </p>
            <div
              className="bg-terminal border border-terminal-border rounded-md p-4 font-mono text-sm mb-4 max-w-xl"
              role="img"
              aria-label="Terminal demo: modmapper convert registers.csv --format json"
            >
              <p className="text-text-muted mb-3">
                modmapper convert registers.csv --format json
              </p>
              <div className="text-text space-y-1 pl-2">
                <p>Parsed 847 Modbus registers</p>
                <p>Validated address ranges (0x0000–0x034E)</p>
                <p>Generated registers.json (42 KB)</p>
              </div>
              <p className="text-text-muted mt-3 pl-2">Done in 0.3s</p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              <li className="flex flex-col gap-0.5">
                <span className="font-mono text-xs text-accent">
                  [formats]
                </span>
                <span className="text-text-muted text-sm">
                  CSV, XML, JSON, IEC 61131-3, PDF
                </span>
              </li>
              <li className="flex flex-col gap-0.5">
                <span className="font-mono text-xs text-accent">
                  [protocols]
                </span>
                <span className="text-text-muted text-sm">
                  Modbus, OPC-UA, BACnet
                </span>
              </li>
              <li className="flex flex-col gap-0.5">
                <span className="font-mono text-xs text-accent">
                  [validation]
                </span>
                <span className="text-text-muted text-sm">
                  Address range checks, type verification
                </span>
              </li>
              <li className="flex flex-col gap-0.5">
                <span className="font-mono text-xs text-accent">
                  [performance]
                </span>
                <span className="text-text-muted text-sm">
                  10K+ registers per run, &lt;2s
                </span>
              </li>
            </ul>
            <a
              href="https://modmapper.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent text-sm hover:underline"
            >
              Visit ModMapper →
            </a>
          </div>
        </div>
      </section>

      {/* Product: Industrial Simulation Suite */}
      <section className="py-10">
        <div className="mx-auto max-w-content px-6">
          <div className="border border-white/10 rounded-lg p-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h2 className="font-heading font-semibold text-lg">
                Industrial Simulation Suite
              </h2>
              <span className="font-mono text-xs text-accent whitespace-nowrap">
                [OPEN SOURCE]
              </span>
            </div>
            <p className="text-text-muted text-sm mb-4 max-w-lg">
              Three Modbus/SCADA simulators for testing industrial power
              software without hardware. Generator fleets, battery storage, and
              solar inverters — all with realistic state machines and Modbus TCP.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
              <div className="bg-terminal border border-terminal-border rounded-md p-3">
                <p className="font-mono text-xs text-accent mb-1">
                  [generator]
                </p>
                <p className="font-heading text-sm font-semibold mb-1">
                  Generator Fleet
                </p>
                <p className="text-text-muted text-xs">
                  2,000 units · 21 registers/unit · 30 fault types
                </p>
              </div>
              <div className="bg-terminal border border-terminal-border rounded-md p-3">
                <p className="font-mono text-xs text-accent mb-1">[bess]</p>
                <p className="font-heading text-sm font-semibold mb-1">
                  BESS Simulator
                </p>
                <p className="text-text-muted text-xs">
                  100 units · peak-shaving · SOC tracking · runbooks
                </p>
              </div>
              <div className="bg-terminal border border-terminal-border rounded-md p-3">
                <p className="font-mono text-xs text-accent mb-1">[pv]</p>
                <p className="font-heading text-sm font-semibold mb-1">
                  PV Simulator
                </p>
                <p className="text-text-muted text-xs">
                  100 inverters · real weather data · curtailment control
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/simulators"
                className="text-accent text-sm hover:underline"
              >
                View full details →
              </Link>
              <a
                href="https://github.com/tomhammond17"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted text-sm hover:text-text transition-colors"
              >
                Browse on GitHub →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-8">
        <div className="mx-auto max-w-content px-6">
          <Link
            href="/about"
            className="text-sm text-text-muted hover:text-text transition-colors"
          >
            Studio Seventeen, est. 2025. We build focused SaaS for industrial
            practitioners. →
          </Link>
        </div>
      </section>
    </>
  );
}
