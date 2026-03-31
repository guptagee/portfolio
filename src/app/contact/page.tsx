import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Mukesh Gupta",
  description:
    "Get in touch with Mukesh Gupta for MERN stack and SEO-focused web development opportunities.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">
        Contact
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700">
        I am open to full-time roles, freelance collaborations, and product
        consulting in MERN development and technical SEO.
      </p>

      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Email</h2>
          <a
            className="mt-3 inline-flex text-slate-700 hover:text-slate-900"
            href="mailto:hello@mukeshh.dev"
          >
            hello@mukeshh.dev
          </a>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Location</h2>
          <p className="mt-3 text-slate-700">
            India · Open to remote opportunities
          </p>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">GitHub</h2>
          <a
            className="mt-3 inline-flex text-slate-700 hover:text-slate-900"
            href="https://github.com/guptagee"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/guptagee
          </a>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">LinkedIn</h2>
          <a
            className="mt-3 inline-flex text-slate-700 hover:text-slate-900"
            href="https://www.linkedin.com/in/guptag-mukesh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/guptag-mukesh/
          </a>
        </article>
      </section>
    </main>
  );
}
