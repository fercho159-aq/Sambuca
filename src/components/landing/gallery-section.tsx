import Image from "next/image";

const galleryImages = [
  {
    id: "gallery1",
    description: "A person holding a vibrant pink cocktail with a neon light in the background.",
    imageUrl: "/images/DSC05244.JPG",
    imageHint: "neon cocktail",
  },
  {
    id: "gallery2",
    description: "A group of friends laughing and cheering with drinks at a bar.",
    imageUrl: "/images/DSC05225.JPG",
    imageHint: "bar friends",
  },
  {
    id: "gallery3",
    description: "A close-up of a blue cocktail with a lime garnish, glowing under blue light.",
    imageUrl: "/images/DSC04488 (1).JPG",
    imageHint: "blue cocktail",
  },
  {
    id: "gallery4",
    description: "A DJ's hands on a mixer with a lively crowd dancing in the background.",
    imageUrl: "/images/DSC05245.JPG",
    imageHint: "DJ party",
  },
  {
    id: "gallery5",
    description: "A neon sign that says 'Good Vibes Only' illuminating a brick wall.",
    imageUrl: "/images/DSC05296.JPG",
    imageHint: "neon sign",
  },
  {
    id: "gallery6",
    description: "Two people clinking cocktail glasses in a toast at a dimly lit bar.",
    imageUrl: "/images/DSC05343.JPG",
    imageHint: "bar toast",
  },
  {
    id: "gallery7",
    description: "A delicious-looking plate of bar food, like wings or nachos, under warm light.",
    imageUrl: "/images/DSC05226.JPG",
    imageHint: "bar food",
  },
  {
    id: "gallery8",
    description: "The interior of a bar with people sitting at tables, with a vibrant, energetic atmosphere.",
    imageUrl: "/images/DSC05339.JPG",
    imageHint: "bar atmosphere",
  },
];

export function GallerySection() {
  if (galleryImages.length < 8) return null;

  return (
    <section className="py-20 px-4 bg-sambuca-bg">
      <div className="container mx-auto">
        {/* Section title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-headline tracking-wider text-white inline-block pb-3 relative">
            Nuestra Galería
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-sambuca-lime rounded-full" />
          </h2>
          <p className="text-sm text-gray-400 mt-4 tracking-wide">
            Viviendo la experiencia Sambuca
          </p>
        </div>

        {/* Gallery grid - 4 cols desktop, 2 cols mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-1.5">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <Image
                src={img.imageUrl}
                alt={img.description}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                data-ai-hint={img.imageHint}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Hover overlay with diagonal gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(168,200,40,0.35)] to-[rgba(123,79,191,0.35)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
