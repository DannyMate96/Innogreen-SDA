"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import {
  HiOutlineClipboardCheck,
  HiOutlineHome,
  HiOutlinePuzzle,
  HiOutlineSupport,
  HiOutlineUserGroup,
  HiOutlineLightBulb,
  HiOutlineChevronDown,
} from "react-icons/hi";
import {
  IoCheckmarkCircleOutline,
  IoHelpCircleOutline,
  IoArrowForwardOutline,
} from "react-icons/io5";
import { useState } from "react";

const otServices = [
  {
    icon: HiOutlineClipboardCheck,
    title: "OT Assessments",
    description:
      "Comprehensive functional assessments to understand how your disability affects daily living, used to justify NDIS supports and assistive technology.",
    features: [
      "In-home and clinic-based assessments",
      "Standardised functional assessment tools",
      "Detailed reports for NDIS planners",
      "AT and home modification recommendations",
    ],
  },
  {
    icon: HiOutlineHome,
    title: "Home Modification Recommendations",
    description:
      "OTs assess your home environment and recommend modifications that improve accessibility, safety, and independence for NDIS participants.",
    features: [
      "Bathroom and kitchen modifications",
      "Ramp and handrail installation advice",
      "Door widening for wheelchair access",
      "Lighting and flooring recommendations",
    ],
  },
  {
    icon: HiOutlinePuzzle,
    title: "Assistive Technology Prescription",
    description:
      "OTs prescribe the right assistive technology for your needs — from simple aids to complex smart home systems — and provide the NDIS with the evidence needed to fund them.",
    features: [
      "Smart home AT prescriptions",
      "Mobility aid assessments",
      "Communication device recommendations",
      "Environmental control unit setup",
    ],
  },
  {
    icon: HiOutlineSupport,
    title: "SDA and SIL Support",
    description:
      "OTs play a key role in SDA and SIL applications, providing functional assessments that demonstrate your need for specialist disability accommodation.",
    features: [
      "SDA eligibility assessments",
      "SIL support needs documentation",
      "SDA design category recommendations",
      "Housing goal-setting support",
    ],
  },
];

const audiences = [
  {
    icon: HiOutlineUserGroup,
    title: "NDIS Participants",
    description:
      "Access OT services through your NDIS plan under Capacity Building or Improved Daily Living supports.",
  },
  {
    icon: HiOutlineLightBulb,
    title: "Family Members & Carers",
    description:
      "OTs can support families in understanding equipment, home set-up, and how to assist their loved one more effectively.",
  },
  {
    icon: HiOutlineHome,
    title: "SDA Applicants",
    description:
      "An OT report is often required to support an application for Specialist Disability Accommodation funding.",
  },
  {
    icon: HiOutlineClipboardCheck,
    title: "AT Seekers",
    description:
      "Anyone needing NDIS-funded assistive technology over $1,500 typically requires an OT prescription and justification report.",
  },
];

const faqs = [
  {
    question: "Do I need an OT referral to access Innogreen's services?",
    answer:
      "Not always. For lower-cost assistive technology (under $1,500), you may be able to self-manage. However, for smart home systems, home modifications, or SDA housing, an OT assessment is usually required by the NDIS to justify funding. We can help connect you with an OT if needed.",
  },
  {
    question: "How long does an OT assessment take?",
    answer:
      "An OT assessment typically takes 1–2 hours. The written report is usually provided within 2–4 weeks of the assessment. The timeline can vary depending on the complexity of your needs and the OT's caseload.",
  },
  {
    question: "Can an OT assessment help me get better NDIS funding?",
    answer:
      "Yes. A thorough OT assessment provides the clinical evidence the NDIS needs to approve supports. Without it, the NDIS may decline funding requests for assistive technology, home modifications, or SDA. A good OT report clearly links your functional impairment to the recommended supports.",
  },
  {
    question: "Is OT funded under my NDIS plan?",
    answer:
      "OT assessments are typically funded under the Capacity Building – Improved Daily Living budget in your NDIS plan. If you don't currently have this funding, speak to your NDIS planner or LAC about including it at your next review.",
  },
  {
    question: "What's the difference between an OT and a support worker?",
    answer:
      "An occupational therapist (OT) is a university-trained health professional who assesses your functional needs and prescribes supports. A support worker provides direct assistance with daily tasks. OTs inform what supports you need; support workers deliver those supports on a daily basis.",
  },
  {
    question: "Can Innogreen refer me to an OT in Perth?",
    answer:
      "Yes. Innogreen works with a network of experienced OTs in Perth. If you're a client or SDA resident, contact our team and we can facilitate a referral to an OT who understands smart home technology and NDIS requirements.",
  },
];

