"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/menu", label: "Menú" },
  { href: "/sucursales", label: "Sucursales" },
];

export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "w-full fixed top-0 left-0 z-50 transition-all duration-300",
        hasScrolled
          ? "bg-sambuca-bg/95 backdrop-blur-sm shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <div className="flex justify-between items-center px-4 md:px-8 py-3">
        <Link href="/" className="relative h-10 w-40 md:h-12 md:w-48">
          <Image
            src="/images/logo sambuca.png"
            alt="Sambuca Logo"
            fill
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-sans text-sm font-medium tracking-wide transition-colors duration-300",
                pathname === link.href
                  ? "text-sambuca-lime"
                  : "text-white hover:text-sambuca-lime"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/reservar"
            className="bg-sambuca-lime text-sambuca-bg font-semibold text-sm px-6 py-2.5 rounded-md transition-all duration-300 hover:bg-sambuca-purple hover:text-white"
          >
            Reservar
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 text-white hover:text-sambuca-lime transition-colors">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-sambuca-bg border-l border-sambuca-surface-light w-72"
            >
              <SheetHeader>
                <SheetTitle className="sr-only">Menú de Navegación</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col items-center justify-center h-full gap-8">
                <Link href="/">
                  <div className="relative h-14 w-52 mb-6">
                    <Image
                      src="/images/logo sambuca.png"
                      alt="Sambuca Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "font-sans text-lg font-medium tracking-wide transition-colors duration-300",
                      pathname === link.href
                        ? "text-sambuca-lime"
                        : "text-white hover:text-sambuca-lime"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/reservar"
                  className="bg-sambuca-lime text-sambuca-bg font-semibold text-lg px-10 py-3 rounded-md transition-all duration-300 hover:bg-sambuca-purple hover:text-white mt-4"
                >
                  Reservar
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="h-[2px] gradient-line" />
    </header>
  );
}
