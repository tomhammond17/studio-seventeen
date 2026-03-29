import type { Metadata } from "next";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Tools for industrial software engineers — format converters and power system simulators.",
};

const modmapper = projects.find((p) => p.slug === "modmapper");
const simulators = projects.filter((p) => p.slug !== "modmapper");

export default function ProjectsPage() {
  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-content px-6">
        <h1 className="font-heading text-2xl sm:text-3xl font-semibold mb-8">
          Projects
        </h1>

        {modmapper && (
          <div className="mb-10">
            <ul className="grid grid-cols-1 gap-3">
              <li>
                <ProjectCard project={modmapper} />
              </li>
            </ul>
          </div>
        )}

        <div className="flex items-baseline justify-between mb-4">
          <h2 className="font-heading text-base font-semibold text-text-muted">
            Simulation Suite
          </h2>
          <Link
            href="/simulators"
            className="text-text-muted text-xs hover:text-text transition-colors"
          >
            Full details →
          </Link>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {simulators.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
