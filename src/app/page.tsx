import Image from "next/image";
import type { Metadata } from "next";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import { featuredProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Mukesh Gupta | MERN Stack Developer & SEO Specialist",
  description:
    "Portfolio of Mukesh Gupta, a MERN stack developer building high-performance SEO-friendly web apps.",
};

const skills = {
  frontend: {
    title: "Frontend Engineering",
    summary:
      "Build responsive, component-driven interfaces focused on UX clarity and performance.",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "UI Architecture",
    ],
  },
  backend: {
    title: "Backend Systems",
    summary:
      "Design secure APIs and scalable services for real-world, data-driven products.",
    items: ["Node.js", "Express", "MongoDB", "REST APIs", "Authentication"],
  },
  seo: {
    title: "Technical SEO",
    summary:
      "Improve discoverability through metadata, semantic markup, and performance tuning.",
    items: [
      "Schema Markup",
      "Core Web Vitals",
      "On-page SEO",
      "Site Architecture",
      "Content Strategy",
    ],
  },
};

const publications = [
  {
    title:
      "Architectural Style Classification using EfficientNet-B7: A Deep Learning Approach for Visual Pattern Recognition",
    venue:
      "2025 5th International Conference on Emerging Research in Electronics, Computer Science and Technology (ICERECT)",
    year: "2025",
    publisher: "IEEE",
    doi: "10.1109/ICERECT65215.2025.11377802",
    location: "MANDYA, India",
    authors:
      "Om Prakash Suthar, Suraj Kumar Thakur, Mukesh Kumar Gupta, Rahul Bhandari, Pappu Kumar Rai",
    abstract:
      "Identifying architectural styles through computer vision remains challenging because of visual diversity in building structures. This work uses EfficientNet-B7 with supervised learning on an architectural styles dataset, combined with preprocessing techniques including data augmentation, normalization, and feature extraction. The model achieves 82.45% accuracy and demonstrates practical value for heritage preservation, urban design, and automated architectural pattern analysis.",
    keywords: [
      "EfficientNet-B7",
      "Deep Learning",
      "Computer Vision",
      "Architectural Style Classification",
    ],
    link: "https://ieeexplore.ieee.org/document/11377802",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,#e2e8f0_0,#f8fafc_40%,#fff_70%)]" />
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            MERN Developer · Ai/Ml · SEO Engineer
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            I build fast, indexable, conversion-ready web products.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            I am Mukesh Gupta, a frontend-first MERN stack developer focused on
            scalable architecture, clean UI systems, and technical SEO that
            drives organic growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/projects">View Projects</Button>
            <Button href="/contact" variant="secondary">
              Hire Me
            </Button>
            <Button href="/resume.pdf" external download variant="secondary">
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
        id="featured-projects"
      >
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Featured Projects
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Selected MERN and SEO-focused builds with measurable impact.
            </p>
          </div>
          <Button href="/projects" variant="secondary">
            See All
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Skills
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              I combine engineering depth with growth-oriented execution, so
              products are not just shipped fast but also discovered and scaled.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[skills.frontend, skills.backend, skills.seo].map((group) => (
              <article
                key={group.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                  {group.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {group.summary}
                </p>
                <ul
                  className="mt-4 flex flex-wrap gap-2"
                  aria-label={`${group.title} skills`}
                >
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-5 lg:items-center">
          <div className="lg:col-span-2">
            <div className="relative h-72 overflow-hidden rounded-xl border border-slate-200">
              <Image
                src="/images/profile-placeholder.svg"
                alt="Portrait-style placeholder graphic for Mukesh Gupta"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              About Me
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              I work at the intersection of clean frontend engineering,
              API-driven backend systems, and SEO. My approach is simple: ship
              elegant products that perform under real traffic and rank for
              relevant keywords.
            </p>
            <div className="mt-6">
              <Button href="/about" variant="secondary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            Publications
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Selected research work focused on search systems, relevance, and
            scalable web platforms.
          </p>

          <div className="mt-6 space-y-4">
            {publications.map((paper) => (
              <article
                key={paper.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                  {paper.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-600">
                  {paper.venue} · {paper.year}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  {paper.authors}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {paper.abstract}
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                  Publisher: {paper.publisher} · DOI: {paper.doi} · Location:{" "}
                  {paper.location}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {paper.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex text-sm font-semibold text-slate-900 transition-colors hover:text-slate-600"
                >
                  Read Publication
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mb-16 max-w-6xl rounded-2xl border border-slate-200 bg-slate-900 px-6 py-12 text-white sm:px-10">
        <h2 className="text-3xl font-semibold tracking-tight">
          Need a developer who understands both code and search?
        </h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          Let us build your next web product with performance, scalability, and
          organic growth in mind.
        </p>
        <div className="mt-6">
          <Button href="/contact" variant="secondary">
            Start a Conversation
          </Button>
        </div>
      </section>
    </>
  );
}
