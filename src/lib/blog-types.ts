export type BlogCategory = "Smart Homes" | "SDA" | "OT" | "NDIS";

export const categoryColors: Record<BlogCategory, string> = {
  "Smart Homes": "bg-cyan-100 text-cyan-700",
  SDA: "bg-green-100 text-green-700",
  OT: "bg-purple-100 text-purple-700",
  NDIS: "bg-blue-100 text-blue-700",
};

export function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: BlogCategory;
  author: string;
  image?: string;
  content: string;
}

export interface BlogPostMeta extends Omit<BlogPost, "content"> {}
