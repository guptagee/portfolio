import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About | Mukesh Gupta",
  description:
    "Learn about Mukesh Gupta, a MERN stack developer focused on technical SEO and high-performance frontend architecture.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">
        About Me
      </h1>
      <p className="mt-6 text-base leading-8 text-slate-700">
        I am a MERN stack developer with a strong focus on frontend performance
        and technical SEO. My work combines robust React interfaces, scalable
        Node.js APIs, and search-friendly architecture.
      </p>
      <h2 className="mt-10 text-2xl font-semibold tracking-tight text-slate-900">
        What I Bring
      </h2>
      <ul className="mt-4 space-y-3 text-slate-700">
        <li>
          Production-grade MERN development with clean component architecture.
        </li>
        <li>Core Web Vitals optimization and Lighthouse-focused delivery.</li>
        <li>
          SEO-first implementation across metadata, semantics, and information
          architecture.
        </li>
        <li>Collaborative communication and iterative shipping mindset.</li>
      </ul>

      <h2 className="mt-10 text-2xl font-semibold tracking-tight text-slate-900">
        Current Focus
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-700">
        I am currently building data-rich web products, internal dashboards, and
        scalable content platforms where fast UX and discoverability matter.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Button href="/projects">Explore Projects</Button>
        <Button href="/contact" variant="secondary">
          Contact Me
        </Button>
      </div>
    </main>
  );
}
