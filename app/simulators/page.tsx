import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industrial Power Simulators",
  description:
    "Realistic Modbus and SCADA simulators for testing industrial power software without hardware.",
  openGraph: {
    title: "Industrial Power Simulators — Studio Seventeen",
    description:
      "Realistic Modbus and SCADA simulators for testing industrial power software without hardware.",
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
      "Simulate 2,000 diesel generators with realistic state machines, alarms, and Modbus TCP.",
    description:
      "A fully scriptable generator fleet with per-unit state machines, 21 Modbus registers per unit, 30 injectable fault types, and three operating modes. It is built for teams that need scale and repeatability before a plant network is available.",
    specs: [
      "2,000 generator units",
      "21 Modbus registers per unit",
      "30 injectable alarm types",
      "Auto, manual, and islanded modes",
    ],
    useCases: ["HMI testing", "SCADA regression suites", "Operator training"],
    githubUrl: "https://github.com/tomhammond17/generator-fleet-simulator",
    quickstart: [
      "git clone https://github.com/tomhammond17/generator-fleet-simulator",
      "cd generator-fleet-simulator",
      "pip install -r requirements.txt",
      "python main.py",
    ],
  },
  {
    id: "bess",
    name: "BESS Simulator",
    headline:
      "Simulate 100 battery storage units with dispatch logic, SOC tracking, and scenario playback.",
    description:
      "A battery energy storage simulator with peak-shaving dispatch, no-export enforcement, and scriptable runbooks for deterministic replay. It gives EMS and DER teams a reliable way to test edge cases before live integration.",
    specs: [
      "100 BESS units",
      "Peak-shaving and auto-dispatch modes",
      "No-export enforcement",
      "Scriptable runbooks for replay",
    ],
    useCases: [
      "DER integration testing",
      "EMS development",
      "BESS operator training",
    ],
    githubUrl: "https://github.com/tomhammond17/BESS-Simulator",
    quickstart: [
      "git clone https://github.com/tomhammond17/BESS-Simulator",
      "cd BESS-Simulator",
      "pip install -r requirements.txt",
      "python main.py",
    ],
  },
  {
    id: "pv",
    name: "PV Simulator",
    headline:
      "Simulate 100 solar inverters with real weather data or synthetic solar curves.",
    description:
      "A photovoltaic fleet simulator backed by Open-Meteo weather data or configurable irradiance curves. It supports curtailment control, six inverter states, and the sort of repeatable scenario work teams need for solar operations software.",
    specs: [
      "100 inverter units",
      "Open-Meteo weather integration",
      "Curtailment control",
      "Six inverter states plus replay",
    ],
    useCases: [
      "Solar SCADA testing",
      "EMS development",
      "Curtailment logic validation",
    ],
    githubUrl: "https://github.com/tomhammond17/PV-Simulator",
    quickstart: [
      "git clone https://github.com/tomhammond17/PV-Simulator",
      "cd PV-Simulator",
      "pip install -r requirements.txt",
      "python main.py",
    ],
  },
];

const deploymentPaths = [
  {
    title: "Self-hosted",
    body: "Clone a repo, run it locally, and test against real Modbus TCP immediately.",
  },
  {
    title: "Hosted sandbox",
    body: "Use a provisioned instance when a team needs shared access without managing infrastructure.",
  },
  {
    title: "Team rollout",
    body: "Bring the suite into a broader workflow with custom scenarios, support, and operational handoff.",
  },
];

