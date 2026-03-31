import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project page could not be found.",
    };
  }

  return {
    title: `${project.title} | Project Case Study`,
    description: project.description,
    keywords: project.techStack,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.image, alt: project.imageAlt }],
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <article>
        <header>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            {project.title}
          </h1>
          <p className="mt-4 text-base leading-8 text-slate-600">
            {project.description}
          </p>
        </header>

        <div className="relative mt-8 h-72 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 sm:h-96">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 80vw"
          />
        </div>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Problem
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-700">
            {project.problem}
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Solution
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-700">
            {project.solution}
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Tech Stack
          </h2>
          <ul
            className="mt-4 flex flex-wrap gap-2"
            aria-label="Technology stack"
          >
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h3 className="text-xl font-semibold tracking-tight text-slate-900">
            Links
          </h3>
          <div className="mt-4 flex flex-wrap gap-4">
            <Button href={project.liveLink} external>
              Live Project
            </Button>
            <Button href={project.githubLink} external variant="secondary">
              GitHub Repo
            </Button>
          </div>
        </section>
      </article>
    </main>
  );
}
