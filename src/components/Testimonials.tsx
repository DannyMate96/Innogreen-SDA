"use client";

import AnimatedSection from "./AnimatedSection";
import { IoStarSharp } from "react-icons/io5";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Innogreen/@-31.937,115.842,17z/data=!4m8!3m7!1s0x0:0x0!8m2!3d-31.937!4d115.842!9m1!1b1";

const testimonials = [
  {
    quote:
      "Matt arrived on time and quickly installed the door bell. He was very good and patient explaining how it all worked and he also submitted the required paperwork for the WA Seniors Card Safety & Security Rebate Application.",
    name: "Linda O'Brien",
    context: "5 months ago",
    rating: 5,
    initials: "L",
    color: "bg-gray-500",
  },
  {
    quote:
      "Great product and amazing service. Matt knows his stuff and made it all very easy and a quick installation. Highly recommend.",
    name: "Pauline English",
    context: "5 months ago · 4 reviews",
    rating: 5,
    initials: "P",
    color: "bg-green-600",
  },
  {
    quote:
      "We were very impressed with the service provided by Innogreen this morning. The doorbell was installed quickly and we were taken through the operating steps by a very patient Matt! He then proceeded to help us complete the necessary forms to claim our seniors security rebate, he then emailed them off for us! Great friendly service, highly recommend! Thanks Matt!",
    name: "Kerry Costello",
    context: "Local Guide · 1 year ago",
    rating: 5,
    initials: "K",
    color: "bg-blue-600",
  },
];

function GoogleLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

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
            What Our Customers Say
          </h2>

          {/* Google aggregate rating badge */}
          <div className="mt-6 inline-flex flex-col items-center gap-2 rounded-2xl border border-brand-border bg-white px-8 py-4 shadow-sm sm:flex-row sm:gap-4">
            <GoogleLogo />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-brand-slate">5.0</span>
              <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IoStarSharp key={i} className="h-5 w-5 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <span className="text-sm text-brand-gray">223 reviews</span>
            </div>
            <span className="hidden h-4 w-px bg-brand-border sm:block" />
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-brand-teal hover:underline"
            >
              See all reviews on Google
            </a>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.name + index} delay={index * 0.1}>
              <div className="card-hover flex h-full flex-col rounded-xl border border-brand-border bg-white p-6 shadow-sm">
                {/* Google logo + stars */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <IoStarSharp
                        key={i}
                        className="h-5 w-5 text-amber-400"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <GoogleLogo />
                </div>

                {/* Quote */}
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-brand-gray">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3 border-t border-brand-border pt-4">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${testimonial.color}`}
                    aria-hidden="true"
                  >
                    {testimonial.initials}
                  </div>
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

        {/* Write a review CTA */}
        <AnimatedSection delay={0.3}>
          <div className="mt-10 text-center">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-brand-border bg-white px-6 py-3 text-sm font-semibold text-brand-slate shadow-sm transition-all hover:border-brand-teal hover:text-brand-teal"
            >
              <GoogleLogo />
              Write a Review on Google
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