export default function SimulatorsPage() {
  return (
    <>
      <section className="border-b border-white/5 py-16 sm:py-20">
        <div className="mx-auto max-w-content px-6">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-end">
            <div className="max-w-copy">
              <p className="text-sm uppercase tracking-[0.24em] text-accent-soft">
                Simulation suite
              </p>
              <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-text sm:text-5xl">
                Test industrial power workflows without waiting for hardware.
              </h1>
              <p className="mt-5 text-base leading-7 text-text-muted sm:text-lg">
                Three open-source Modbus and SCADA simulators for generator
                fleets, battery storage, and PV systems. Run them locally for
                test coverage now, then host them with us when your team needs a
                cleaner path into shared environments.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://github.com/tomhammond17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-accent px-6 py-3 font-heading text-sm font-medium text-black transition-colors hover:bg-accent/90"
                >
                  Browse on GitHub
                </a>
                <Link
                  href="/contact"
                  className="inline-flex rounded-full border border-white/12 px-6 py-3 text-sm text-text transition-colors hover:border-accent/50 hover:text-accent-soft"
                >
                  Ask about hosted access
                </Link>
              </div>
            </div>

            <div className="border-t border-white/8 pt-6 lg:pl-10 lg:pt-0">
              <p className="text-sm uppercase tracking-[0.24em] text-accent-soft">
                Built for
              </p>
              <div className="mt-6 space-y-6">
                {[
                  {
                    title: "SCADA and EMS development",
                    body: "Exercise register maps, dispatch logic, and operator flows before hardware is ready.",
                  },
                  {
                    title: "Regression and scenario testing",
                    body: "Replay deterministic scenarios for generator, battery, and solar behaviors without lab scheduling overhead.",
                  },
                  {
                    title: "Training and hosted evaluation",
                    body: "Start with self-hosted repos, then move to hosted instances when a team needs shared access.",
                  },
                ].map(({ title, body }) => (
                  <div
                    key={title}
                    className="border-b border-white/8 pb-6 last:border-b-0 last:pb-0"
                  >
                    <p className="font-heading text-xl font-medium text-text">
                      {title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-text-muted">
                      {body}
                    </p>
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
              Included simulators
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-text sm:text-4xl">
              Three focused environments, each shaped around a real operating
              model.
            </h2>
          </div>

          <div className="mt-12 flex flex-col">
            {simulators.map((sim) => (
              <article
                key={sim.id}
                className="grid gap-8 border-t border-white/10 py-10 last:border-b last:border-white/10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]"
              >
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-accent-soft">
                      {sim.name}
                    </p>
                    <h3 className="mt-4 max-w-xl font-heading text-3xl font-semibold text-text">
                      {sim.headline}
                    </h3>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-text-muted">
                      {sim.description}
                    </p>
                  </div>

                  <div className="grid gap-4 border-t border-white/8 pt-6 md:grid-cols-2">
                    {sim.specs.map((spec) => (
                      <p
                        key={spec}
                        className="text-sm leading-6 text-text-muted"
                      >
                        {spec}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-8 lg:pl-10">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-accent-soft">
                      Best used for
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {sim.useCases.map((useCase) => (
                        <span
                          key={useCase}
                          className="rounded-full border border-white/10 px-4 py-2 text-sm text-text-soft"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-white/8 pt-6">
                    <p className="text-sm uppercase tracking-[0.24em] text-accent-soft">
                      Quickstart
                    </p>
                    <div className="mt-5 space-y-2 rounded-[1.5rem] border border-white/10 bg-surface px-5 py-5 font-mono text-xs leading-6 text-text-soft">
                      {sim.quickstart.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={sim.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full bg-accent px-5 py-2.5 font-heading text-sm font-medium text-black transition-colors hover:bg-accent/90"
                    >
                      View on GitHub
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex rounded-full border border-white/12 px-5 py-2.5 text-sm text-text transition-colors hover:border-accent/50 hover:text-accent-soft"
                    >
                      Ask about hosting
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 py-16 sm:py-20">
        <div className="mx-auto max-w-content px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,1.05fr)]">
            <div className="max-w-copy">
              <p className="text-sm uppercase tracking-[0.24em] text-accent-soft">
                Deployment paths
              </p>
              <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-text sm:text-4xl">
                Start self-hosted. Move to hosted access when the team needs it.
              </h2>
              <p className="mt-5 text-base leading-7 text-text-muted">
                The repos are MIT-licensed and ready for local use. Hosted
                options exist for teams that want shared access, persistent
                state, or a cleaner evaluation path, but pricing is still being
                shaped with pilot users.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {deploymentPaths.map(({ title, body }) => (
                <div
                  key={title}
                  className="border-t border-white/10 pt-5 sm:pt-6"
                >
                  <p className="font-heading text-xl font-medium text-text">
                    {title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-text-muted">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-content px-6">
          <div className="grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="max-w-2xl space-y-5">
              <p className="text-sm uppercase tracking-[0.24em] text-accent-soft">
                Start now
              </p>
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-text sm:text-4xl">
                Self-host in minutes, then decide how far you want to take it.
              </h2>
              <p className="text-base leading-7 text-text-muted">
                All three simulators are open source. Clone a repo, run a local
                scenario, and use the contact route when you need hosted access
                or a more opinionated rollout.
              </p>
            </div>
            <a
              href="https://github.com/tomhammond17"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-white/12 px-6 py-3 text-sm text-text transition-colors hover:border-accent/50 hover:text-accent-soft"
            >
              Browse all simulator repos
            </a>
          </div>

          <div className="mt-10 max-w-2xl rounded-[1.75rem] border border-white/10 bg-surface px-6 py-6 font-mono text-xs leading-6 text-text-soft sm:px-7">
            <p>git clone https://github.com/tomhammond17/generator-fleet-simulator</p>
            <p>cd generator-fleet-simulator</p>
            <p>pip install -r requirements.txt</p>
            <p>python main.py</p>
            <p className="mt-3 text-accent-soft">Modbus TCP ready on 0.0.0.0:5020</p>
          </div>
        </div>
      </section>
    </>
  );
}
