"use client";

import AnimatedSection from "./AnimatedSection";
import { IoStarSharp, IoPersonCircleOutline } from "react-icons/io5";

const testimonials = [
  {
    quote:
      "Innogreen transformed our home with smart technology that my son can use independently. The voice-controlled lighting and automated doors have given him so much more freedom. The team truly understands accessibility needs.",
    name: "Sarah M.",
    context: "NDIS Participant Family, Inglewood",
    rating: 5,
  },
  {
    quote:
      "Moving into an Innogreen Home was the best decision. The SDA property is purpose-built, with smart home features that make daily life easier. The team was incredibly supportive throughout the entire process.",
    name: "James T.",
    context: "SDA Resident, Bayswater",
    rating: 5,
  },
  {
    quote:
      "As a support coordinator, I've been impressed with Innogreen's professionalism and commitment to their residents. They genuinely care about creating homes where people can thrive independently.",
    name: "Linda K.",
    context: "NDIS Support Coordinator",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      className="bg-brand-bg-alt py-20 lg:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 text-center">
          <h2
            id="testimonials-heading"
            className="text-3xl font-bold text-brand-slate sm:text-4xl"
          >
            What Our Residents &amp; Families Say
          </h2>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.name} delay={index * 0.1}>
              <div className="card-hover flex h-full flex-col rounded-xl border border-brand-border bg-white p-6 shadow-sm">
                {/* Stars */}
                <div className="flex gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <IoStarSharp
                      key={i}
                      className="h-5 w-5 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-brand-gray">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3 border-t border-brand-border pt-4">
                  <IoPersonCircleOutline className="h-10 w-10 text-brand-teal/40" />
                  <div>
                    <p className="text-sm font-semibold text-brand-slate">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-brand-gray-light">
                      {testimonial.context}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
