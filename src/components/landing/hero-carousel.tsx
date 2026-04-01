"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import Link from "next/link"
import { Beer, Drumstick, ChevronLeft, ChevronRight } from 'lucide-react';
import { CiFries } from "react-icons/ci";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

const promotions = {
  0: [ // Domingo
    { title: "TRITÓN DE 4.8 LITROS", price: "$349", description: ["DE VODKA PREPARADOS, CERVEZA O NEON"], imageUrl: "/images/pato-shot.jpg", imageHint: "neon sign" },
    { title: "CHAROLA", price: "$850", description: ["24 LATAS DE CERVEZA 355 ML.", "1 ORDEN DE 6 ALITAS", "PAPAS"], imageUrl: "/images/DSC05226.JPG", imageHint: "cocktails bar" },
  ],
  1: [ // Lunes
    { title: "CHAROLA", price: "$650", description: ["24 LATAS DE CERVEZA 355 ML.", "1 ORDEN DE 6 ALITAS", "PAPAS"], imageUrl: "/images/DSC05226.JPG", imageHint: "cocktails bar" },
    { title: "COPAS DE 1L 2X1", price: "2X1", description: ["SAMBULOCAS, MOJITOS"], imageUrl: "/images/DSC05245.JPG", imageHint: "club party" },
    { title: "TRITÓN DE 4.8 LITROS", price: "$349", description: ["DE VODKA PREPARADOS, CERVEZA O NEON"], imageUrl: "/images/pato-shot.jpg", imageHint: "neon sign" },
  ],
  2: [ // Martes
    { title: "CHAROLA", price: "$650", description: ["24 LATAS DE CERVEZA 355 ML.", "1 ORDEN DE 6 ALITAS", "PAPAS"], imageUrl: "/images/DSC05226.JPG", imageHint: "cocktails bar" },
    { title: "TRITÓN DE 4.8 LITROS", price: "$349", description: ["DE VODKA PREPARADOS, CERVEZA O NEON"], imageUrl: "/images/pato-shot.jpg", imageHint: "neon sign" },
  ],
  3: [ // Miércoles
    { title: "CHAROLA", price: "$650", description: ["24 LATAS DE CERVEZA 355 ML.", "1 ORDEN DE 6 ALITAS", "PAPAS"], imageUrl: "/images/DSC05226.JPG", imageHint: "cocktails bar" },
    { title: "TRITÓN + ALIPAPAS", price: "$349", description: ["EN LA COMPRA DEL PRIMER TRITÓN,", "LLÉVATE UNA ORDEN DE ALIPAPAS."], imageUrl: "/images/pato-shot.jpg", imageHint: "neon sign" },
    { title: "FRAPPES Y COPAS 1L 2X1", price: "2X1", description: ["DE CHELA, SKY, CARIBE COOLER."], imageUrl: "/images/DSC05245.JPG", imageHint: "club party" },
  ],
  4: [ // Jueves
    { title: "CHAROLA", price: "$850", description: ["24 LATAS DE CERVEZA 355 ML.", "1 ORDEN DE 6 ALITAS", "PAPAS"], imageUrl: "/images/DSC05226.JPG", imageHint: "cocktails bar" },
    { title: "COPAS DE 1L 2X1", price: "2X1", description: ["SAMBULOCAS, MOJITOS"], imageUrl: "/images/DSC05245.JPG", imageHint: "club party" },
    { title: "TRITÓN CERVEZA/NEON/VODKA", price: "$399", description: ["4.8 LITROS"], imageUrl: "/images/pato-shot.jpg", imageHint: "neon sign" },
  ],
  5: [ // Viernes
    { title: "CHAROLA", price: "$850", description: ["24 LATAS DE CERVEZA 355 ML.", "1 ORDEN DE 6 ALITAS", "PAPAS"], imageUrl: "/images/DSC05226.JPG", imageHint: "cocktails bar" },
    { title: "TRITÓN CERVEZA/NEON/VODKA", price: "$399", description: ["4.8 LITROS"], imageUrl: "/images/pato-shot.jpg", imageHint: "neon sign" },
  ],
  6: [ // Sábado
    { title: "CHAROLA", price: "$850", description: ["24 LATAS DE CERVEZA 355 ML.", "1 ORDEN DE 6 ALITAS", "PAPAS"], imageUrl: "/images/DSC05226.JPG", imageHint: "cocktails bar" },
    { title: "TRITÓN CERVEZA/NEON/VODKA", price: "$399", description: ["4.8 LITROS"], imageUrl: "/images/pato-shot.jpg", imageHint: "neon sign" },
  ]
};

