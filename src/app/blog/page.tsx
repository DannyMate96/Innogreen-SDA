import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogList from "./BlogList";

export const metadata: Metadata = {
  title: "Blog - NDIS, SDA & Smart Home Resources",
  description:
    "Practical guides and insights on NDIS funding, Specialist Disability Accommodation, smart home technology, and occupational therapy for participants in Perth, WA.",
  alternates: {
    canonical: "https://innogreen.net.au/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogList posts={posts} />;
}
