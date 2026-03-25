"use client";

import AnimatedSection from "./AnimatedSection";
import {
  HiOutlineMicrophone,
  HiOutlineShieldCheck,
  HiOutlineLightBulb,
  HiOutlineChat,
  HiOutlineHeart,
  HiOutlinePuzzle,
} from "react-icons/hi";

const techFeatures = [
  {
    icon: HiOutlineMicrophone,
    title: "Voice Control",
    features: [
      "Control your home hands-free",
      "Compatible with Alexa, Google Home",
      "Custom voice commands",
    ],
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Security & Safety",
    features: [
      "Smart locks and access control",
      "Video doorbells and cameras",
      "Automated doors",
    ],
  },
  {
    icon: HiOutlineLightBulb,
    title: "Environmental Control",
    features: [
      "Automated lighting and blinds",
      "Temperature control",
      "Energy monitoring",
    ],
  },
  {
    icon: HiOutlineChat,
    title: "Communication",
    features: [
      "Environmental Control Units (ECU)",
      "Video calling integration",
      "Family connection features",
    ],
  },
  {
    icon: HiOutlineHeart,
    title: "Health Monitoring",
    features: [
      "Wellness check systems",
      "Medication reminders",
      "Activity monitoring (optional)",
    ],
  },
  {
    icon: HiOutlinePuzzle,
    title: "Integration",
    features: [
      "Works with existing devices",
      "Custom setup for your needs",
      "Ongoing support included",
    ],
  },
];

export default function SmartHomeTech() {
  return (
    <section
      className="bg-white py-20 lg:py-28"
      aria-labelledby="smart-tech-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 text-center">
          <h2
            id="smart-tech-heading"
            className="text-3xl font-bold text-brand-slate sm:text-4xl"
          >
            Smart Home Technology for Independence
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-gray">
            Easy-to-use automation tailored to your needs
          </p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techFeatures.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.1}>
              <div className="card-hover h-full rounded-xl border border-brand-border bg-brand-bg-alt p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-teal/10 text-brand-teal">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-brand-slate">
                  {feature.title}
                </h3>
                <ul className="mt-3 space-y-2" role="list">
                  {feature.features.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-brand-gray"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
