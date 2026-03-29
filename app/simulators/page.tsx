import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industrial Power Simulators",
  description:
    "Realistic Modbus/SCADA simulators for testing industrial power software — without hardware. Generator Fleet, BESS, and PV simulators available free and open source.",
  openGraph: {
    title: "Industrial Power Simulators — Studio Seventeen",
    description:
      "Realistic Modbus/SCADA simulators for testing industrial power software — without hardware.",
    url: "https://studioseventeen.io/simulators",
    siteName: "Studio Seventeen",
    type: "website",
  },
};

const simulators = [
  {
    id: "generator",
    name: "Generator Fleet Simulator",
    headline:
      "Simulate 2,000 diesel generators with realistic state machines, alarms, and Modbus TCP — instantly.",
    description:
      "A fully scriptable generator fleet with per-unit state machines, 21 Modbus registers per unit, 30 injectable fault types, and three operating modes. Runs locally in seconds.",
    specs: [
      "2,000 generator units",
      "21 Modbus registers / unit",
      "30 injectable alarm types",
      "3 operating modes (auto / manual / islanded)",
    ],
    useCases: ["HMI testing", "SCADA regression suites", "Operator training"],
    githubUrl: "https://github.com/tomhammond17/generator-fleet-simulator",
    dockerRun: "git clone https://github.com/tomhammond17/generator-fleet-simulator\ncd generator-fleet-simulator\npip install -r requirements.txt\npython main.py",
  },
  {
    id: "bess",
    name: "BESS Simulator",
    headline:
      "Simulate 100 battery storage units with dispatch logic, SOC tracking, and scenario playback.",
    description:
      "A battery energy storage system simulator with peak-shaving dispatch, auto-dispatch modes, no-export enforcement, and scriptable runbooks for deterministic test replay.",
    specs: [
      "100 BESS units",
      "Peak-shaving + auto-dispatch modes",
      "No-export enforcement",
      "Scriptable runbooks for replay",
    ],
    useCases: [
      "DER integration testing",
      "EMS development",
      "BESS operator training",
    ],
    githubUrl: "https://github.com/tomhammond17/BESS-Simulator",
    dockerRun: "git clone https://github.com/tomhammond17/BESS-Simulator\ncd BESS-Simulator\npip install -r requirements.txt\npython main.py",
  },
  {
    id: "pv",
    name: "PV Simulator",
    headline:
      "Simulate 100 solar inverters with real weather data or synthetic solar curves.",
    description:
      "A photovoltaic fleet simulator backed by Open-Meteo weather data or configurable synthetic irradiance curves. Six inverter states, curtailment control, and full Modbus TCP support.",
    specs: [
      "100 inverter units",
      "Open-Meteo weather integration",
      "Curtailment control",
      "6 inverter states + scenario playback",
    ],
    useCases: [
      "Solar SCADA testing",
      "EMS development",
      "Curtailment logic validation",
    ],
    githubUrl: "https://github.com/tomhammond17/PV-Simulator",
    dockerRun: "git clone https://github.com/tomhammond17/PV-Simulator\ncd PV-Simulator\npip install -r requirements.txt\npython main.py",
  },
];

const pricingTiers = [
  {
    name: "[FREE]",
    price: "$0",
    label: "Self-hosted",
    features: [
      "Full simulation suite",
      "MIT license — use anywhere",
      "Self-host via Git clone",
      "Community support (GitHub Issues)",
    ],
    cta: "View on GitHub",
    ctaHref: "https://github.com/tomhammond17",
    accent: false,
  },
  {
    name: "[PRO]",
    price: "$29–49/mo",
    label: "Per simulator",
    features: [
      "One-click provisioned instance",
      "Persistent state across restarts",
      "Prebuilt scenario library",
      "HTTPS endpoint + basic auth",
    ],
    cta: "Get hosted",
    ctaHref: "/contact",
    accent: true,
  },
  {
    name: "[TEAM]",
    price: "$99–149/mo",
    label: "All 3 simulators",
    features: [
      "All three simulators",
      "Shared team workspace",
      "Priority support",
      "Custom scenario uploads",
    ],
    cta: "Get hosted",
    ctaHref: "/contact",
    accent: false,
  },
  {
    name: "[ENTERPRISE]",
    price: "Custom",
    label: "On-premise or dedicated",
    features: [
      "Air-gapped / on-premise deploy",
      "Custom Modbus register maps",
      "SLA + dedicated support",
      "Training and onboarding",
    ],
    cta: "Talk to us",
    ctaHref: "/contact",
    accent: false,
  },
];

