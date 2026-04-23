"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HERO_IMAGE = "/images/hf_20260422_070644_6f37f834-db77-4f48-b063-3330f080fd17.png";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* ========= DESKTOP (lg and up): use the designed image as-is with clickable overlays ========= */}
      <div className="relative hidden lg:block">
        <div className="relative mx-auto aspect-[1344/752] w-full max-w-[1536px]">
          <Image
            src={HERO_IMAGE}
            alt="Innogreen — smart, accessible SDA homes. Use the clickable buttons to view SDA properties or smart home solutions."
            fill
            priority
            sizes="(min-width: 1024px) 100vw, 0px"
            className="object-cover"
          />

          {/* Cover the baked-in logo in the image (top-left) — matches the image's dark slate bg */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 h-[15%] w-[22%] bg-brand-slate"
          />

          {/* SEO/a11y heading — visually hidden because the text is baked into the image */}
          <h1 id="hero-heading" className="sr-only">
            Smart homes. Greater independence. Better lives. Purpose-built,
            technology-enabled SDA homes designed around you.
          </h1>

          {/* Clickable hotspot: View SDA Properties (teal button in image) */}
          <Link
            href="/sda"
            aria-label="View SDA Properties"
            className="absolute left-[3%] top-[60%] h-[9%] w-[16%] rounded-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-teal-light focus-visible:ring-offset-2 focus-visible:ring-offset-brand-slate"
          >
            <span className="sr-only">View SDA Properties</span>
          </Link>

          {/* Clickable hotspot: Smart Home Solutions (outlined button in image) */}
          <Link
            href="/smart-homes"
            aria-label="Smart Home Solutions"
            className="absolute left-[20%] top-[60%] h-[9%] w-[20%] rounded-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-teal-light focus-visible:ring-offset-2 focus-visible:ring-offset-brand-slate"
          >
            <span className="sr-only">Smart Home Solutions</span>
          </Link>
        </div>
      </div>

      {/* ========= MOBILE (below lg): simplified dark-slate hero with real HTML ========= */}
      <div className="relative bg-brand-slate lg:hidden">
        {/* Subtle teal glow accent (matches brand, no image bleed-through) */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-brand-teal)_0%,_transparent_55%)] opacity-20"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Smart homes.
              <br />
              Greater independence.
              <br />
              <span className="text-brand-teal-light">Better lives.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-gray-200"
          >
            Purpose-built, technology-enabled SDA homes designed around you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/sda"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-brand-teal px-8 py-3 text-base font-semibold text-white shadow-lg shadow-brand-teal/25 transition-all hover:bg-brand-teal-dark hover:shadow-xl"
            >
              View SDA Properties
            </Link>
            <Link
              href="/smart-homes"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border-2 border-white px-8 py-3 text-base font-semibold text-white transition-all hover:bg-white hover:text-brand-slate"
            >
              Smart Home Solutions
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
