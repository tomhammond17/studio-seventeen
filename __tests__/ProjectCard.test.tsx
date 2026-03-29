import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/data/projects";

const liveProject: Project = {
  name: "ModMapper",
  description: "Modbus register map converter",
  status: "Live",
  url: "https://modmapper.io",
  slug: "modmapper",
};

const betaProject: Project = {
  name: "TestProject",
  description: "A test project in beta",
  status: "Beta",
  url: "https://example.com",
  slug: "test-project",
};

const comingSoonProject: Project = {
  name: "FutureProject",
  description: "Something coming soon",
  status: "Coming soon",
  url: "",
  slug: "future-project",
};

describe("ProjectCard", () => {
  it("renders project name and description", () => {
    render(<ProjectCard project={liveProject} />);
    expect(screen.getByText("ModMapper")).toBeInTheDocument();
    expect(screen.getByText("Modbus register map converter")).toBeInTheDocument();
  });

  it("renders status badge", () => {
    render(<ProjectCard project={liveProject} />);
    expect(screen.getByText("[LIVE]")).toBeInTheDocument();
  });

  it("renders a link when url is provided", () => {
    render(<ProjectCard project={liveProject} />);
    const link = screen.getByRole("link", { name: /visit project/i });
    expect(link).toHaveAttribute("href", "https://modmapper.io");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("does not render a link when url is empty", () => {
    render(<ProjectCard project={comingSoonProject} />);
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("renders Beta status correctly", () => {
    render(<ProjectCard project={betaProject} />);
    expect(screen.getByText("[BETA]")).toBeInTheDocument();
  });

  it("renders Coming soon status correctly", () => {
    render(<ProjectCard project={comingSoonProject} />);
    expect(screen.getByText("[SOON]")).toBeInTheDocument();
  });
});
