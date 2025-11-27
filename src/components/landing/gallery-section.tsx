import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

export function GallerySection() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery'));
  
  if (galleryImages.length === 0) {
    // This is a fallback in case no gallery images are defined
    return null;
  }

  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-glow-primary inline-block pb-2">
            Nuestra Galería
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Viviendo la experiencia neón.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] box-glow-primary">
              <Image src={galleryImages[0]?.imageUrl} alt={galleryImages[0]?.description} fill className="object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint={galleryImages[0]?.imageHint}/>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-square box-glow-accent">
               <Image src={galleryImages[1]?.imageUrl} alt={galleryImages[1]?.description} fill className="object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint={galleryImages[1]?.imageHint}/>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="relative rounded-xl overflow-hidden aspect-square box-glow-accent">
               <Image src={galleryImages[2]?.imageUrl} alt={galleryImages[2]?.description} fill className="object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint={galleryImages[2]?.imageHint}/>
            </div>
             <div className="relative rounded-xl overflow-hidden aspect-[4/3] box-glow-primary">
              <Image src={galleryImages[3]?.imageUrl} alt={galleryImages[3]?.description} fill className="object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint={galleryImages[3]?.imageHint}/>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] box-glow-primary">
              <Image src={galleryImages[4]?.imageUrl} alt={galleryImages[4]?.description} fill className="object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint={galleryImages[4]?.imageHint}/>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-square box-glow-accent">
              <Image src={galleryImages[5]?.imageUrl} alt={galleryImages[5]?.description} fill className="object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint={galleryImages[5]?.imageHint}/>
            </div>
          </div>
           <div className="grid gap-4">
            <div className="relative rounded-xl overflow-hidden aspect-square box-glow-accent">
              <Image src={galleryImages[6]?.imageUrl} alt={galleryImages[6]?.description} fill className="object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint={galleryImages[6]?.imageHint}/>
            </div>
             <div className="relative rounded-xl overflow-hidden aspect-[4/3] box-glow-primary">
              <Image src={galleryImages[7]?.imageUrl} alt={galleryImages[7]?.description} fill className="object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint={galleryImages[7]?.imageHint}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
