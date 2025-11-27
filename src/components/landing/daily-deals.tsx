"use client";

import { useState, useEffect } from 'react';

const promotions = {
  0: [ // Domingo
    { title: "Tritón de 4.8 Litros", price: "$349", description: "De VODKA PREPARADOS, CERVEZA o NEON" },
    { title: "Charola", price: "$850", description: "+ 24 LATAS DE CERVEZA 355 ML. + 1 ORDEN DE 6 ALITAS + PAPAS" },
  ],
  1: [ // Lunes
    { title: "Charola", price: "$650", description: "+ 24 LATAS DE CERVEZA 355 ML. + 1 ORDEN DE 6 ALITAS + PAPAS" },
    { title: "Copas de 1L 2x1", price: "2x1", description: "Sambulocas, Mojitos" },
    { title: "Tritón de 4.8 Litros", price: "$349", description: "De VODKA PREPARADOS, CERVEZA o NEON" },
  ],
  2: [ // Martes
    { title: "Charola", price: "$650", description: "+ 24 LATAS DE CERVEZA 355 ML. + 1 ORDEN DE 6 ALITAS + PAPAS" },
    { title: "Tritón de 4.8 Litros", price: "$349", description: "De VODKA PREPARADOS, CERVEZA o NEON" },
  ],
  3: [ // Miércoles
    { title: "Charola", price: "$650", description: "+ 24 LATAS DE CERVEZA 355 ML. + 1 ORDEN DE 6 ALITAS + PAPAS" },
    { title: "Tritón + Alipapas", price: "$349", description: "En la compra del primer tritón, llévate una orden de Alipapas." },
    { title: "Frappes y Copas 1L 2x1", price: "2x1", description: "De Chela, Sky, Caribe Cooler." },
  ],
  4: [ // Jueves
    { title: "Charola", price: "$850", description: "+ 24 LATAS DE CERVEZA 355 ML. + 1 ORDEN DE 6 ALITAS + PAPAS" },
    { title: "Copas de 1L 2x1", price: "2x1", description: "Sambulocas, Mojitos" },
    { title: "Tritón Cerveza/Neon/Vodka", price: "$399", description: "4.8 Litros" },
  ],
  5: [ // Viernes
    { title: "Charola", price: "$850", description: "+ 24 LATAS DE CERVEZA 355 ML. + 1 ORDEN DE 6 ALITAS + PAPAS" },
    { title: "Tritón Cerveza/Neon/Vodka", price: "$399", description: "4.8 Litros" },
  ],
  6: [ // Sábado
    { title: "Charola", price: "$850", description: "+ 24 LATAS DE CERVEZA 355 ML. + 1 ORDEN DE 6 ALITAS + PAPAS" },
    { title: "Tritón Cerveza/Neon/Vodka", price: "$399", description: "4.8 Litros" },
  ]
};

const dayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

export function DailyDeals() {
    const [currentDay, setCurrentDay] = useState<number | null>(null);

    useEffect(() => {
        setCurrentDay(new Date().getDay());
    }, []);
    
    if (currentDay === null) {
        return (
            <section id="promos" className="py-20 bg-black text-center">
                <h2 className="text-4xl font-headline tracking-widest text-neon-pink text-glow animate-pulse">Cargando promos...</h2>
            </section>
        );
    }

    const todaysPromos = promotions[currentDay as keyof typeof promotions] || [];
    const dayName = dayNames[currentDay];

  return (
    <section id="promos" className="py-20 px-4 bg-gradient-to-t from-pink-900/20 to-black">
      <div className="container mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-5xl md:text-7xl font-headline tracking-widest uppercase">
                <span className="text-neon-pink text-glow">Promos de </span> 
                <span className="text-neon-blue text-glow">{dayName}</span>
            </h2>
          <p className="text-lg text-muted-foreground mt-4">Las mejores ofertas para empezar la fiesta.</p>
        </div>

        {todaysPromos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {todaysPromos.map((promo, index) => (
              <div key={index} className="border-2 border-primary/50 rounded-2xl p-6 text-center bg-card/70 backdrop-blur-sm group hover:border-primary hover:scale-105 transition-all duration-300 flex flex-col justify-between hover:box-glow-primary">
                <div>
                    <h3 className="text-3xl font-headline tracking-wider text-primary group-hover:text-glow transition-all">{promo.title}</h3>
                    <p className="font-mono text-4xl text-neon-yellow text-glow my-4">{promo.price}</p>
                </div>
                <p className="text-muted-foreground text-sm h-12 flex items-center justify-center">{promo.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-2xl text-muted-foreground">Hoy no hay promociones especiales, ¡pero siempre tenemos el mejor ambiente!</p>
          </div>
        )}
      </div>
    </section>
  );
}
