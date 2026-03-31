import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  keywords: string[];
};

export type BlogPost = BlogPostMeta & {
  contentHtml: string;
};

export function getAllPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .map((fileName) => fileName.replace(/\.md$/, ""));
}

export function getSortedPostsMeta(): BlogPostMeta[] {
  const slugs = getAllPostSlugs();

  return slugs
    .map((slug) => getPostMetaBySlug(slug))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostMetaBySlug(slug: string): BlogPostMeta {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    keywords: data.keywords ?? [],
  };
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    keywords: data.keywords ?? [],
    contentHtml,
  };
}
