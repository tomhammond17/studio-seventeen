import type { Metadata } from "next";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Tools we've built for industrial software engineers — from format converters to power system simulators.",
};

const modmapper = projects.find((p) => p.slug === "modmapper");
const simulators = projects.filter((p) => p.slug !== "modmapper");

export default function ProjectsPage() {
  return (
    <section className="py-10 sm:py-12">
      <div className="mx-auto max-w-content px-6">
        <h1 className="font-heading text-xl sm:text-2xl font-semibold mb-3">
          Projects
        </h1>
        <p className="text-text-muted text-sm mb-8 max-w-xl">
          Tools we&apos;ve shipped for industrial software teams. Each one
          solves a specific, real problem.
        </p>

        {/* ModMapper */}
        {modmapper && (
          <div className="mb-8">
            <h2 className="font-mono text-xs text-accent mb-3">
              [format conversion]
            </h2>
            <ul className="grid grid-cols-1 gap-3">
              <li>
                <ProjectCard project={modmapper} />
              </li>
            </ul>
          </div>
        )}

        {/* Simulators */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-mono text-xs text-accent">
              [industrial simulation suite]
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
      </div>
    </section>
  );
}
