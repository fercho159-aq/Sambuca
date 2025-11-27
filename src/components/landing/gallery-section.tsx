import Image from "next/image";
import { cn } from "@/lib/utils";

const galleryImages = [
    {
      "id": "gallery1",
      "description": "A person holding a vibrant pink cocktail with a neon light in the background.",
      "imageUrl": "/images/DSC05244.JPG",
      "imageHint": "neon cocktail"
    },
    {
      "id": "gallery2",
      "description": "A group of friends laughing and cheering with drinks at a bar.",
      "imageUrl": "/images/DSC05225.JPG",
      "imageHint": "bar friends"
    },
    {
      "id": "gallery3",
      "description": "A close-up of a blue cocktail with a lime garnish, glowing under blue light.",
      "imageUrl": "/images/DSC04488 (1).JPG",
      "imageHint": "blue cocktail"
    },
    {
      "id": "gallery4",
      "description": "A DJ's hands on a mixer with a lively crowd dancing in the background.",
      "imageUrl": "/images/DSC05245.JPG",
      "imageHint": "DJ party"
    },
    {
      "id": "gallery5",
      "description": "A neon sign that says 'Good Vibes Only' illuminating a brick wall.",
      "imageUrl": "/images/DSC05296.JPG",
      "imageHint": "neon sign"
    },
    {
      "id": "gallery6",
      "description": "Two people clinking cocktail glasses in a toast at a dimly lit bar.",
      "imageUrl": "/images/DSC05343.JPG",
      "imageHint": "bar toast"
    },
    {
      "id": "gallery7",
      "description": "A delicious-looking plate of bar food, like wings or nachos, under warm light.",
      "imageUrl": "/images/DSC05226.JPG",
      "imageHint": "bar food"
    },
    {
      "id": "gallery8",
      "description": "The interior of a bar with people sitting at tables, with a vibrant, energetic atmosphere.",
      "imageUrl": "/images/DSC05339.JPG",
      "imageHint": "bar atmosphere"
    }
  ];

export function GallerySection() {
  if (galleryImages.length < 8) {
    // This is a fallback in case not enough gallery images are defined
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
            <div className="relative rounded-xl overflow-hidden box-glow-primary group">
              <Image src={galleryImages[0].imageUrl} alt={galleryImages[0].description} width={600} height={400} className="object-cover group-hover:scale-105 transition-transform duration-300 h-full w-full" data-ai-hint={galleryImages[0].imageHint} sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
            <div className="relative rounded-xl overflow-hidden box-glow-accent group">
               <Image src={galleryImages[1].imageUrl} alt={galleryImages[1].description} width={600} height={600} className="object-cover group-hover:scale-105 transition-transform duration-300 h-full w-full" data-ai-hint={galleryImages[1].imageHint} sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="relative rounded-xl overflow-hidden box-glow-accent group">
               <Image src={galleryImages[2].imageUrl} alt={galleryImages[2].description} width={600} height={600} className="object-cover group-hover:scale-105 transition-transform duration-300 h-full w-full" data-ai-hint={galleryImages[2].imageHint} sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
             <div className="relative rounded-xl overflow-hidden box-glow-primary group">
              <Image src={galleryImages[3].imageUrl} alt={galleryImages[3].description} width={600} height={400} className="object-cover group-hover:scale-105 transition-transform duration-300 h-full w-full" data-ai-hint={galleryImages[3].imageHint} sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="relative rounded-xl overflow-hidden box-glow-primary group">
              <Image src={galleryImages[4].imageUrl} alt={galleryImages[4].description} width={600} height={400} className="object-cover group-hover:scale-105 transition-transform duration-300 h-full w-full" data-ai-hint={galleryImages[4].imageHint} sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
            <div className="relative rounded-xl overflow-hidden box-glow-accent group">
              <Image src={galleryImages[5].imageUrl} alt={galleryImages[5].description} width={600} height={600} className="object-cover group-hover:scale-105 transition-transform duration-300 h-full w-full" data-ai-hint={galleryImages[5].imageHint} sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
          </div>
           <div className="grid gap-4">
            <div className="relative rounded-xl overflow-hidden box-glow-accent group">
              <Image src={galleryImages[6].imageUrl} alt={galleryImages[6].description} width={600} height={600} className="object-cover group-hover:scale-105 transition-transform duration-300 h-full w-full" data-ai-hint={galleryImages[6].imageHint} sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
             <div className="relative rounded-xl overflow-hidden box-glow-primary group">
              <Image src={galleryImages[7].imageUrl} alt={galleryImages[7].description} width={600} height={400} className="object-cover group-hover:scale-105 transition-transform duration-300 h-full w-full" data-ai-hint={galleryImages[7].imageHint} sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
