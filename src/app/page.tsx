"use client";

import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { LocationsSection } from "@/components/landing/locations-section";
import { HeroCarousel } from "@/components/landing/hero-carousel";

export default function Home() {

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-pink-500 selection:text-white">
      <Header />
      <main>
        <HeroCarousel />
        <LocationsSection />
      </main>
      <Footer />
    </div>
  );
}
