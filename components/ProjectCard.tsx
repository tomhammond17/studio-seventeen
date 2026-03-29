import type { Project } from "@/data/projects";

const statusLabels: Record<Project["status"], string> = {
  Live: "[LIVE]",
  Beta: "[BETA]",
  "Coming soon": "[SOON]",
};

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
    <article className="flex flex-col gap-3 p-4 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-heading font-semibold text-text">{name}</h3>
        <span
          className={`font-mono text-xs whitespace-nowrap ${statusStyles[status]}`}
        >
          {statusLabels[status]}
        </span>
      </div>
      <p className="text-text-muted text-sm leading-relaxed flex-1">
        {description}
      </p>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent text-sm hover:underline mt-auto"
        >
          Visit project →
        </a>
      )}
    </article>
  );
}
