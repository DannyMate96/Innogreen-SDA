"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { BlogPostMeta, BlogCategory, categoryColors, formatDate } from "@/lib/blog";
import { useState } from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { HiOutlineNewspaper } from "react-icons/hi";

const CATEGORIES: ("All" | BlogCategory)[] = ["All", "Smart Homes", "SDA", "OT", "NDIS", "NDIS Funding"];

export default function BlogList({ posts }: { posts: BlogPostMeta[] }) {
  const [activeCategory, setActiveCategory] = useState<"All" | BlogCategory>("All");

  const filtered =
    activeCategory === "All" ? posts : posts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-teal to-brand-green py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-6">
              <HiOutlineNewspaper className="h-4 w-4" />
              Innogreen Blog
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
              NDIS & Disability Housing Resources
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
              Practical guides on smart home technology, SDA, occupational therapy, and navigating
              the NDIS — written for participants and their families.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10 bg-white border-b border-brand-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-brand-teal text-white"
                    : "bg-brand-bg-alt text-brand-gray hover:bg-brand-teal/10 hover:text-brand-teal"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-brand-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-brand-gray">
              No posts in this category yet. Check back soon.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post) => (
                <AnimatedSection key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
                    <div className="bg-white rounded-2xl border border-brand-border p-6 h-full flex flex-col card-hover">
                      {/* Category Badge */}
                      <div className="mb-4">
                        <span
                          className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category]}`}
                        >
                          {post.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="font-heading font-bold text-brand-slate text-lg mb-3 group-hover:text-brand-teal transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-brand-gray text-sm flex-1 mb-5 line-clamp-3">
                        {post.description}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-brand-border">
                        <span className="text-brand-gray-light text-xs">{formatDate(post.date)}</span>
                        <span className="inline-flex items-center gap-1 text-brand-teal text-sm font-medium group-hover:gap-2 transition-all">
                          Read more
                          <IoArrowForwardOutline className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
