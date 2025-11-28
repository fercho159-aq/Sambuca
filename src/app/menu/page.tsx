import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { MenuSection } from "@/components/landing/menu-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menú y Promociones",
  description: "Explora nuestro menú de bebidas neón, cocteles, paquetes y comida. No te pierdas nuestras promociones diarias para la mejor pre-fiesta en Sambuca.",
};


export default function MenuPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 md:pt-32">
        <MenuSection />
      </main>
      <Footer />
    </div>
  );
}
