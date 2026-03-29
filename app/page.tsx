import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Studio Seventeen — Industrial software tools",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="pb-16">
        <div className="mx-auto max-w-content px-6 space-y-12">
          {/* ModMapper */}
          <div>
            <div className="flex items-baseline gap-3 mb-1">
              <h2 className="font-heading font-semibold text-xl">ModMapper</h2>
              <span className="text-xs text-accent font-medium uppercase tracking-wide">
                Live
              </span>
            </div>
            <p className="text-text-muted text-sm mb-4 max-w-lg">
              Convert Modbus register maps between CSV, XML, JSON, IEC 61131-3,
              and PDF. Handles 10K+ registers in under 2 seconds.
            </p>
            <div className="bg-terminal border border-terminal-border rounded p-4 font-mono text-xs text-text-muted max-w-md mb-4 leading-relaxed">
              <span className="text-text">$</span> modmapper convert
              registers.csv --format json
              <br />
              <span className="text-text ml-2">847 registers → 42 KB</span>
              <br />
              <span className="text-text ml-2">0.3s</span>
            </div>
            <a
              href="https://modmapper.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:underline"
            >
              modmapper.io →
            </a>
          </div>

          {/* Divider */}
          <hr className="border-white/5" />

          {/* Simulators */}
          <div>
            <div className="flex items-baseline gap-3 mb-1">
              <h2 className="font-heading font-semibold text-xl">
                Simulation Suite
              </h2>
              <span className="text-xs text-text-muted font-medium uppercase tracking-wide">
                Open source
              </span>
            </div>
            <p className="text-text-muted text-sm mb-6 max-w-lg">
              Modbus/SCADA simulators for testing power software without
              hardware. Generator fleets, battery storage, and solar inverters.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <h3 className="font-heading text-sm font-semibold mb-1">
                  Generator Fleet
                </h3>
                <p className="text-text-muted text-xs leading-relaxed">
                  2,000 diesel generators with state machines, 21 registers per
                  unit, and 30 fault types.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold mb-1">
                  BESS
                </h3>
                <p className="text-text-muted text-xs leading-relaxed">
                  100 battery units with peak-shaving dispatch, SOC tracking,
                  and scriptable runbooks.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold mb-1">
                  PV Inverters
                </h3>
                <p className="text-text-muted text-xs leading-relaxed">
                  100 solar inverters with real weather data, curtailment
                  control, and 6 operating states.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Link
                href="/simulators"
                className="text-sm text-accent hover:underline"
              >
                Details & pricing →
              </Link>
              <a
                href="https://github.com/tomhammond17"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-muted hover:text-text transition-colors"
              >
                GitHub →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
