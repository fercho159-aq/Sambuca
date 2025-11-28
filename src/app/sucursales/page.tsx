import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { LocationsSection } from "@/components/landing/locations-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sucursales",
  description: "Encuentra tu Sambuca más cercano. Tenemos sucursales en San Ángel, Roma, Copilco y Cuauhtémoc. ¡Te esperamos para la pre-fiesta!",
};

export default function SucursalesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 md:pt-32">
        <LocationsSection />
      </main>
      <Footer />
    </div>
  );
}
