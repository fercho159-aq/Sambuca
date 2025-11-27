"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import Link from "next/link"
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images"
import { Button } from "@/components/ui/button"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Skeleton } from "../ui/skeleton"

export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  
  const [slides, setSlides] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const slideData = [
       {
        image: PlaceHolderImages.find(img => img.id === 'hero1'),
        title: "ENCIENDE",
        subtitle: "LA FIESTA",
        cta: "VER MENÚ",
        ctaLink: "/menu",
        highlight: "Tritones",
      },
      {
        image: PlaceHolderImages.find(img => img.id === 'hero2'),
        title: "SABOR",
        subtitle: "EXPLOSIVO",
        cta: "PROMOCIONES",
        ctaLink: "#promos",
        highlight: "Patitos",
      },
      {
        image: PlaceHolderImages.find(img => img.id === 'hero3'),
        title: "NOCHES",
        subtitle: "INOLVIDABLES",
        cta: "RESERVAR",
        ctaLink: "/reservar",
        highlight: "Neón",
      },
    ];
    setSlides(slideData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
       <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
         <p className="text-white text-glow animate-pulse text-2xl font-headline">Cargando...</p>
      </section>
    )
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="w-full h-full relative">
                <Image
                  src={slide.image?.imageUrl || `https://picsum.photos/seed/${index+1}/1920/1080`}
                  alt={slide.image?.description || `Slide ${index+1}`}
                  fill
                  className="object-cover"
                  data-ai-hint={slide.image?.imageHint}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/60" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 p-4">
                  <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase">
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-glow">
                      {slide.title}
                    </span>
                    <span className="block">{slide.subtitle}</span>
                  </h1>
                  <p className="mt-4 text-xl md:text-2xl font-light max-w-2xl">
                    El lugar de los <span className="text-neon-yellow font-bold">{slide.highlight}</span>, los shots y las mejores promos de la CDMX.
                  </p>
                  <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/80 text-primary-foreground font-headline tracking-widest text-xl rounded-none box-glow transition-all hover:scale-105">
                    <Link href={slide.ctaLink}>{slide.cta}</Link>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
