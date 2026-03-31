import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug, getPostMetaBySlug } from "@/lib/blog";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = getPostMetaBySlug(slug);

    return {
      title: `${post.title} | Blog`,
      description: post.description,
      keywords: post.keywords,
      openGraph: {
        title: post.title,
        description: post.description,
        type: "article",
      },
    };
  } catch {
    return {
      title: "Post Not Found",
      description: "The requested blog post does not exist.",
    };
  }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => notFound());

  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <article>
        <header>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            {post.date}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
            {post.title}
          </h1>
          <p className="mt-4 text-base leading-8 text-slate-600">
            {post.description}
          </p>
        </header>

        <section
          className="prose prose-slate mt-10 max-w-none prose-headings:tracking-tight prose-a:text-slate-900"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </main>
  );
}