export default function SimulatorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-content px-6">
          <p className="font-mono text-xs text-accent mb-3">
            [industrial simulation suite]
          </p>
          <h1 className="font-heading font-bold text-2xl sm:text-3xl text-text mb-4 max-w-2xl">
            Test your industrial power software without hardware.
          </h1>
          <p className="text-text-muted text-base max-w-xl mb-8">
            Three open-source Modbus/SCADA simulators — Generator Fleet, BESS,
            and PV — ready to run locally or as hosted instances. No hardware
            required.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/tomhammond17"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm bg-accent text-white px-4 py-2 rounded hover:bg-accent/90 transition-colors"
            >
              Browse on GitHub →
            </a>
            <Link
              href="/contact"
              className="font-mono text-sm border border-white/20 text-text px-4 py-2 rounded hover:border-white/40 transition-colors"
            >
              Get your own instance →
            </Link>
          </div>
        </div>
      </section>

      {/* Simulator Cards */}
      <section className="py-12">
        <div className="mx-auto max-w-content px-6">
          <div className="flex flex-col gap-8">
            {simulators.map((sim) => (
              <article
                key={sim.id}
                className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left: content */}
                  <div className="flex flex-col gap-4">
                    <div>
                      <h2 className="font-heading font-semibold text-text text-lg mb-2">
                        {sim.name}
                      </h2>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {sim.headline}
                      </p>
                    </div>

                    <p className="text-text-muted text-sm leading-relaxed">
                      {sim.description}
                    </p>

                    {/* Use cases */}
                    <div>
                      <p className="font-mono text-xs text-accent mb-2">
                        [use cases]
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {sim.useCases.map((uc) => (
                          <li
                            key={uc}
                            className="font-mono text-xs text-text-muted border border-white/10 px-2 py-1 rounded"
                          >
                            {uc}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-3 mt-auto pt-2">
                      <a
                        href={sim.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm bg-accent text-white px-4 py-2 rounded hover:bg-accent/90 transition-colors"
                      >
                        View on GitHub →
                      </a>
                      <Link
                        href="/contact"
                        className="font-mono text-sm border border-white/20 text-text px-4 py-2 rounded hover:border-white/40 transition-colors"
                      >
                        Get your own instance →
                      </Link>
                    </div>

                    {/* Docker quickstart */}
                    <div className="bg-terminal border border-terminal-border rounded-md p-3 mt-2">
                      <p className="font-mono text-xs text-accent mb-2">
                        [quickstart]
                      </p>
                      {sim.dockerRun.split("\n").map((line, i) => (
                        <p key={i} className="font-mono text-xs text-text-muted">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Right: specs */}
                  <div className="bg-terminal border border-terminal-border rounded-md p-4">
                    <p className="font-mono text-xs text-accent mb-3">
                      [specs]
                    </p>
                    <ul className="space-y-2">
                      {sim.specs.map((spec) => (
                        <li
                          key={spec}
                          className="font-mono text-sm text-text flex items-start gap-2"
                        >
                          <span className="text-text-muted mt-0.5">›</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 border-t border-white/10">
        <div className="mx-auto max-w-content px-6">
          <h2 className="font-heading font-semibold text-text text-xl mb-2">
            Pricing
          </h2>
          <p className="text-text-muted text-sm mb-8">
            All simulators are MIT-licensed and free to self-host. Hosted
            instances available for teams who want zero-infra setup.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col gap-4 p-4 border rounded-lg ${
                  tier.accent
                    ? "border-accent/40 bg-accent/5"
                    : "border-white/10"
                }`}
              >
                <div>
                  <p className="font-mono text-xs text-accent mb-1">
                    {tier.name}
                  </p>
                  <p className="font-heading font-bold text-text text-xl">
                    {tier.price}
                  </p>
                  <p className="font-mono text-xs text-text-muted">
                    {tier.label}
                  </p>
                </div>
                <ul className="flex flex-col gap-2 flex-1">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="text-text-muted text-xs flex items-start gap-2"
                    >
                      <span className="text-accent mt-0.5">›</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.ctaHref}
                  className={`font-mono text-xs text-center px-3 py-2 rounded transition-colors ${
                    tier.accent
                      ? "bg-accent text-white hover:bg-accent/90"
                      : "border border-white/20 text-text hover:border-white/40"
                  }`}
                >
                  {tier.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open source CTA */}
      <section className="py-12 border-t border-white/10">
        <div className="mx-auto max-w-content px-6">
          <div className="bg-terminal border border-terminal-border rounded-lg p-6">
            <p className="font-mono text-xs text-accent mb-2">[open source]</p>
            <h2 className="font-heading font-semibold text-text text-lg mb-2">
              Start free. Self-host in minutes.
            </h2>
            <p className="text-text-muted text-sm mb-4 max-w-lg">
              All three simulators are MIT-licensed. Clone, run, and test
              against real Modbus TCP today — no account required.
            </p>
            <div className="bg-[#0a0a0a] border border-white/10 rounded-md p-3 font-mono text-sm max-w-lg mb-4">
              <p className="text-text-muted">
                git clone https://github.com/tomhammond17/generator-fleet-simulator
              </p>
              <p className="text-text-muted mt-1">
                cd generator-fleet-simulator && pip install -r requirements.txt
              </p>
              <p className="text-text-muted mt-1">python app.py</p>
              <p className="text-accent mt-2">
                Modbus TCP ready on 0.0.0.0:5020
              </p>
            </div>
            <a
              href="https://github.com/tomhammond17"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-accent hover:underline"
            >
              Browse all repos on GitHub →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
