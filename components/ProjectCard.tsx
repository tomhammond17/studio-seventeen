import type { Project } from "@/data/projects";

const statusStyles: Record<Project["status"], string> = {
  Live: "text-accent",
  Beta: "text-yellow-400",
  "Coming soon": "text-text-muted",
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { name, description, status, url } = project;

  return (
    <article className="flex h-full flex-col gap-4 border-t border-white/10 pt-5 transition-colors hover:border-accent/40">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="font-heading text-lg font-semibold text-text">{name}</h2>
        <span
          className={`text-[0.68rem] uppercase tracking-[0.24em] ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>
      <p className="flex-1 text-sm leading-7 text-text-muted">
        {description}
      </p>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto text-sm text-accent transition-colors hover:text-accent-soft"
        >
          Visit project
        </a>
      )}
    </article>
  );
}
