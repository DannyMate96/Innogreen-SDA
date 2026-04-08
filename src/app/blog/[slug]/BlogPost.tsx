"use client";

import Link from "next/link";
import { BlogPost as BlogPostType, BlogPostMeta, BlogCategory } from "@/lib/blog";
import AnimatedSection from "@/components/AnimatedSection";
import {
  IoArrowBackOutline,
  IoArrowForwardOutline,
  IoCopyOutline,
  IoCheckmarkOutline,
} from "react-icons/io5";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { useState, useEffect } from "react";
import { serialize } from "next-mdx-remote/serialize";

const categoryColors: Record<BlogCategory, string> = {
  "Smart Homes": "bg-cyan-100 text-cyan-700",
  SDA: "bg-green-100 text-green-700",
  OT: "bg-purple-100 text-purple-700",
  NDIS: "bg-blue-100 text-blue-700",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

interface Props {
  post: BlogPostType;
  related: BlogPostMeta[];
}

export default function BlogPost({ post, related }: Props) {
  const [copied, setCopied] = useState(false);
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(null);

  useEffect(() => {
    serialize(post.content).then(setMdxSource);
  }, [post.content]);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back link */}
      <div className="bg-brand-bg-alt border-b border-brand-border py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-brand-gray hover:text-brand-teal text-sm font-medium transition-colors"
          >
            <IoArrowBackOutline className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Post Header */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mb-4">
              <span
                className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category]}`}
              >
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-brand-slate mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-brand-gray-light pb-8 border-b border-brand-border">
              <span>{post.author}</span>
              <span>·</span>
              <span>{formatDate(post.date)}</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* MDX Content */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-brand-slate prose-a:text-brand-teal prose-strong:text-brand-slate prose-p:text-brand-gray prose-li:text-brand-gray prose-table:text-brand-gray">
              {mdxSource ? (
                <MDXRemote {...mdxSource} />
              ) : (
                <div className="text-brand-gray animate-pulse">Loading…</div>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Share Buttons */}
      <section className="py-10 border-t border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span className="text-brand-slate font-semibold text-sm">Share this article:</span>
              <div className="flex gap-3">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-brand-border text-sm text-brand-gray hover:bg-brand-bg-alt transition-colors"
                >
                  {copied ? (
                    <>
                      <IoCheckmarkOutline className="h-4 w-4 text-brand-teal" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <IoCopyOutline className="h-4 w-4" />
                      Copy link
                    </>
                  )}
                </button>
                <button
                  onClick={shareOnFacebook}
                  className="px-4 py-2 rounded-lg bg-[#1877F2] text-white text-sm font-medium hover:bg-[#166fe5] transition-colors"
                >
                  Facebook
                </button>
                <button
                  onClick={shareOnLinkedIn}
                  className="px-4 py-2 rounded-lg bg-[#0A66C2] text-white text-sm font-medium hover:bg-[#095ba8] transition-colors"
                >
                  LinkedIn
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-16 bg-brand-bg-alt">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-2xl font-heading font-bold text-brand-slate mb-8">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {related.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} className="group">
                    <div className="bg-white rounded-2xl border border-brand-border p-6 h-full card-hover">
                      <span
                        className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${categoryColors[r.category]}`}
                      >
                        {r.category}
                      </span>
                      <h3 className="font-heading font-bold text-brand-slate mb-2 group-hover:text-brand-teal transition-colors line-clamp-2">
                        {r.title}
                      </h3>
                      <p className="text-brand-gray text-sm line-clamp-2 mb-4">{r.description}</p>
                      <span className="inline-flex items-center gap-1 text-brand-teal text-sm font-medium">
                        Read more
                        <IoArrowForwardOutline className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-brand-teal to-brand-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4">
              Have Questions? We&apos;re Here to Help.
            </h2>
            <p className="text-white/80 mb-8">
              Contact our team for personalised advice on NDIS smart home technology and SDA housing
              in Perth.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-brand-teal font-semibold px-8 py-3 rounded-lg hover:bg-white/90 transition-colors"
            >
              Contact Us
              <IoArrowForwardOutline className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
