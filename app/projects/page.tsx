import type { Metadata } from "next";
import ProjectsGrid from "@/components/ProjectsGrid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Tools we've built for industrial software engineers — from format converters to workflow automation.",
};

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
        <ProjectsGrid projects={projects} />
      </div>
    </section>
  );
}
