export interface PriceCard {
  name: string;
  price: string;
  cadence: string;
  summary: string;
  badge?: string;
  highlight?: boolean;
}

export interface FeatureRow {
  label: string;
  values: string[];
}

export interface DemoMetric {
  label: string;
  value: string;
  accent?: boolean;
}

export interface DemoFeedItem {
  address: string;
  register: string;
  value: string;
}

export interface ProductDetail {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  title: string;
  description: string;
  intro: string;
  audience: string;
  eyebrow: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
    external?: boolean;
  };
  pricing: PriceCard[];
  highlights: string[];
  deliverables: string[];
  proofPoints: string[];
  demo: {
    title: string;
    caption: string;
    metrics: DemoMetric[];
    feed: DemoFeedItem[];
  };
  comparisonNote?: string;
  comparisonTable?: {
    columns: string[];
    rows: FeatureRow[];
  };
  relatedSlugs: string[];
}

export const products: ProductDetail[] = [
  {
    slug: "modmapper",
    name: "ModMapper Pricing",
    shortName: "ModMapper",
    category: "Conversion tool",
    eyebrow: "Pricing",
    title: "Professional register-map conversion with a buying path that fits the project.",
    description:
      "Pricing for ModMapper: credit packs for occasional conversion work, subscription plans for active integrators, and AI-powered PDF parsing on every paid tier.",
    intro:
      "ModMapper is for controls engineers and integrators who need reliable conversion and validation across CSV, XML, JSON, IEC 61131-3, and PDF. The pricing is structured around real project usage: buy a pack when you need a few conversions, or move to unlimited use when the work becomes continuous.",
    audience:
      "Controls engineers, system integrators, and power-software teams cleaning up inconsistent register maps before delivery.",
    primaryCta: {
      label: "Talk to us about ModMapper",
      href: "/contact",
    },
    secondaryCta: {
      label: "Open ModMapper",
      href: "https://modmapper.io",
      external: true,
    },
    pricing: [
      {
        name: "Credit Pack",
        price: "$9.99",
        cadence: "One-time",
        summary: "15 conversions for engineers who need to get through a project sprint without another recurring tool charge.",
      },
      {
        name: "Pro Monthly",
        price: "$9.99",
        cadence: "Per month",
        summary: "Unlimited conversions for active integrators shipping files every week.",
      },
      {
        name: "Pro Annual",
        price: "$79",
        cadence: "Per year",
        summary: "Unlimited conversions with the best effective rate for teams running ongoing integration work.",
        badge: "Save 34%",
        highlight: true,
      },
    ],
    highlights: [
      "No free tier. It is built and priced like a professional work tool.",
      "AI-powered PDF parsing is included across every paid option.",
      "Address validation, duplicate checks, and export cleanup stay in the same workflow.",
    ],
    deliverables: [
      "Convert and normalize messy register maps without spreadsheet cleanup loops.",
      "Keep validation near the export step so field bugs are caught before handoff.",
      "Move from occasional usage to unlimited work without switching tools.",
    ],
    proofPoints: [
      "Engineers usually start with a Credit Pack, then upgrade to Pro once the project load turns continuous.",
      "Pricing stays under the threshold where most buyers need procurement help.",
      "The annual plan is positioned for teams doing repeated delivery work, not speculative usage.",
    ],
    demo: {
      title: "AI-powered PDF parsing in the flow",
      caption:
        "A short preview of the sort of structured extraction ModMapper handles before the validation and export steps.",
      metrics: [
        { label: "PDF pages parsed", value: "28" },
        { label: "Mapped registers", value: "1,462", accent: true },
        { label: "Validation flags", value: "3" },
      ],
      feed: [
        { address: "40011", register: "Start Command", value: "mapped" },
        { address: "40012", register: "Stop Command", value: "mapped" },
        { address: "40107", register: "Fault Reset", value: "review" },
        { address: "42001", register: "Power Limit", value: "validated" },
      ],
    },
    comparisonNote:
      "Not sure which plan? Most engineers start with a Credit Pack and upgrade to Pro mid-project.",
    comparisonTable: {
      columns: ["Credit Pack", "Pro Monthly", "Pro Annual"],
      rows: [
        {
          label: "Billing model",
          values: ["One-time purchase", "Monthly subscription", "Annual subscription"],
        },
        {
          label: "Conversions included",
          values: ["15 conversions", "Unlimited", "Unlimited"],
        },
        {
          label: "AI-powered PDF parsing",
          values: ["Included", "Included", "Included"],
        },
        {
          label: "Best fit",
          values: ["Project-based work", "Active integrators", "Ongoing delivery teams"],
        },
      ],
    },
    relatedSlugs: ["simulator-suite", "der-toolkit"],
  },
  {
    slug: "generator-fleet-simulator",
    name: "Generator Fleet Simulator",
    shortName: "Generator Fleet",
    category: "Simulator",
    eyebrow: "Simulator product",
    title: "Emulate a generator fleet before the first controller or HMI panel lands in the lab.",
    description:
      "Generator Fleet Simulator pricing and product details for SCADA and HMI teams that need realistic Modbus behavior, alarms, and register activity before hardware arrives.",
    intro:
      "This simulator is built for SCADA and HMI developers who need realistic device behavior early. It lets teams stand up Modbus conversations, test alarms, and validate interface logic before a physical generator fleet is available.",
    audience:
      "SCADA developers, HMI teams, and integrators preparing generator workflows before site hardware shows up.",
    primaryCta: {
      label: "Start testing SCADA without hardware",
      href: "/contact",
    },
    secondaryCta: {
      label: "View the GitHub repo",
      href: "https://github.com/tomhammond17/generator-fleet-simulator",
      external: true,
    },
    pricing: [
      {
        name: "Generator Fleet License",
        price: "$199",
        cadence: "Perpetual",
        summary: "Own the simulator for one fleet workflow with local runtime and repeatable scenario coverage.",
        highlight: true,
      },
      {
        name: "Annual Maintenance",
        price: "$49",
        cadence: "Per year",
        summary: "Optional updates, expanded register maps, and support for teams still actively iterating.",
      },
    ],
    highlights: [
      "Realistic register behavior for status, alarms, and state changes.",
      "Protocol-accurate Modbus responses for HMI and SCADA validation.",
      "Simple configuration that keeps teams moving instead of tuning scaffolding.",
    ],
    deliverables: [
      "Exercise generator alarms, operating modes, and fleet conditions before field equipment is available.",
      "Reproduce deterministic reads and writes during UI and control-sequence testing.",
      "Validate register-mapping assumptions while the project can still absorb change.",
    ],
    proofPoints: [
      "Single-simulator pricing stays under the level that usually triggers procurement friction.",
      "Optional maintenance avoids forcing a subscription onto teams with project-based usage.",
      "The buying model mirrors how engineers already acquire desktop and testing tools.",
    ],
    demo: {
      title: "Live Modbus read preview",
      caption:
        "A compact loop showing the sort of register movement a SCADA screen sees while the simulated fleet is running.",
      metrics: [
        { label: "Active units", value: "184" },
        { label: "Poll latency", value: "38ms", accent: true },
        { label: "Alarms injected", value: "4" },
      ],
      feed: [
        { address: "40101", register: "Unit 014 Status", value: "Running" },
        { address: "40108", register: "Unit 014 Load", value: "72%" },
        { address: "40291", register: "Unit 087 Fuel", value: "41%" },
        { address: "40540", register: "Fleet Alarm", value: "Low Oil" },
      ],
    },
    relatedSlugs: ["bess-simulator", "pv-simulator", "simulator-suite"],
  },
  {
    slug: "bess-simulator",
    name: "BESS Simulator",
    shortName: "BESS",
    category: "Simulator",
    eyebrow: "Simulator product",
    title: "Test storage dispatch and SOC edge cases with a simulator that behaves like a battery system, not a toy feed.",
    description:
      "BESS Simulator pricing and product details for DER and EMS teams that need realistic battery behavior, dispatch logic, and repeatable Modbus responses.",
    intro:
      "The BESS Simulator gives energy-storage teams a way to test dispatch logic, SOC movement, and operator-facing controls before site hardware is commissioned. It is scoped for real development work, not marketing demos.",
    audience:
      "DER integrators, EMS developers, and SCADA teams building battery workflows ahead of commissioning.",
    primaryCta: {
      label: "Start testing SCADA without hardware",
      href: "/contact",
    },
    secondaryCta: {
      label: "View the GitHub repo",
      href: "https://github.com/tomhammond17/BESS-Simulator",
      external: true,
    },
    pricing: [
      {
        name: "BESS License",
        price: "$199",
        cadence: "Perpetual",
        summary: "Perpetual access for one simulator with scenario playback and local development use.",
        highlight: true,
      },
      {
        name: "Annual Maintenance",
        price: "$49",
        cadence: "Per year",
        summary: "Optional updates and support while the project is still evolving.",
      },
    ],
    highlights: [
      "Realistic SOC and dispatch behavior instead of static values.",
      "Modbus protocol accuracy for control-room and EMS validation.",
      "Simple configuration that keeps scenario setup fast.",
    ],
    deliverables: [
      "Validate charge and discharge logic before live assets are connected.",
      "Replay deterministic BESS scenarios for operator and UI testing.",
      "Give development teams a stable target while field infrastructure catches up.",
    ],
    proofPoints: [
      "Project-based usage maps better to a perpetual license than a monthly fee.",
      "Maintenance is optional so dormant periods do not feel punitive.",
      "The pricing is framed as a professional engineering tool, not hobby software.",
    ],
    demo: {
      title: "Dispatch loop preview",
      caption:
        "A short animated loop of reads and writes during a battery dispatch scenario.",
      metrics: [
        { label: "Fleet SOC", value: "68%" },
        { label: "Dispatch mode", value: "Peak shave", accent: true },
        { label: "No-export state", value: "Armed" },
      ],
      feed: [
        { address: "41011", register: "Power Setpoint", value: "-2.8 MW" },
        { address: "41018", register: "State of Charge", value: "68%" },
        { address: "41044", register: "PCS Status", value: "Available" },
        { address: "41067", register: "No Export", value: "Active" },
      ],
    },
    relatedSlugs: ["generator-fleet-simulator", "pv-simulator", "simulator-suite"],
  },
  {
    slug: "pv-simulator",
    name: "PV Simulator",
    shortName: "PV",
    category: "Simulator",
    eyebrow: "Simulator product",
    title: "Stand up solar behavior, curtailment scenarios, and weather-driven reads before the plant is online.",
    description:
      "PV Simulator pricing and product details for solar SCADA and DER teams that need realistic inverter behavior, curtailment logic, and Modbus accuracy before hardware is deployed.",
    intro:
      "The PV Simulator helps solar teams test curtailment, inverter states, and weather-driven output without waiting for the real plant or site network. It is made for repeated engineering validation, not just screenshots.",
    audience:
      "Solar SCADA teams, DER integrators, and EMS developers validating plant behavior before hardware commissioning.",
    primaryCta: {
      label: "Start testing SCADA without hardware",
      href: "/contact",
    },
    secondaryCta: {
      label: "View the GitHub repo",
      href: "https://github.com/tomhammond17/PV-Simulator",
      external: true,
    },
    pricing: [
      {
        name: "PV License",
        price: "$199",
        cadence: "Perpetual",
        summary: "Perpetual access for one solar simulator with repeatable scenario coverage.",
        highlight: true,
      },
      {
        name: "Annual Maintenance",
        price: "$49",
        cadence: "Per year",
        summary: "Optional updates, support, and continued refinements while the team is active.",
      },
    ],
    highlights: [
      "Realistic inverter and curtailment behavior instead of generic sample values.",
      "Protocol-accurate Modbus responses for control and visualization validation.",
      "Easy configuration so teams can move from idea to scenario quickly.",
    ],
    deliverables: [
      "Test solar controls and alarms before plant hardware is accessible.",
      "Replay expected and edge-case irradiance scenarios in a stable environment.",
      "Keep PV integrations moving while the field schedule changes underneath the project.",
    ],
    proofPoints: [
      "Perpetual pricing fits the way solar integration projects ramp and cool down.",
      "Optional maintenance supports long programs without forcing every buyer into annual renewals.",
      "The offer is explicit and scannable instead of hiding price behind sales friction.",
    ],
    demo: {
      title: "Curtailment response preview",
      caption:
        "An animated loop showing weather-driven reads and curtailment state changes.",
      metrics: [
        { label: "Plant output", value: "12.4 MW" },
        { label: "Curtailment", value: "18%", accent: true },
        { label: "Weather source", value: "Live curve" },
      ],
      feed: [
        { address: "42002", register: "Irradiance", value: "781 W/m²" },
        { address: "42015", register: "Power Command", value: "82%" },
        { address: "42031", register: "Inverter State", value: "Online" },
        { address: "42049", register: "Curtailment", value: "Active" },
      ],
    },
    relatedSlugs: ["generator-fleet-simulator", "bess-simulator", "simulator-suite"],
  },
  {
    slug: "simulator-suite",
    name: "Simulator Bundle",
    shortName: "Simulator Bundle",
    category: "Bundle",
    eyebrow: "Bundle",
    title: "One purchase for the full simulator bench across generator, battery, and solar workflows.",
    description:
      "Bundle pricing for all three Studio Seventeen simulators: generator fleet, BESS, and PV, with optional annual maintenance for active teams.",
    intro:
      "The simulator bundle is for integrators and platform teams who do not want to piece together their test environment one asset class at a time. It covers generator, battery, and PV workflows in one purchase and keeps the pricing straightforward.",
    audience:
      "SCADA and HMI teams, integrators, and DER platform groups testing multiple asset classes in the same delivery cycle.",
    primaryCta: {
      label: "Start testing SCADA without hardware",
      href: "/contact",
    },
    secondaryCta: {
      label: "Compare the individual simulators",
      href: "/simulators",
    },
    pricing: [
      {
        name: "All 3 Simulators",
        price: "$399",
        cadence: "Perpetual bundle",
        summary: "Own the full suite and save about $100 compared with buying each simulator separately.",
        badge: "Save ~$100",
        highlight: true,
      },
      {
        name: "Bundle Maintenance",
        price: "$99",
        cadence: "Per year",
        summary: "Optional updates and support for teams still iterating across the full suite.",
      },
    ],
    highlights: [
      "Covers generator, BESS, and PV scenarios in one consistent toolset.",
      "Keeps pricing simple for teams that need broad DER coverage now.",
      "Optional maintenance preserves recurring support without forcing a subscription.",
    ],
    deliverables: [
      "Stand up a full DER simulator bench without stitching together multiple vendors or free tools.",
      "Test Modbus flows, operator behavior, and scenario playback across asset classes.",
      "Give project teams a single, credible package to buy and adopt.",
    ],
    proofPoints: [
      "Bundle economics reward the teams most likely to use all three products together.",
      "The maintenance option stays optional so budget pressure does not block the initial sale.",
      "The suite is designed for project reality: broad enough to matter, narrow enough to remain usable.",
    ],
    demo: {
      title: "Cross-asset read loop",
      caption:
        "A single view of read activity moving across generator, storage, and PV scenarios.",
      metrics: [
        { label: "Assets online", value: "384" },
        { label: "Suite coverage", value: "3 simulators", accent: true },
        { label: "Poll rate", value: "1s cycle" },
      ],
      feed: [
        { address: "40108", register: "Generator Load", value: "72%" },
        { address: "41018", register: "BESS SOC", value: "68%" },
        { address: "42015", register: "PV Command", value: "82%" },
        { address: "43001", register: "Suite Alarm", value: "Clear" },
      ],
    },
    relatedSlugs: ["generator-fleet-simulator", "bess-simulator", "pv-simulator", "der-toolkit"],
  },
  {
    slug: "der-toolkit",
    name: "DER Toolkit Bundle",
    shortName: "DER Toolkit",
    category: "Bundle",
    eyebrow: "Full-stack bundle",
    title: "Register-map cleanup plus realistic DER simulation in one package for full integration work.",
    description:
      "DER Toolkit bundle pricing: ModMapper Pro Annual plus all three simulator licenses for system integrators working across the full DER delivery workflow.",
    intro:
      "The DER Toolkit is aimed at system integrators who need both sides of the job covered: cleaning up register maps and validating their SCADA logic against realistic DER simulators. It compresses the tool buying decision into one package with a clear price and clear scope.",
    audience:
      "System integrators and delivery teams handling register mapping, controls validation, and cross-asset testing in the same project.",
    primaryCta: {
      label: "Ask about the DER Toolkit",
      href: "/contact",
    },
    secondaryCta: {
      label: "See ModMapper pricing",
      href: "/products/modmapper",
    },
    pricing: [
      {
        name: "DER Toolkit",
        price: "$399",
        cadence: "Bundle price",
        summary: "Includes ModMapper Pro Annual and all three simulator licenses for end-to-end DER integration work.",
        badge: "Best for full integrators",
        highlight: true,
      },
    ],
    highlights: [
      "Covers register-map normalization and simulator-based testing in the same buying decision.",
      "Built for teams handling the messy middle between documentation and controls validation.",
      "Keeps the story tight: one toolset for mapping, testing, and handoff prep.",
    ],
    deliverables: [
      "Clean and validate register maps with ModMapper before downstream teams touch the files.",
      "Run generator, storage, and PV scenarios while the real hardware schedule is still moving.",
      "Give DER delivery teams one coherent toolkit instead of multiple mismatched purchases.",
    ],
    proofPoints: [
      "The price is intentionally clear and scannable because engineers do not want a sales maze.",
      "The bundle is positioned around project utility, not abstract platform language.",
      "It is the strongest offer for teams already doing end-to-end DER integration work.",
    ],
    demo: {
      title: "Mapping plus simulation loop",
      caption:
        "A composite view showing map cleanup progress on one side and simulator reads on the other.",
      metrics: [
        { label: "Mapped registers", value: "1,462" },
        { label: "Simulator bench", value: "Ready", accent: true },
        { label: "Asset classes", value: "Generator, BESS, PV" },
      ],
      feed: [
        { address: "PDF 028", register: "AI parse", value: "Complete" },
        { address: "40108", register: "Generator Load", value: "72%" },
        { address: "41018", register: "BESS SOC", value: "68%" },
        { address: "42015", register: "PV Command", value: "82%" },
      ],
    },
    relatedSlugs: ["modmapper", "simulator-suite"],
  },
];

export const productsBySlug = Object.fromEntries(
  products.map((product) => [product.slug, product]),
) as Record<string, ProductDetail>;
