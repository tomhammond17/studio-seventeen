import type { Metadata } from "next";
import Hero from "@/components/Hero";
import WhatWeBuild from "@/components/WhatWeBuild";
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
      <WhatWeBuild />
      <section className="py-16 border-t border-white/10">
        <div className="mx-auto max-w-content px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-2xl font-semibold">Projects</h2>
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