const dayNames = ["DOMINGO", "LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES", "SÁBADO"];

export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )
  const [todaysPromos, setTodaysPromos] = React.useState<(typeof promotions)[0] | null>(null);
  const [dayName, setDayName] = React.useState<string | null>(null);
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const today = new Date().getDay();
    setDayName(dayNames[today]);
    setTodaysPromos(promotions[today as keyof typeof promotions] || []);
  }, []);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  if (!todaysPromos || !dayName) {
    return (
      <section className="relative h-screen w-full overflow-hidden bg-sambuca-bg pattern-dots flex items-center justify-center">
        <h2 className="text-2xl font-headline tracking-widest text-sambuca-lime animate-pulse">Cargando promos...</h2>
      </section>
    );
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-sambuca-bg">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        setApi={setApi}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-screen ml-0">
          {todaysPromos.map((promo, index) => (
            <CarouselItem key={index} className="h-screen pl-0">
              <div className="w-full h-full relative">
                {/* Background image with fallback pattern */}
                <div className="absolute inset-0 pattern-dots">
                  <Image
                    src={promo.imageUrl}
                    alt={promo.description.join(' ')}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    unoptimized
                    data-ai-hint={promo.imageHint}
                  />
                </div>

                {/* Dark overlay for legibility */}
                <div className="absolute inset-0 bg-black/60 z-[1]" />
                <div className="absolute inset-0 bg-gradient-to-t from-sambuca-bg via-transparent to-sambuca-bg/40 z-[2]" />

                {/* Content - centered with flexbox */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
                  {/* Day badge - pill style */}
                  <span className="inline-block bg-sambuca-pink text-white text-xs font-semibold tracking-wider px-4 py-1.5 rounded-full mb-6 uppercase">
                    Promos de {dayName}
                  </span>

                  {/* Product name */}
                  <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-white tracking-wide mb-3" style={{ textShadow: '0 0 30px rgba(168, 200, 40, 0.3)' }}>
                    {promo.title}
                  </h1>

                  {/* Price */}
                  <p className="text-sambuca-lime font-headline text-4xl md:text-5xl lg:text-6xl mb-6">
                    {promo.price}
                  </p>

                  {/* Description lines */}
                  <div className="space-y-2 mb-8 max-w-2xl">
                    {promo.description.map((item, itemIndex) => {
                      const lowerCaseItem = item.toLowerCase();
                      let Icon = null;

                      if (lowerCaseItem.includes('cerveza')) {
                        Icon = Beer;
                      } else if (lowerCaseItem.includes('alitas')) {
                        Icon = Drumstick;
                      } else if (lowerCaseItem.includes('papas')) {
                        Icon = CiFries;
                      } else if (promo.title.toLowerCase().includes('tritón')) {
                        Icon = Beer;
                      }

                      return (
                        <div key={itemIndex} className="flex items-center justify-center gap-2 text-white/90">
                          {Icon && <Icon className="h-5 w-5 text-sambuca-lime flex-shrink-0" />}
                          <span className="text-sm md:text-base font-light">{item}</span>
                        </div>
                      )
                    })}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/menu"
                    className="border-2 border-sambuca-lime text-sambuca-lime px-8 py-3 rounded-md font-medium text-sm tracking-wide transition-all duration-300 hover:bg-sambuca-lime hover:text-sambuca-bg"
                  >
                    Ver Menú Completo
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation arrows */}
        <button
          onClick={() => api?.scrollPrev()}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/40 flex items-center justify-center text-white/70 transition-all duration-300 hover:border-sambuca-purple hover:text-sambuca-purple hover:bg-sambuca-purple/10"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>
        <button
          onClick={() => api?.scrollNext()}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/40 flex items-center justify-center text-white/70 transition-all duration-300 hover:border-sambuca-purple hover:text-sambuca-purple hover:bg-sambuca-purple/10"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                current === i
                  ? "bg-sambuca-lime w-6"
                  : "bg-white/40 hover:bg-white/60"
              )}
            />
          ))}
        </div>
      </Carousel>
    </section>
  )
}
