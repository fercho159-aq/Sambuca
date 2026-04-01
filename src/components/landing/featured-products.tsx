"use client";

import Image from "next/image";
import Link from "next/link";

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

export function FeaturedProducts() {
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
            <Link
              key={product.name}
              href="/menu"
              className="group block"
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
            </Link>
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
    </section>
  );
}
