export type ProjectStatus = "Live" | "Beta" | "Coming soon";

export interface Project {
  name: string;
  description: string;
  status: ProjectStatus;
  url: string;
  slug: string;
}

export const projects: Project[] = [
  {
    name: "ModMapper",
    description:
      "Modbus register map converter — automate your CSV ↔ XML ↔ JSON ↔ PDF workflows",
    status: "Live",
    url: "/products/modmapper",
    slug: "modmapper",
  },
  {
    name: "Generator Fleet Simulator",
    description:
      "Simulate 2,000 diesel generators with realistic state machines, alarms, and Modbus TCP — instantly",
    status: "Live",
    url: "/products/generator-fleet-simulator",
    slug: "generator-fleet-simulator",
  },
  {
    name: "BESS Simulator",
    description:
      "Simulate 100 battery storage units with dispatch logic, SOC tracking, and scenario playback",
    status: "Live",
    url: "/products/bess-simulator",
    slug: "bess-simulator",
  },
  {
    name: "PV Simulator",
    description:
      "Simulate 100 solar inverters with real weather data or synthetic solar curves via Modbus TCP",
    status: "Live",
    url: "/products/pv-simulator",
    slug: "pv-simulator",
  },
];
