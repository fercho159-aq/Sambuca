"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { Beer, Drumstick, Beef } from 'lucide-react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
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

const descriptionIcons = [Beer, Drumstick, Beef];

const dayNames = ["DOMINGO", "LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES", "SÁBADO"];

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
        <h2 className="text-4xl font-headline tracking-widest text-neon-pink text-glow animate-pulse">CARGANDO PROMOS...</h2>
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
            const titleLength = promo.title.length;
            const titleSizeClass = titleLength > 20 ? 'text-5xl md:text-7xl lg:text-8xl' : 'text-6xl md:text-8xl lg:text-9xl';

            return (
              <CarouselItem key={index} className="h-screen pl-0">
                <div className="w-full h-full relative">
                  {/* Imagen de fondo */}
                  <div className="absolute inset-0">
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
                    
                    <div className="mt-2 text-lg md:text-xl lg:text-2xl font-light max-w-3xl drop-shadow-lg space-y-2">
                      {promo.description.map((item, itemIndex) => {
                        const lowerCaseTitle = promo.title.toLowerCase();
                        let Icon = null;
                        if (lowerCaseTitle.includes('charola')) {
                            Icon = descriptionIcons[itemIndex % descriptionIcons.length];
                        } else if (lowerCaseTitle.includes('tritón')) {
                            Icon = Beer;
                        }
                        
                        return (
                          <div key={itemIndex} className="flex items-center justify-center gap-3">
                            {Icon && <Icon className="h-6 w-6 text-neon-yellow" />}
                            <span>{item}</span>
                          </div>
                        )
                      })}
                    </div>
                    
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
