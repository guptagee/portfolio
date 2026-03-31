import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import { getSortedPostsMeta } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Mukesh Gupta",
  description:
    "Read blog posts by Mukesh Gupta about MERN stack development, SEO strategy, and web performance.",
};

export default function BlogPage() {
  const posts = getSortedPostsMeta();

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Blog</h1>
      <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
        Practical write-ups on scaling MERN apps and improving technical SEO for
        content-driven products.
      </p>

      <section className="mt-10 grid gap-6" aria-label="Blog posts list">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </section>
    </main>
  );
}
