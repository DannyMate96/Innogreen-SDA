"use client";

import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import { IoCallOutline, IoMailOutline, IoTimeOutline } from "react-icons/io5";

export default function CallToAction() {
  return (
    <section
      className="gradient-bg py-20 lg:py-28"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2
            id="cta-heading"
            className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          >
            Ready to Find Your Accessible Home?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
            Contact us today to discuss Smart Home solutions or view available
            SDA properties
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/sda"
              className="inline-flex min-h-[44px] items-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-brand-teal shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl"
            >
              View SDA Properties
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] items-center rounded-lg border-2 border-white px-8 py-3 text-base font-semibold text-white transition-all hover:bg-white hover:text-brand-teal"
            >
              Contact Us
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
            <a
              href="tel:1800123000"
              className="flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white"
            >
              <IoCallOutline className="h-5 w-5" />
              1800 123 000
            </a>
            <a
              href="mailto:info@innogreentech.com.au"
              className="flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white"
            >
              <IoMailOutline className="h-5 w-5" />
              info@innogreentech.com.au
            </a>
            <span className="flex items-center gap-2 text-sm font-medium text-white/90">
              <IoTimeOutline className="h-5 w-5" />
              Mon–Fri: 9–5 PM | Sat: 9–1 PM
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
