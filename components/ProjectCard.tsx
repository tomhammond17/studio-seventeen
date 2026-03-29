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
    <article className="flex flex-col gap-2 p-4 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="font-heading font-semibold text-sm text-text">{name}</h2>
        <span
          className={`text-xs uppercase tracking-wide ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>
      <p className="text-text-muted text-xs leading-relaxed flex-1">
        {description}
      </p>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent text-xs hover:underline mt-auto"
        >
          Visit →
        </a>
      )}
    </article>
  );
}
