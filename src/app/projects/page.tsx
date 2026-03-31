import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Mukesh Gupta",
  description:
    "Explore MERN stack and SEO-focused projects built by Mukesh Gupta.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">
        Projects
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
        A curated set of products where I handled frontend architecture, backend
        integration, and search visibility.
      </p>

      <section
        className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        aria-label="Project list"
      >
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </main>
  );
}