export default function OTResourceContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-teal to-brand-green py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-6">
              <IoHelpCircleOutline className="h-4 w-4" />
              OT Resource Centre
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6 leading-tight">
              Occupational Therapy
              <br />
              <span className="text-white/90">Resources for NDIS Participants</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10">
              Understand how occupational therapy supports your NDIS journey — from assessments and
              assistive technology to home modifications and SDA applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-brand-teal font-semibold px-8 py-3 rounded-lg hover:bg-white/90 transition-colors"
              >
                Get an OT Referral
                <IoArrowForwardOutline className="h-4 w-4" />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                Explore OT Services
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What is OT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-slate mb-6">
                  What is Occupational Therapy?
                </h2>
                <p className="text-brand-gray text-lg mb-6">
                  Occupational therapy (OT) is a health profession focused on helping people participate
                  in meaningful daily activities — or "occupations" — despite physical, cognitive, or
                  sensory challenges.
                </p>
                <p className="text-brand-gray text-lg mb-8">
                  For NDIS participants, an OT is often the key professional who bridges your disability
                  needs with the supports and technology that can help you live more independently.
                </p>
                <div className="space-y-3">
                  {[
                    "Assess how your disability affects daily tasks",
                    "Recommend assistive technology and home modifications",
                    "Provide NDIS-required clinical evidence",
                    "Support SDA and SIL applications",
                    "Help you achieve your independence goals",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <IoCheckmarkCircleOutline className="h-5 w-5 text-brand-teal mt-0.5 flex-shrink-0" />
                      <span className="text-brand-gray">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-brand-teal/5 to-brand-green/5 rounded-2xl p-8 border border-brand-border">
                <h3 className="font-heading font-bold text-brand-slate text-xl mb-6">
                  OT Funding in Your NDIS Plan
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      label: "Capacity Building – Improved Daily Living",
                      desc: "Covers OT assessments, reports, and therapy",
                    },
                    {
                      label: "Capital – Assistive Technology",
                      desc: "Funds equipment and devices prescribed by an OT",
                    },
                    {
                      label: "Capital – Home Modifications",
                      desc: "Covers modifications recommended by an OT",
                    },
                    {
                      label: "Capital – SDA",
                      desc: "OT evidence often required for SDA approval",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-teal mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-brand-slate text-sm">{item.label}</p>
                        <p className="text-brand-gray text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* OT Services */}
      <section id="services" className="py-20 bg-brand-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-slate mb-4">
                OT Services We Support
              </h2>
              <p className="text-brand-gray text-lg max-w-2xl mx-auto">
                Innogreen works alongside occupational therapists across Perth to deliver the right
                supports for your NDIS goals.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otServices.map((service) => (
              <AnimatedSection key={service.title}>
                <div className="bg-white rounded-2xl border border-brand-border p-8 h-full card-hover">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-brand-teal" />
                    </div>
                    <h3 className="font-heading font-bold text-brand-slate text-xl">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-brand-gray mb-5">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <IoCheckmarkCircleOutline className="h-4 w-4 text-brand-teal mt-0.5 flex-shrink-0" />
                        <span className="text-brand-gray text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Benefit */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-slate mb-4">
                Who Can Benefit from OT?
              </h2>
              <p className="text-brand-gray text-lg max-w-2xl mx-auto">
                Occupational therapy supports a wide range of people navigating the NDIS.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((audience) => (
              <AnimatedSection key={audience.title}>
                <div className="text-center bg-brand-bg-alt rounded-2xl border border-brand-border p-6 h-full card-hover">
                  <div className="mx-auto mb-4 w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center">
                    <audience.icon className="h-6 w-6 text-brand-teal" />
                  </div>
                  <h3 className="font-heading font-bold text-brand-slate mb-3">{audience.title}</h3>
                  <p className="text-brand-gray text-sm">{audience.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-brand-bg-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-slate mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-brand-gray text-lg">
                Common questions about occupational therapy and NDIS supports.
              </p>
            </div>
          </AnimatedSection>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index}>
                <div className="bg-white rounded-2xl border border-brand-border overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    aria-expanded={openFaq === index}
                  >
                    <span className="font-semibold text-brand-slate">{faq.question}</span>
                    <HiOutlineChevronDown
                      className={`h-5 w-5 text-brand-teal flex-shrink-0 transition-transform duration-200 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-5">
                      <p className="text-brand-gray">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-br from-brand-teal to-brand-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Need an OT Referral or NDIS Support?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Innogreen can connect you with experienced occupational therapists in Perth and provide
              the smart home solutions your OT recommends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-brand-teal font-semibold px-8 py-3 rounded-lg hover:bg-white/90 transition-colors"
              >
                Contact Our Team
                <IoArrowForwardOutline className="h-4 w-4" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                Read Our Blog
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
