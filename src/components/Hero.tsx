"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  IoShieldCheckmarkOutline,
  IoBusinessOutline,
  IoRibbonOutline,
  IoGlobeOutline,
} from "react-icons/io5";

const trustBadges = [
  {
    icon: IoShieldCheckmarkOutline,
    label: "NDIS Registered Provider",
  },
  {
    icon: IoBusinessOutline,
    label: "Licensed Real Estate Agency",
  },
  {
    icon: IoRibbonOutline,
    label: "REIWA Member",
  },
  {
    icon: IoGlobeOutline,
    label: "WA Police Security Agent",
  },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/Web Image 5.png"
          alt=""
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-slate/90 via-brand-slate/75 to-brand-slate/50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              id="hero-heading"
              className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Smart &amp; Accessible{" "}
              <br className="hidden sm:block" />
              Homes in{" "}
              <span className="text-brand-teal-light">Perth</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-gray-200 sm:text-xl"
          >
            Your independence. Our purpose. Smart home technology and
            purpose-built SDA housing for NDIS participants across Perth.
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

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex flex-col items-center gap-2 rounded-xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur-sm"
            >
              <badge.icon className="h-6 w-6 text-brand-teal-light" />
              <span className="text-xs font-medium text-gray-200">
                {badge.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
