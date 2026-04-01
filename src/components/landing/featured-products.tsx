"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Facebook } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const locations = [
  { name: "San Ángel", url: "https://facebook.com/sambucasanangel" },
  { name: "Copilco", url: "https://facebook.com/profile.php?id=100080317183250" },
  { name: "Cuauhtémoc", url: "https://facebook.com/profile.php?id=100071399785044" },
];

const featuredProducts = [
  {
    name: "Neon Drinks",
    description: "Bebidas de 1L que encienden tu noche",
    price: "Desde $120",
    image: "/images/menu/Neon Drinks - 1L.png",
    category: "Bebidas",
  },
  {
    name: "Neon con Patito",
    description: "Incluye patito de regalo",
    price: "$130",
    image: "/images/menu/Neon Drinks - Con Patito.png",
    category: "Bebidas",
  },
  {
    name: "Charola",
    description: "24 cervezas + alitas + papas",
    price: "Desde $650",
    image: "/images/menu/Charola de Cerveza con papas y alitas.png",
    category: "Promociones",
  },
  {
    name: "Tritón 4.8L",
    description: "Vodka o Cerveza + Alipapas",
    price: "$349",
    image: "/images/menu/Tritón 4.8L (Vodka o Cerveza) + Alipapas.png",
    category: "Promociones",
  },
  {
    name: "Michelada Especial",
    description: "1.25L con gomitas, mango, cereza y más",
    price: "$120",
    image: "/images/menu/Michelada Especial con gomitas.png",
    category: "Bebidas",
  },
  {
    name: "Baby Vodka",
    description: "10 Shots: mango, fresa, cereza, tamarindo",
    price: "$300",
    image: "/images/menu/Sambupatos - Baby Vodka (10 Shots).png",
    category: "Sambupatos",
  },
  {
    name: "Sambulocas & Mojitos",
    description: "Copas de 1L al 2x1",
    price: "2x1",
    image: "/images/menu/Sambulocas Mojitos.png",
    category: "Promociones",
  },
  {
    name: "Alitas con Papas",
    description: "Bañadas en tu salsa favorita",
    price: "$180",
    image: "/images/menu/Alitas con papas.png",
    category: "Alimentos",
  },
];

type Product = (typeof featuredProducts)[number];

export function FeaturedProducts() {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <section className="py-20 px-4 bg-sambuca-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-headline tracking-wider text-white inline-block pb-3 relative">
            Productos Destacados
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-sambuca-lime rounded-full" />
          </h2>
          <p className="text-sm text-gray-400 mt-4 tracking-wide">
            Lo más pedido en Sambuca
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <button
              key={product.name}
              onClick={() => setSelected(product)}
              className="group block text-left"
            >
              <div className="relative bg-sambuca-surface-light rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-sambuca-lime/10 hover:-translate-y-1">
                {/* Product image */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  {/* Category badge */}
                  <span className="absolute top-2 left-2 bg-sambuca-pink/90 text-white text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded-full uppercase">
                    {product.category}
                  </span>
                  {/* Price badge */}
                  <span className="absolute top-2 right-2 bg-sambuca-bg/80 backdrop-blur-sm text-sambuca-lime text-xs font-bold px-2 py-0.5 rounded-full">
                    {product.price}
                  </span>
                </div>

                {/* Info */}
                <div className="p-3 md:p-4">
                  <h3 className="text-white font-semibold text-sm md:text-base leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm mt-1 line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/menu"
            className="inline-block border-2 border-sambuca-lime text-sambuca-lime px-8 py-3 rounded-md font-medium text-sm tracking-wide transition-all duration-300 hover:bg-sambuca-lime hover:text-sambuca-bg"
          >
            Ver Menú Completo
          </Link>
        </div>
      </div>

      {/* Product Detail Modal */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="bg-sambuca-surface border-sambuca-surface-light max-w-md p-0 overflow-hidden">
          {selected && (
            <>
              {/* Product image */}
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={selected.image}
                  alt={selected.name}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-3 right-3 bg-sambuca-bg/80 backdrop-blur-sm text-sambuca-lime text-sm font-bold px-3 py-1 rounded-full">
                  {selected.price}
                </span>
              </div>

              {/* Content */}
              <div className="px-6 pb-6 pt-2">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-headline tracking-wider text-white">
                    {selected.name}
                  </DialogTitle>
                  <DialogDescription className="text-gray-400 text-sm mt-1">
                    {selected.description}
                  </DialogDescription>
                </DialogHeader>

                {/* Shot de bienvenida CTA */}
                <div className="mt-6 bg-sambuca-surface-light rounded-lg p-4 text-center">
                  <p className="text-white font-headline text-lg tracking-wider mb-1">
                    Síguenos y pide tu{" "}
                    <span className="text-sambuca-pink">Shot de Bienvenida</span>
                  </p>
                  <p className="text-gray-500 text-xs mb-4">
                    Síguenos en Facebook, llega y recibe un{" "}
                    <span className="text-sambuca-lime">shot gratis</span>
                  </p>

                  <div className="flex flex-col gap-2">
                    {locations.map((loc) => (
                      <a
                        key={loc.name}
                        href={loc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-sambuca-purple hover:bg-sambuca-purple/80 text-white px-4 py-2.5 rounded-md font-medium text-sm transition-all duration-300"
                      >
                        <Facebook className="w-4 h-4" />
                        Sambuca {loc.name}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Link to full menu */}
                <Link
                  href="/menu"
                  className="block text-center text-sambuca-lime text-xs mt-4 hover:underline"
                  onClick={() => setSelected(null)}
                >
                  Ver menú completo
                </Link>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
