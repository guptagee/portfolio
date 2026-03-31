import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-52 w-full overflow-hidden bg-slate-100">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="space-y-4 p-5">
        <h3 className="text-xl font-semibold text-slate-900">
          {project.title}
        </h3>
        <p className="text-sm leading-6 text-slate-600">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 text-sm font-semibold">
          <Link
            href={`/projects/${project.slug}`}
            className="text-slate-900 hover:text-slate-600"
          >
            View Details
          </Link>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-900"
          >
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}
