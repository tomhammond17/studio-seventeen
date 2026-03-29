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
    url: "https://modmapper.io",
    slug: "modmapper",
  },
];
