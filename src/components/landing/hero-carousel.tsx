"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

const promotions = {
  0: [ // Domingo
    { title: "Tritón de 4.8 Litros", price: "$349", description: "De VODKA PREPARADOS, CERVEZA o NEON", imageId: "hero1" },
    { title: "Charola", price: "$850", description: "+ 24 LATAS DE CERVEZA 355 ML. + 1 ORDEN DE 6 ALITAS + PAPAS", imageId: "hero2" },
  ],
  1: [ // Lunes
    { title: "Charola", price: "$650", description: "+ 24 LATAS DE CERVEZA 355 ML. + 1 ORDEN DE 6 ALITAS + PAPAS", imageId: "hero2" },
    { title: "Copas de 1L 2x1", price: "2x1", description: "Sambulocas, Mojitos", imageId: "hero3" },
    { title: "Tritón de 4.8 Litros", price: "$349", description: "De VODKA PREPARADOS, CERVEZA o NEON", imageId: "hero1" },
  ],
  2: [ // Martes
    { title: "Charola", price: "$650", description: "+ 24 LATAS DE CERVEZA 355 ML. + 1 ORDEN DE 6 ALITAS + PAPAS", imageId: "hero2" },
    { title: "Tritón de 4.8 Litros", price: "$349", description: "De VODKA PREPARADOS, CERVEZA o NEON", imageId: "hero1" },
  ],
  3: [ // Miércoles
    { title: "Charola", price: "$650", description: "+ 24 LATAS DE CERVEZA 355 ML. + 1 ORDEN DE 6 ALITAS + PAPAS", imageId: "hero2" },
    { title: "Tritón + Alipapas", price: "$349", description: "En la compra del primer tritón, llévate una orden de Alipapas.", imageId: "hero1" },
    { title: "Frappes y Copas 1L 2x1", price: "2x1", description: "De Chela, Sky, Caribe Cooler.", imageId: "hero3" },
  ],
  4: [ // Jueves
    { title: "Charola", price: "$850", description: "+ 24 LATAS DE CERVEZA 355 ML. + 1 ORDEN DE 6 ALITAS + PAPAS", imageId: "hero2" },
    { title: "Copas de 1L 2x1", price: "2x1", description: "Sambulocas, Mojitos", imageId: "hero3" },
    { title: "Tritón Cerveza/Neon/Vodka", price: "$399", description: "4.8 Litros", imageId: "hero1" },
  ],
  5: [ // Viernes
    { title: "Charola", price: "$850", description: "+ 24 LATAS DE CERVEZA 355 ML. + 1 ORden de 6 ALITAS + PAPAS", imageId: "hero2" },
    { title: "Tritón Cerveza/Neon/Vodka", price: "$399", description: "4.8 Litros", imageId: "hero1" },
  ],
  6: [ // Sábado
    { title: "Charola", price: "$850", description: "+ 24 LATAS DE CERVEZA 355 ML. + 1 ORDEN DE 6 ALITAS + PAPAS", imageId: "hero2" },
    { title: "Tritón Cerveza/Neon/Vodka", price: "$399", description: "4.8 Litros", imageId: "hero1" },
  ]
};

const dayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )
  const [todaysPromos, setTodaysPromos] = React.useState<typeof promotions[0] | null>(null);
  const [dayName, setDayName] = React.useState<string | null>(null);

  React.useEffect(() => {
    const today = new Date().getDay();
    setDayName(dayNames[today]);
    setTodaysPromos(promotions[today as keyof typeof promotions] || []);
  }, []);

  if (!todaysPromos || !dayName) {
    return (
      <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
        <h2 className="text-4xl font-headline tracking-widest text-neon-pink text-glow animate-pulse">Cargando promos...</h2>
      </section>
    );
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-screen ml-0">
          {todaysPromos.map((promo, index) => {
            const image = PlaceHolderImages.find(img => img.id === promo.imageId) || PlaceHolderImages[0];
            const titleLength = promo.title.length;
            const titleSizeClass = titleLength > 20 ? 'text-5xl md:text-7xl lg:text-8xl' : 'text-6xl md:text-8xl lg:text-9xl';

            return (
              <CarouselItem key={index} className="h-screen pl-0">
                <div className="w-full h-full relative">
                  {/* Imagen de fondo */}
                  <div className="absolute inset-0">
                    <Image
                      src={image?.imageUrl || `https://picsum.photos/seed/${index+1}/1920/1080`}
                      alt={image?.description || `Slide ${index+1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      unoptimized
                    />
                  </div>

                  {/* Overlays */}
                  <div className="absolute inset-0 bg-black/70 z-[1]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-[2]" />

                  {/* Contenido */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 p-4">
                    <h2 className="text-4xl md:text-5xl font-headline uppercase tracking-widest mb-4">
                        <span className="text-neon-blue text-glow">PROMOS DE {dayName.toUpperCase()}</span>
                    </h2>
                    <h1 className={cn("font-black tracking-tighter uppercase mb-2", titleSizeClass)}>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 drop-shadow-[0_0_15px_rgba(255,0,110,0.6)]">
                        {promo.title}
                        </span>
                    </h1>

                    <p className="font-mono text-5xl md:text-6xl text-neon-yellow text-glow mb-6">
                        {promo.price}
                    </p>
                    
                    <p className="mt-2 text-lg md:text-xl lg:text-2xl font-light max-w-3xl drop-shadow-lg">
                        {promo.description}
                    </p>
                    
                  </div>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
