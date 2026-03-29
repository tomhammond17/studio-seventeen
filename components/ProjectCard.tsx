import type { Project } from "@/data/projects";

const statusStyles: Record<Project["status"], string> = {
  Live: "bg-green-900/40 text-green-400 border border-green-800",
  Beta: "bg-yellow-900/40 text-yellow-400 border border-yellow-800",
  "Coming soon": "bg-white/5 text-text-muted border border-white/10",
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { name, description, status, url } = project;

  return (
    <article className="flex flex-col gap-3 p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-heading font-semibold text-text">{name}</h3>
        <span
          className={`text-xs font-mono px-2 py-1 rounded whitespace-nowrap ${statusStyles[status]}`}
        >
          {status}
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
