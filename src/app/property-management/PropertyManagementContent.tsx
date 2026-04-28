"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import {
  IoHomeOutline,
  IoStarOutline,
  IoTrendingUpOutline,
  IoDocumentTextOutline,
  IoShieldCheckmarkOutline,
  IoCallOutline,
  IoCheckmarkCircleOutline,
  IoArrowForwardOutline,
} from "react-icons/io5";
import {
  HiOutlineKey,
  HiOutlineCurrencyDollar,
  HiOutlineClipboardCheck,
  HiOutlineUserGroup,
} from "react-icons/hi";

const longTermServices = [
  "Tenant sourcing & background checks",
  "Lease preparation & management",
  "Routine property inspections",
  "Maintenance coordination",
  "Rent collection & disbursement",
  "End-of-tenancy reporting",
];

const shortTermServices = [
  "Airbnb & short-stay listing creation",
  "Professional photography & copywriting",
  "Dynamic pricing optimisation",
  "Guest screening & communication",
  "Linen, cleaning & turnover management",
  "24/7 guest support",
];

const stats = [
  {
    icon: IoStarOutline,
    value: "4.8★",
    label: "Average Airbnb Rating",
  },
  {
    icon: IoTrendingUpOutline,
    value: "85%",
    label: "Short-Stay Occupancy Rate",
  },
  {
    icon: IoShieldCheckmarkOutline,
    value: "Licensed",
    label: "Real Estate Agency (REIWA)",
  },
  {
    icon: IoHomeOutline,
    value: "Perth",
    label: "Local Experts Since Day One",
  },
];

const whyUs = [
  {
    icon: HiOutlineKey,
    title: "Hands-Off Ownership",
    description:
      "We handle everything — from finding tenants and managing bookings to coordinating repairs. You collect the returns without the day-to-day hassle.",
  },
  {
    icon: HiOutlineCurrencyDollar,
    title: "Maximised Returns",
    description:
      "Our short-term management achieves an 85% occupancy rate and 4.8-star guest rating, consistently outperforming the Perth market average.",
  },
  {
    icon: HiOutlineClipboardCheck,
    title: "Full Compliance",
    description:
      "As a licensed real estate agency and REIWA member, we manage your property in line with WA tenancy legislation and short-stay regulations.",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Dedicated Local Team",
    description:
      "Based in Perth, our team knows the local rental market inside out — ensuring your property is priced right and presented well year-round.",
  },
];

export default function PropertyManagementContent() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-teal to-brand-green py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-6">
              <IoHomeOutline className="h-4 w-4" />
              Property Management
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6 leading-tight">
              Perth Property Management
              <br />
              <span className="text-white/90">Long Term &amp; Short Stay</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Full-service property management for Perth landlords. Whether you want a reliable
              long-term tenant or maximum short-stay returns, we handle it all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-brand-teal font-semibold px-8 py-3 rounded-lg hover:bg-white/90 transition-colors"
              >
                Get a Quote
                <IoArrowForwardOutline className="h-4 w-4" />
              </Link>
              <a
                href="tel:1800123000"
                className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                <IoCallOutline className="h-4 w-4" />
                1800 123 000
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="text-center rounded-2xl border border-brand-border bg-brand-bg-alt p-6">
                  <div className="mx-auto mb-3 w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-brand-teal" />
                  </div>
                  <p className="font-heading text-2xl font-bold text-brand-slate">{stat.value}</p>
                  <p className="text-sm text-brand-gray mt-1">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Long Term & Short Term */}
      <section className="py-20 bg-brand-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-slate mb-4">
                Two Ways to Maximise Your Investment
              </h2>
              <p className="text-brand-gray text-lg max-w-2xl mx-auto">
                Choose the management style that suits your property and lifestyle — or let us advise
                you on which delivers the best return.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Long Term */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl border border-brand-border p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                    <IoDocumentTextOutline className="h-6 w-6 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-brand-slate text-xl">
                      Long-Term Rental Management
                    </h3>
                    <p className="text-brand-gray text-sm">Stable income, zero hassle</p>
                  </div>
                </div>
                <p className="text-brand-gray mb-6">
                  We find quality tenants, manage lease agreements, handle maintenance requests, and
                  ensure your property stays compliant with WA tenancy law — so you never have to
                  think about it.
                </p>
                <ul className="space-y-2.5">
                  {longTermServices.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <IoCheckmarkCircleOutline className="h-5 w-5 text-brand-teal mt-0.5 flex-shrink-0" />
                      <span className="text-brand-gray text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Short Term */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl border border-brand-border p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                    <IoStarOutline className="h-6 w-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-brand-slate text-xl">
                      Short-Stay &amp; Airbnb Management
                    </h3>
                    <p className="text-brand-gray text-sm">4.8★ rating · 85% occupancy</p>
                  </div>
                </div>
                <p className="text-brand-gray mb-6">
                  Our short-stay management delivers consistently high occupancy and guest ratings
                  across Perth. We manage everything from listing creation and dynamic pricing to
                  guest communications and property turnover.
                </p>
                <ul className="space-y-2.5">
                  {shortTermServices.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <IoCheckmarkCircleOutline className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-brand-gray text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Interior Quality Visual */}
      <section className="relative overflow-hidden">
        <div className="relative h-72 w-full sm:h-80">
          <Image
            src="/images/modern-living.jpg"
            alt="Well-presented modern living space in a professionally managed Perth property"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-slate/80 via-brand-slate/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <AnimatedSection>
                <p className="max-w-xl text-xl font-bold italic text-white sm:text-2xl">
                  &ldquo;Properties presented well attract better tenants and better returns. That&rsquo;s our standard.&rdquo;
                </p>
                <p className="mt-3 text-sm font-semibold text-brand-green-light">
                  Arian David Gorjy — Principal, Innogreen
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Why Innogreen */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-slate mb-4">
                Why Property Owners Choose Innogreen
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {whyUs.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-brand-slate text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-brand-gray">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-teal to-brand-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Ready to Put Your Property to Work?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Get a tailored quote from our Perth property management team. No lock-in contracts,
              no hidden fees — just straightforward management that delivers results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-brand-teal font-semibold px-8 py-3 rounded-lg hover:bg-white/90 transition-colors"
              >
                Get a Quote
                <IoArrowForwardOutline className="h-4 w-4" />
              </Link>
              <a
                href="tel:1800123000"
                className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                <IoCallOutline className="h-4 w-4" />
                1800 123 000
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
