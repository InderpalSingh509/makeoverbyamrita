import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig, whatsappHref } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="container-width py-16 lg:py-20">
        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Image
              src="/logo/logo-nav.png"
              alt={siteConfig.name}
              width={653}
              height={502}
              className="h-16 w-auto"
            />

            <p className="mt-6 leading-8 text-gray-400">
              Elegant bridal, reception, engagement and party makeup,
              thoughtfully designed to enhance your natural beauty.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <h3 className="mb-6 text-xl">Navigation</h3>
            <ul className="space-y-4">
              {siteConfig.nav.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 transition hover:text-[#D4AF37]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xl">Contact</h3>
            <div className="space-y-5">
              <div className="flex gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-[#D4AF37]" aria-hidden />
                <a href={siteConfig.phone.href} className="text-gray-400 hover:text-[#D4AF37]">
                  {siteConfig.phone.display}
                </a>
              </div>

              <div className="flex gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-[#D4AF37]" aria-hidden />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="break-all text-gray-400 hover:text-[#D4AF37]"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#D4AF37]" aria-hidden />
                <span className="text-gray-400">{siteConfig.location.display}</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-6 text-xl">Follow</h3>
            <div className="flex gap-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on Instagram"
                className="glass hover-lift flex h-12 w-12 items-center justify-center rounded-full"
              >
                <FaInstagram size={18} aria-hidden />
              </a>

              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="glass hover-lift flex h-12 w-12 items-center justify-center rounded-full"
              >
                <FaWhatsapp size={18} aria-hidden />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <p>Designed with care for timeless beauty.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
