import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-primary-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="T21 Academy Nigeria" width={44} height={44} className="rounded-full" />
              <div>
                <p className="text-white font-bold text-sm font-playfair">T21 Academy Nigeria</p>
                <p className="text-primary-gold text-[10px]">Part of T21 Global Group</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Workforce training, certification, and talent deployment platform. Authorised Certiport Examination Centre.
            </p>
            <div className="certiport-badge text-xs">Certiport Authorised Examination Centre</div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 font-playfair">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/pathways", label: "Career Pathways" },
                { href: "/certiport", label: "Certiport Exams" },
                { href: "/programmes", label: "Our Programmes" },
                { href: "/partners", label: "Partners & Funders" },
                { href: "/apply", label: "Apply Now" },
                { href: "/contact", label: "Contact Us" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-400 hover:text-primary-gold transition">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://www.t21services.com.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-gold transition inline-flex items-center gap-1"
                >
                  T21 Consultancy Nigeria <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 font-playfair">Training Areas</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Software & AI Engineering</li>
              <li>Data & Analytics</li>
              <li>Cybersecurity & IT</li>
              <li>Digital Work & BPO</li>
              <li>Digital Creative & Media</li>
              <li>Healthcare Administration</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 font-playfair">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:admin@t21services.com.ng" className="flex items-center gap-2 text-gray-400 hover:text-primary-gold transition">
                  <Mail className="w-4 h-4 text-primary-gold flex-shrink-0" />
                  admin@t21services.com.ng
                </a>
              </li>
              <li>
                <a href="tel:+2348163775394" className="flex items-center gap-2 text-gray-400 hover:text-primary-gold transition">
                  <Phone className="w-4 h-4 text-primary-gold flex-shrink-0" />
                  +234 816 377 5394
                </a>
              </li>
              <li>
                <a href="tel:+2349018095124" className="flex items-center gap-2 text-gray-400 hover:text-primary-gold transition">
                  <Phone className="w-4 h-4 text-primary-gold flex-shrink-0" />
                  +234 901 809 5124
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-primary-gold flex-shrink-0 mt-0.5" />
                <span>Kebbi House, CBD, Abuja &bull; Ado-Ekiti &bull; Liverpool, UK</span>
              </li>
              <li>
                <a href="https://www.t21services.com.ng" className="text-primary-gold text-xs hover:underline">
                  www.t21services.com.ng
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} T21 Academy Nigeria. Part of T21 Global Group. All rights reserved.</p>
          <p className="text-center">Authorised Certiport Examination Centre &bull; 3MTT Partner &bull; Government Training Delivery</p>
        </div>
      </div>
    </footer>
  );
}
