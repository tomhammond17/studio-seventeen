import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CapabilitiesGrid from "@/components/CapabilitiesGrid";
import ProjectsGrid from "@/components/ProjectsGrid";
import AboutStub from "@/components/AboutStub";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Studio Seventeen — Precision tools for industrial software",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CapabilitiesGrid />
      <section className="py-12">
        <div className="mx-auto max-w-content px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-xl font-semibold">Projects</h2>
            <Link href="/projects" className="text-accent text-sm hover:underline">
              View all →
            </Link>
          </div>
          <ProjectsGrid projects={projects} />
        </div>
      </section>
      <AboutStub />
    </>
  );
}
