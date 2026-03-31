import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";

export default function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
        {post.date}
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
        {post.title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        {post.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.keywords.map((keyword) => (
          <span
            key={keyword}
            className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700"
          >
            {keyword}
          </span>
        ))}
      </div>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-6 inline-flex text-sm font-semibold text-slate-900 transition-colors hover:text-slate-600"
      >
        Read Article
      </Link>
    </article>
  );
}
