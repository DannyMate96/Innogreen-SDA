"use client";

import AnimatedSection from "@/components/AnimatedSection";
import {
  IoDocumentTextOutline,
  IoShieldCheckmarkOutline,
  IoAlertCircleOutline,
  IoMedkitOutline,
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
} from "react-icons/io5";

export default function PoliciesContent() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-teal to-brand-green py-24 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="mb-6 text-center font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Feedback, Complaints, Incident and Privacy Policy
            </h1>
            <p className="text-center text-lg text-white/90 sm:text-xl">
              At Innogreen, transparency and trust matter. We are committed to
              protecting your privacy and providing excellent service.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Feedback & Complaints */}
        <AnimatedSection className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-teal/10">
              <IoDocumentTextOutline className="h-6 w-6 text-brand-teal" />
            </div>
            <h2 className="font-heading text-3xl font-bold text-brand-slate">
              Feedback & Complaints
            </h2>
          </div>
          <div className="space-y-4 text-brand-gray">
            <p className="text-lg leading-relaxed">
              Innogreen welcomes feedback to improve service quality. We value
              your input and are committed to addressing any concerns you may
              have.
            </p>
            <p className="leading-relaxed">
              Complaints are accepted via written correspondence, email, phone,
              or anonymously. You can submit feedback or complaints through our
              online form.
            </p>
            <a
              href="https://forms.office.com/Pages/ResponsePage.aspx?id=LnAH2hifXEifCtrHG2Cua2Zml3B_66hLotLpEsfOwcBURVY4WTlPWURSNklMQTc5MVgwSVNXMk1YMSQlQCN0PWcu"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-teal px-6 py-3 font-medium text-white transition-all hover:bg-brand-teal-dark hover:shadow-lg"
            >
              <IoDocumentTextOutline className="h-5 w-5" />
              Submit Feedback or Complaint
            </a>
          </div>
        </AnimatedSection>

        {/* Privacy Policy */}
        <AnimatedSection className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10">
              <IoShieldCheckmarkOutline className="h-6 w-6 text-brand-green" />
            </div>
            <h2 className="font-heading text-3xl font-bold text-brand-slate">
              Privacy Management
            </h2>
          </div>
          <div className="space-y-4 text-brand-gray">
            <p className="text-lg font-semibold leading-relaxed text-brand-slate">
              Privacy matters to us and we know it matters to you.
            </p>
            <p className="leading-relaxed">
              We collect personal information including name, contact details,
              and device-specific data to provide our services effectively.
            </p>
            <div className="rounded-xl border border-brand-border bg-brand-bg-alt p-6">
              <h3 className="mb-3 font-heading text-xl font-semibold text-brand-slate">
                Information We Collect
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal"></span>
                  <span>
                    Personal details such as name, email, and contact
                    information provided directly by you
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal"></span>
                  <span>
                    Information gathered through service usage and interactions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal"></span>
                  <span>Device-specific data when using our digital services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal"></span>
                  <span>
                    Information from external sources when necessary for service
                    delivery
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-brand-border bg-brand-bg-alt p-6">
              <h3 className="mb-3 font-heading text-xl font-semibold text-brand-slate">
                How We Use Your Information
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green"></span>
                  <span>
                    Administration and management of your account and services
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green"></span>
                  <span>
                    Communication regarding your services and important updates
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green"></span>
                  <span>Service delivery and support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green"></span>
                  <span>
                    Improving our services and ensuring quality standards
                  </span>
                </li>
              </ul>
            </div>
            <p className="leading-relaxed">
              You have the right to request access to the personal information
              we hold about you. Privacy complaints are acknowledged promptly,
              with a 30-day resolution target.
            </p>
          </div>
        </AnimatedSection>

        {/* Incident Reporting */}
        <AnimatedSection className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10">
              <IoAlertCircleOutline className="h-6 w-6 text-brand-blue" />
            </div>
            <h2 className="font-heading text-3xl font-bold text-brand-slate">
              Incident Reporting
            </h2>
          </div>
          <div className="space-y-4 text-brand-gray">
            <p className="leading-relaxed">
              Customers can submit incident reports by contacting us directly.
              Innogreen prioritizes response and resolution focused on safety
              and satisfaction.
            </p>
            <p className="leading-relaxed">
              We take all incidents seriously and work promptly to investigate
              and resolve matters to ensure the safety and wellbeing of all
              participants and staff.
            </p>
            <a
              href="https://forms.cloud.microsoft/r/R3dePXfPmH"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-blue px-6 py-3 font-medium text-white transition-all hover:bg-brand-blue/90 hover:shadow-lg"
            >
              <IoAlertCircleOutline className="h-5 w-5" />
              Submit Incident Report
            </a>
          </div>
        </AnimatedSection>

        {/* Conflict of Interest */}
        <AnimatedSection className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-teal/10">
              <IoShieldCheckmarkOutline className="h-6 w-6 text-brand-teal" />
            </div>
            <h2 className="font-heading text-3xl font-bold text-brand-slate">
              Conflict of Interest
            </h2>
          </div>
          <div className="space-y-4 text-brand-gray">
            <p className="leading-relaxed">
              Workers must report any potential conflicts of interest
              immediately to management. We maintain high ethical standards and
              transparency in all our operations.
            </p>
          </div>
        </AnimatedSection>

        {/* Infection Control */}
        <AnimatedSection className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10">
              <IoMedkitOutline className="h-6 w-6 text-brand-green" />
            </div>
            <h2 className="font-heading text-3xl font-bold text-brand-slate">
              Infection Control
            </h2>
          </div>
          <div className="space-y-4 text-brand-gray">
            <p className="leading-relaxed">
              Our infection control policy addresses the prevention of germ
              transmission across all our services. We follow best practices to
              ensure the health and safety of all participants, staff, and
              visitors.
            </p>
          </div>
        </AnimatedSection>

        {/* Download Policies */}
        <AnimatedSection className="mb-16">
          <div className="mb-6">
            <h2 className="font-heading text-3xl font-bold text-brand-slate">
              Policy Documents
            </h2>
            <p className="mt-2 text-brand-gray">
              Download our detailed policy documents for your reference:
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="/Feedback+and+complaint+(easy+read).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-brand-border bg-white p-4 transition-all hover:border-brand-teal hover:shadow-lg"
            >
              <IoDocumentTextOutline className="h-8 w-8 shrink-0 text-brand-teal" />
              <div>
                <p className="font-medium text-brand-slate">
                  Feedback & Complaint Policy
                </p>
                <p className="text-sm text-brand-gray">Easy-Read Version (PDF)</p>
              </div>
            </a>
            <a
              href="/Privacy+and+confidentiality+policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-brand-border bg-white p-4 transition-all hover:border-brand-teal hover:shadow-lg"
            >
              <IoDocumentTextOutline className="h-8 w-8 shrink-0 text-brand-green" />
              <div>
                <p className="font-medium text-brand-slate">
                  Privacy & Confidentiality
                </p>
                <p className="text-sm text-brand-gray">Full Policy (PDF)</p>
              </div>
            </a>
            <a
              href="/Conflict+of+interest+(easy+read).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-brand-border bg-white p-4 transition-all hover:border-brand-teal hover:shadow-lg"
            >
              <IoDocumentTextOutline className="h-8 w-8 shrink-0 text-brand-blue" />
              <div>
                <p className="font-medium text-brand-slate">
                  Conflict of Interest
                </p>
                <p className="text-sm text-brand-gray">Easy-Read Version (PDF)</p>
              </div>
            </a>
            <a
              href="/Incident+management+(easy+read).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-brand-border bg-white p-4 transition-all hover:border-brand-teal hover:shadow-lg"
            >
              <IoDocumentTextOutline className="h-8 w-8 shrink-0 text-brand-teal" />
              <div>
                <p className="font-medium text-brand-slate">
                  Incident Management
                </p>
                <p className="text-sm text-brand-gray">Easy-Read Version (PDF)</p>
              </div>
            </a>
            <a
              href="/Infection+control+(easy+read).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-brand-border bg-white p-4 transition-all hover:border-brand-teal hover:shadow-lg"
            >
              <IoDocumentTextOutline className="h-8 w-8 shrink-0 text-brand-green" />
              <div>
                <p className="font-medium text-brand-slate">Infection Control</p>
                <p className="text-sm text-brand-gray">Easy-Read Version (PDF)</p>
              </div>
            </a>
          </div>
        </AnimatedSection>

        {/* Contact Information */}
        <AnimatedSection>
          <div className="rounded-2xl bg-gradient-to-br from-brand-teal to-brand-green p-8 text-white">
            <h2 className="mb-6 font-heading text-2xl font-bold">
              Questions About Our Policies?
            </h2>
            <p className="mb-6 text-white/90">
              If you have any questions about our policies, need to access your
              personal information, or want to make a privacy complaint, please
              contact us:
            </p>
            <div className="space-y-3">
              <a
                href="tel:1800123000"
                className="flex items-center gap-3 transition-opacity hover:opacity-80"
              >
                <IoCallOutline className="h-5 w-5" />
                <span className="font-medium">1800 123 000</span>
              </a>
              <a
                href="mailto:info@innogreen.net.au"
                className="flex items-center gap-3 transition-opacity hover:opacity-80"
              >
                <IoMailOutline className="h-5 w-5" />
                <span className="font-medium">info@innogreen.net.au</span>
              </a>
              <div className="flex items-start gap-3">
                <IoLocationOutline className="mt-0.5 h-5 w-5 shrink-0" />
                <span className="font-medium">
                  C1A 15/212 Carr Place, Leederville WA 6007
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
