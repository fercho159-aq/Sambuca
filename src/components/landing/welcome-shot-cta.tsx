"use client";

import { Facebook } from "lucide-react";

const locations = [
  {
    name: "Sambuca San Ángel",
    url: "https://facebook.com/sambucasanangel",
  },
  {
    name: "Sambuca Copilco",
    url: "https://facebook.com/profile.php?id=100080317183250",
  },
  {
    name: "Sambuca Cuauhtémoc",
    url: "https://facebook.com/profile.php?id=100071399785044",
  },
];

export function WelcomeShotCta() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-sambuca-surface via-sambuca-bg to-sambuca-surface overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sambuca-purple/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Accent line */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-[2px] w-10 bg-sambuca-lime rounded-full" />
          <span className="text-sambuca-lime text-xs font-semibold tracking-[0.25em] uppercase">
            Shot Gratis
          </span>
          <span className="h-[2px] w-10 bg-sambuca-lime rounded-full" />
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline tracking-wider text-white leading-tight">
          Síguenos y pide tu{" "}
          <span className="text-sambuca-pink">Shot de Bienvenida</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm md:text-base mt-5 max-w-xl mx-auto leading-relaxed">
          Síguenos en Facebook, llega a cualquier sucursal y recibe un{" "}
          <span className="text-sambuca-lime font-medium">shot gratis</span>{" "}
          de bienvenida.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {locations.map((loc) => (
            <a
              key={loc.name}
              href={loc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-sambuca-purple hover:bg-sambuca-purple/80 text-white px-6 py-3 rounded-md font-medium text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-sambuca-purple/30 w-full sm:w-auto justify-center"
            >
              <Facebook className="w-4 h-4" />
              {loc.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
