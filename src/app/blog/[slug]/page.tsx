import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllSlugs, getPostBySlug, getRelatedPosts, BlogCategory, categoryColors, formatDate } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import ShareButtons from "./ShareButtons";
import {
  IoArrowBackOutline,
  IoArrowForwardOutline,
  IoTimeOutline,
  IoPersonOutline,
  IoCalendarOutline,
} from "react-icons/io5";
import type { ComponentProps } from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://innogreen.net.au/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const categoryBannerColors: Record<BlogCategory, string> = {
  "Smart Homes": "from-cyan-700 to-teal-600",
  SDA: "from-emerald-700 to-green-600",
  OT: "from-purple-700 to-violet-600",
  NDIS: "from-blue-700 to-cyan-600",
  "NDIS Funding": "from-amber-700 to-orange-600",
};

function readingTime(content: string) {
  return Math.max(1, Math.round(content.trim().split(/\s+/).length / 200));
}

// ─── Custom MDX Components ────────────────────────────────────────────────────

const mdxComponents = {
  h1: ({ children }: ComponentProps<"h1">) => (
    <h2 className="mt-14 mb-4 font-heading text-2xl font-bold text-brand-slate">
      <span className="mb-3 block h-1 w-10 rounded bg-brand-teal" />
      {children}
    </h2>
  ),
  h2: ({ children }: ComponentProps<"h2">) => (
    <h2 className="mt-14 mb-4 font-heading text-2xl font-bold text-brand-slate">
      <span className="mb-3 block h-1 w-10 rounded bg-brand-teal" />
      {children}
    </h2>
  ),
  h3: ({ children }: ComponentProps<"h3">) => (
    <h3 className="mt-9 mb-3 flex items-center gap-2.5 font-heading text-xl font-bold text-brand-slate">
      <span className="block h-2.5 w-2.5 flex-shrink-0 rounded-full bg-brand-teal" />
      {children}
    </h3>
  ),
  h4: ({ children }: ComponentProps<"h4">) => (
    <h4 className="mt-6 mb-2 font-heading text-lg font-semibold text-brand-slate">{children}</h4>
  ),
  p: ({ children }: ComponentProps<"p">) => (
    <p className="mb-5 text-[1.05rem] leading-relaxed text-brand-gray">{children}</p>
  ),
  ul: ({ children }: ComponentProps<"ul">) => (
    <ul className="mb-6 space-y-2.5 pl-0">{children}</ul>
  ),
  ol: ({ children }: ComponentProps<"ol">) => (
    <ol className="mb-6 space-y-3 pl-0">{children}</ol>
  ),
  li: ({ children }: ComponentProps<"li">) => (
    <li className="flex items-start gap-3 text-[1.05rem] text-brand-gray">
      <span className="mt-2 block h-2 w-2 flex-shrink-0 rounded-full bg-brand-teal" />
      <span>{children}</span>
    </li>
  ),
  blockquote: ({ children }: ComponentProps<"blockquote">) => (
    <blockquote className="my-8 rounded-r-2xl border-l-4 border-brand-teal bg-brand-teal/5 px-6 py-5 text-brand-slate">
      {children}
    </blockquote>
  ),
  table: ({ children }: ComponentProps<"table">) => (
    <div className="my-8 overflow-x-auto rounded-xl border border-brand-border shadow-sm">
      <table className="w-full text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }: ComponentProps<"thead">) => (
    <thead className="bg-brand-teal/10">{children}</thead>
  ),
  th: ({ children }: ComponentProps<"th">) => (
    <th className="px-4 py-3 text-left text-sm font-semibold text-brand-slate">{children}</th>
  ),
  td: ({ children }: ComponentProps<"td">) => (
    <td className="border-t border-brand-border px-4 py-3 text-brand-gray">{children}</td>
  ),
  img: ({ src, alt }: ComponentProps<"img">) => {
    if (!src || typeof src !== "string") return null;
    return (
      <figure className="my-10">
        <div className="overflow-hidden rounded-2xl shadow-md">
          <Image
            src={src}
            alt={alt || ""}
            width={800}
            height={450}
            className="w-full object-cover"
          />
        </div>
        {alt && (
          <figcaption className="mt-3 text-center text-sm text-brand-gray-light">{alt}</figcaption>
        )}
      </figure>
    );
  },
  strong: ({ children }: ComponentProps<"strong">) => (
    <strong className="font-semibold text-brand-slate">{children}</strong>
  ),
  a: ({ href, children }: ComponentProps<"a">) => (
    <a
      href={href}
      className="font-medium text-brand-teal underline underline-offset-2 hover:text-brand-teal-dark transition-colors"
    >
      {children}
    </a>
  ),
  hr: () => <hr className="my-10 border-brand-border" />,
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, post.category);
  const minutes = readingTime(post.content);
  const gradient = categoryBannerColors[post.category];

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero Banner ── */}
      <section className={`relative bg-gradient-to-br ${gradient} py-20`}>
        {post.image && (
          <div className="absolute inset-0">
            <Image src={post.image} alt="" fill className="object-cover opacity-20" priority />
          </div>
        )}
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            <IoArrowBackOutline className="h-4 w-4" />
            Back to Blog
          </Link>
          <div className="mb-5">
            <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
              {post.category}
            </span>
          </div>
          <h1 className="mb-6 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-white/80">{post.description}</p>
          <div className="flex flex-wrap items-center gap-5 text-sm text-white/70">
            <span className="flex items-center gap-1.5">
              <IoPersonOutline className="h-4 w-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <IoCalendarOutline className="h-4 w-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <IoTimeOutline className="h-4 w-4" />
              {minutes} min read
            </span>
          </div>
        </div>
      </section>

      {/* ── Hero Image ── */}
      {post.image && (
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="-mt-12 overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={post.image}
              alt={post.title}
              width={900}
              height={500}
              className="w-full object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* ── MDX Content ── */}
      <article className="mx-auto max-w-4xl px-4 pb-16 pt-14 sm:px-6 lg:px-8">
        <MDXRemote source={post.content} components={mdxComponents} />
      </article>

      {/* ── Share ── */}
      <section className="border-t border-brand-border py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ShareButtons />
        </div>
      </section>

      {/* ── Related Posts ── */}
      {related.length > 0 && (
        <section className="bg-brand-bg-alt py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 font-heading text-2xl font-bold text-brand-slate">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="group">
                  <div className="flex h-full flex-col rounded-2xl border border-brand-border bg-white p-6 card-hover">
                    <span
                      className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[r.category]}`}
                    >
                      {r.category}
                    </span>
                    <h3 className="mb-2 font-heading font-bold text-brand-slate transition-colors group-hover:text-brand-teal line-clamp-2">
                      {r.title}
                    </h3>
                    <p className="mb-4 flex-1 text-sm text-brand-gray line-clamp-2">
                      {r.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-teal">
                      Read more
                      <IoArrowForwardOutline className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="bg-gradient-to-br from-brand-teal to-brand-green py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 font-heading text-2xl font-bold sm:text-3xl">
            Have Questions? We&apos;re Here to Help.
          </h2>
          <p className="mb-8 text-white/80">
            Contact our team for personalised advice on NDIS smart home technology and SDA housing in Perth.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-semibold text-brand-teal hover:bg-white/90 transition-colors"
          >
            Contact Us
            <IoArrowForwardOutline className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
