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
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-content px-6">
        <div className="max-w-copy">
          <p className="text-sm uppercase tracking-[0.24em] text-accent-soft">
            Projects
          </p>
          <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-text sm:text-5xl">
            Tools built for industrial software teams.
          </h1>
          <p className="mt-5 text-base leading-7 text-text-muted sm:text-lg">
            Every product exists to remove operational friction from a specific
            workflow: conversion, validation, simulation, or deployment.
          </p>
        </div>

        {modmapper && (
          <article className="mt-12 rounded-[2rem] border border-white/10 bg-surface px-7 py-8 sm:px-10 sm:py-10">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="font-heading text-3xl font-semibold text-text">
                    {modmapper.name}
                  </h2>
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-accent-soft">
                    {modmapper.status}
                  </span>
                </div>
                <p className="mt-5 max-w-2xl text-base leading-7 text-text-soft">
                  ModMapper automates the ugly edges of register-map delivery:
                  ingesting inconsistent source files, validating address data,
                  and exporting clean artifacts for teams shipping controls
                  software.
                </p>
                <div className="mt-8 grid gap-4 border-t border-white/8 pt-6 md:grid-cols-3">
                  {[
                    "CSV, XML, JSON, IEC 61131-3, and PDF workflows",
                    "10K+ registers without manual cleanup loops",
                    "Fast enough for day-to-day engineering delivery",
                  ].map((item) => (
                    <p
                      key={item}
                      className="text-sm leading-7 text-text-muted"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/8 pt-6 lg:pt-1">
                <p className="text-xs uppercase tracking-[0.24em] text-accent-soft">
                  Delivery shape
                </p>
                <div className="mt-5 space-y-5">
                  {[
                    "Import inconsistent source data without starting from a spreadsheet cleanup sprint.",
                    "Normalize structure and validate address ranges before downstream teams touch the file.",
                    "Export clean artifacts that fit the controls workflow already in place.",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="grid grid-cols-[auto_1fr] gap-3 border-b border-white/8 pb-5 last:border-b-0 last:pb-0"
                    >
                      <p className="font-heading text-sm tracking-[0.22em] text-accent-soft">
                        0{index + 1}
                      </p>
                      <p className="text-sm leading-6 text-text-muted">{item}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href={modmapper.url}
                  className="mt-8 inline-flex rounded-full bg-accent px-5 py-2.5 font-heading text-sm font-medium text-black transition-colors hover:bg-accent/90"
                >
                  View pricing
                </Link>
              </div>
            </div>
          </article>
        )}

        <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-accent-soft">
              Simulator products
            </p>
            <h2 className="mt-3 font-heading text-2xl font-semibold text-text sm:text-3xl">
              Power-system test environments with clear license pricing.
            </h2>
          </div>
          <Link
            href="/simulators"
            className="text-sm text-accent transition-colors hover:text-accent-soft"
          >
            Full simulator pricing
          </Link>
        </div>
        <ul className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
