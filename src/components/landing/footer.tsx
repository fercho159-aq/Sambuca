"use client";

import { Instagram, Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

const footerLinks = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/menu", label: "Menú" },
  { href: "/sucursales", label: "Sucursales" },
  { href: "/reservar", label: "Reservar" },
];

export function Footer() {
  return (
    <footer className="bg-sambuca-bg">
      {/* Top gradient line */}
      <div className="h-[2px] gradient-line" />

      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Column 1: Logo + tagline */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative h-10 w-40">
              <Image
                src="/images/logo sambuca.png"
                alt="Sambuca Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-500 text-sm mt-3">
              La Pre-Fiesta en CDMX
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white text-sm font-semibold mb-4">Navegación</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-500 text-sm transition-colors duration-300 hover:text-sambuca-lime"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Social media */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white text-sm font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/bar_sambuca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors duration-300 hover:text-[#E4405F]"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://www.facebook.com/sambucasanangel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors duration-300 hover:text-[#1877F2]"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </a>
              <a
                href="https://www.tiktok.com/@bar_sambuca_cdmx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors duration-300 hover:text-[#00f2ea]"
                aria-label="TikTok"
              >
                <TikTokIcon className="h-[22px] w-[22px]" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 text-xs">
            &copy; {new Date().getFullYear()} Sambuca Bar. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
