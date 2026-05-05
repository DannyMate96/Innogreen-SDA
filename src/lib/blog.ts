import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogCategory, BlogPost, BlogPostMeta } from "./blog-types";

export type { BlogCategory, BlogPost, BlogPostMeta };
export { categoryColors, formatDate } from "./blog-types";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPostMeta[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const fullPath = path.join(BLOG_DIR, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title as string,
      description: data.description as string,
      date: data.date as string,
      category: data.category as BlogCategory,
      author: data.author as string,
      image: data.image as string | undefined,
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    date: data.date as string,
    category: data.category as BlogCategory,
    author: data.author as string,
    image: data.image as string | undefined,
    content,
  };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getRelatedPosts(
  slug: string,
  category: BlogCategory,
  limit = 2
): BlogPostMeta[] {
  return getAllPosts()
    .filter((p) => p.slug !== slug && p.category === category)
    .slice(0, limit);
}
