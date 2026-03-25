import Link from "next/link";
import Image from "next/image";
import {
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
  IoTimeOutline,
  IoLogoFacebook,
  IoLogoLinkedin,
} from "react-icons/io5";

const services = [
  { href: "/smart-homes", label: "Smart Homes" },
  { href: "/sda", label: "Specialist Disability Accommodation" },
  { href: "/smart-homes", label: "Property Management" },
  { href: "/smart-homes", label: "Technology Installation" },
];

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/policies", label: "Policies" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-slate text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About */}
          <div>
            <Link
              href="/"
              className="mb-4 flex items-center"
              aria-label="Innogreen - Home"
            >
              <Image
                src="/images/Innogreen Homes text only.png"
                alt="Innogreen Homes"
                width={180}
                height={48}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Smart, secure and accessible homes in Perth. Licensed property
              management and registered NDIS provider.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/Innogreen.perth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-brand-teal"
                aria-label="Follow us on Facebook"
              >
                <IoLogoFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/innogreenhomes/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-brand-teal"
                aria-label="Follow us on LinkedIn"
              >
                <IoLogoLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 transition-colors hover:text-brand-teal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 transition-colors hover:text-brand-teal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:1800123000"
                  className="flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-brand-teal"
                >
                  <IoCallOutline className="h-4 w-4 shrink-0" />
                  1800 123 000
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@innogreen.net.au"
                  className="flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-brand-teal"
                >
                  <IoMailOutline className="h-4 w-4 shrink-0" />
                  info@innogreen.net.au
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <IoLocationOutline className="h-4 w-4 shrink-0" />
                C1A 15/212 Carr Place, Leederville WA 6007
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <IoTimeOutline className="h-4 w-4 shrink-0" />
                Mon–Fri: 9–5 PM | Sat: 9–1 PM
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-3 text-center text-xs text-gray-400 sm:flex-row sm:justify-between sm:text-left">
            <p>&copy; {new Date().getFullYear()} Innogreen. All rights reserved.</p>
            <p>
              NDIS Provider No: 4050064987 | Real Estate Licencee &amp; Director
              – Arian David Gorjy (RA72601)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
