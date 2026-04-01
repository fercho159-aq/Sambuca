"use client";

import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { LocationsSection } from "@/components/landing/locations-section";
import { HeroCarousel } from "@/components/landing/hero-carousel";
import { GallerySection } from "@/components/landing/gallery-section";
import { FeaturedProducts } from "@/components/landing/featured-products";
import { WelcomeShotCta } from "@/components/landing/welcome-shot-cta";

export default function Home() {
  return (
    <div className="bg-sambuca-bg min-h-screen text-white font-sans selection:bg-sambuca-purple selection:text-white">
      <Header />
      <main>
        <HeroCarousel />
        <FeaturedProducts />
        <WelcomeShotCta />
        <GallerySection />
        <LocationsSection />
      </main>
      <Footer />
    </div>
  );
}
