"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bomb, GlassWater, Beer } from "lucide-react";
import { DuckIcon } from "../icons/duck-icon";
import { BottleIcon } from "../icons/bottle-icon";
import { PizzaIcon } from "../icons/pizza-icon";
import { SnackIcon } from "../icons/snack-icon";

const VALID_TABS = ["promociones", "paquetes", "bebidas", "alimentos"] as const;

const paquetes = [
  {
    title: "Paquete Sambuca 1",
    price: "$2,500",
    items: [
      "1 Samburico",
      "1 Boneless 250 grs.",
      "1 Lamborghini",
      "1 Sambupato Vodka",
      "4 Sambulocas",
    ],
    bottle: "1 Botella a elegir (Vodka, Tequila, Ron, Brandy, Etiqueta Roja, William Passport, JB)",
    includes: "Incluye 3 jarras de 1 lt de jugo o 3 refrescos de 1 lt",
    image: "/images/menu/Paquete 1 Completo.png"
  },
  {
    title: "Paquete Sambuca 2",
    price: "$2,800",
    items: [
      "1 Samburico",
      "1 Boneless 250 grs.",
      "1 Lamborghini",
      "1 Sambupato Vodka",
      "Pack de 20 Cervezas de medio",
    ],
    bottle: "1 Botella a elegir (Vodka, Tequila, Ron, Brandy, LB, Etiqueta Roja, William Passport)",
    includes: "Incluye 3 jarras de 1 lt de jugo o 3 refrescos de 1 lt",
    image: "/images/menu/Paquete 2 Completo.png"
  },
  {
    title: "Paquete Sambuca 3",
    price: "$3,300",
    items: [
      "1 Samburico",
      "1 Boneless 250 grs.",
      "1 Lamborghini",
      "1 Sambupato Vodka",
      "Pack de 30 Cervezas de medio",
    ],
    bottle: "1 Botella a elegir (Vodka, Tequila, Ron, Brandy, LB, Etiqueta Roja, William Passport)",
    includes: "Incluye 3 jarras de 1 lt de jugo o 3 refrescos de 1 lt",
    image: "/images/menu/Paquete 3 Completo.png"
  },
  {
    title: "Paquete Sambuca 4",
    price: "$3,900",
    items: [
      "1 Samburico",
      "1 Boneless 250 grs.",
      "1 Lamborghini",
      "1 Sambupato Vodka",
      "Pack de 40 Cervezas de medio",
    ],
    bottle: "1 Botella a elegir (Whisky o Cognac, excepto Buchanan’s 18 años)",
    includes: "Incluye 3 jarras de 1 lt de jugo o 3 refrescos de 1 lt",
    image: "/images/menu/Paquete 4 Completo.png"
  },
];

const promociones = [
  {
    day: "Lunes, Martes y Miércoles",
    deals: [
      {
        title: "Charola",
        price: "$650",
        description:
          "+ 24 LATAS DE CERVEZA 355 ML. + 1 ORDEN DE 6 ALITAS BAÑADAS EN TU SALSA FAVORITA + PAPAS A LA FRANCESA",
        image: "/images/menu/Charola de Cerveza con papas y alitas.png",
      },
    ],
  },
   {
    day: "Miércoles de Alitas",
    deals: [
        {
        title: "Tritón de 4.8 LTS de Vodka o Cerveza",
        price: "$349",
        description:
          "En la compra del primer tritón, te enviamos una orden de Alipapas bañadas en tu salsa favorita.",
        image: "/images/menu/Tritón 4.8L (Vodka o Cerveza) + Alipapas.png",
      },
      {
        title: "Frappes y Copas de 1 LT",
        price: "2x1",
        description: "De Chela, Sky, Caribe Cooler.",
        image: "/images/menu/Sambulocas Mojitos.png",
      },
    ],
  },
  {
    day: "Lunes y Jueves",
    deals: [
      {
        title: "Copas de 1L",
        price: "2x1",
        description: "Sambulocas, Mojitos",
        image: "/images/menu/Sambulocas Mojitos.png",
      },
    ],
  },
  {
    day: "Jueves, Viernes, Sábado y Domingo",
    deals: [
      {
        title: "Charola",
        price: "$850",
        description:
          "+ 24 LATAS DE CERVEZA 355 ML. + 1 ORDEN DE 6 ALITAS BAÑADAS EN TU SALSA FAVORITA + PAPAS A LA FRANCESA",
        image: "/images/menu/Charola de Cerveza con papas y alitas.png",
      },
    ],
  },
  {
    day: "Lunes, Martes, Miércoles y Domingo",
    deals: [
        { title: "Tritón de 4.8 Litros", price: "$349", description: "De VODKA PREPARADOS, CERVEZA o NEON", image: "/images/menu/Tritón Neón Rosa con botana.png" },
    ]
  },
  {
    day: "Jueves, Viernes y Sábado",
    deals: [
        { title: "Tritón de Cerveza, Neon o Vodka", price: "$399", description: "4.8 Litros", image: "/images/menu/Tritón Neón Rosa con botana.png" },
    ]
  },
  {
    day: "De Lunes a Domingo",
    deals: [
        { title: "Tritón de 4.8 Litros", price: "$500", description: "De TEQUILA, RON o WHISKY", image: "/images/menu/Tritón 4.8L (Ron, Whisky, Tequila).png" },
    ]
  }
];

const bebidas = {
  "Neon Drinks": [
    { name: "Sencillas Litro", price: "$120", icon: GlassWater, description: "Yellow On, Orange On, Blue On, Pink On, Green On. No incluye mini botella.", color: "yellow", image: "/images/menu/Neon Drinks - 1L.png" },
    { name: "Con Patito", price: "$130", icon: DuckIcon, description: "Pink On, Green On, Blue On, Yellow On, Orange On. 'Enciende tu bebida'. Incluye patito de regalo.", color: "pink", image: "/images/menu/Neon Drinks - Con Patito.png" },
    { name: "Especiales Litro", price: "$140", icon: BottleIcon, description: "Orange On, Yellow On, Green On, Pink On, Blue On. Incluye mini botella de regalo.", color: "blue", image: "/images/menu/Neon Drink Especial Rosa.png" },
  ],
  "Micheladas": [
    { name: "Micheladas Especiales", price: "$120", icon: Beer, description: "1.25L. Mango, Cereza, Gomitas, Cacahuates, Cueritos.", color: "yellow", image: "/images/menu/Michelada Especial con gomitas.png" },
    { name: "Especial de Camarón", price: "$200", icon: Beer, description: "1Lt Chela + Camarón. Vaso escarchado especial.", color: "orange", image: "/images/menu/Michelada Especial de Camaron 1L.png" },
  ],
  "Para Compartir (Sambupatos)": [
    { name: "Baby Vodka (10 Shots)", price: "$300", icon: Bomb, description: "Mango, fresa, cereza, tamarindo, frutos rojos, y más.", color: "green", image: "/images/menu/Sambupatos - Baby Vodka (10 Shots).png" },
    { name: "Skittles + Skyy (10 Shots)", price: "$300", icon: Bomb, description: "Incluye paquete de Skittles y botella Skyy.", color: "pink", image: "/images/menu/Sambupatos - Skittles + Skyy (10 Shots).png" },
    { name: "Baileys (10 Shots)", price: "$450", icon: Bomb, color: "yellow", image: "/images/menu/Sambupatos - Baileys (10 Shots).png" },
    { name: "Perlas Negras (10 Shots)", price: "$450", icon: Bomb, description: "Opcional: con Boost o con Monster.", color: "blue", image: "/images/menu/Sambupatos - Perlas Negras (10 Shots).png" },
  ],
  "Cervezas": [
    { name: "Monster Chela 1L", price: "$100", icon: Beer, color: "green", image: "/images/menu/Cervezas - Monster Chela 1L.png" },
    { name: "Carrón de 20 Cervezas", price: "$748", icon: Beer, description: "Indio, Lager, Tecate, Tecate Ambar, Tecate Light", color: "yellow", image: "/images/menu/Cervezas - Cartón de 20 Cervezas.png" },
  ]
};

const alimentos = {
    "Antojitos": [
        { name: "Pechuga de pollo con ensalada", price: "" },
        { name: "Enchiladas Verdes (3 pz)", price: "" },
        { name: "Enchiladas Suizas (3 pz)", price: "" },
        { name: "Queso Fundido con tortillas", price: "" },
        { name: "Burritos de Queso con Frijoles (2pz)", price: "" },
        { name: "Molletes Sencillos con Pico de Gallo (2pz)", price: "" },
        { name: "Sincronizadas (2 pz)", price: "" },
        { name: "Hamburguesa Hawaiana con Papas", price: "" },
        { name: "Hamburguesa Sencilla con Papas", price: "" },
        { name: "Hot-Dog Sencillo con Papas", price: "" },
        { name: "Hot-Dog con Queso y Papas", price: "" },
    ],
    "Alitas y Papas": [
        { name: "Alipapas (6 alitas + papas)", price: "", description: "Salsas: Infierno, Mango Habanero, Hot, Bufalo, Tamarindo, B.B.Q", image: "/images/menu/Alitas con papas.png" },
        { name: "Orden de 12 Alitas + Papas", price: "", description: "Bañadas en tu salsa favorita", image: "/images/menu/Alitas con papas (1).png" },
        { name: "Boneless (250grs) + Papas", price: "$180", description: "Bañados en tu salsa favorita", image: "/images/menu/Boneless con papas.png" },
    ],
    "Para Saborear": [
        { name: "Nuggets de Pollo (6 pz) + Papas", price: "$60", icon: PizzaIcon, image: "/images/menu/Nuggets de Pollo con Papas 2.png" },
        { name: "Papas a la Francesa", price: "$65", icon: PizzaIcon, image: "/images/menu/Papas a la Francesa.png" },
        { name: "Botanas de Locura", price: "$80", description: "Papas, churritos, gomitas/cacahuates y salsas", icon: PizzaIcon },
        { name: "Samburico", price: "$140", description: "6 Alitas, 6 Nuggets, Papas a la Francesa", icon: PizzaIcon, image: "/images/menu/Samburico.png" },
        { name: "Papas de Locura", price: "$80", icon: PizzaIcon },
        { name: "Cacahuates Sambuca", price: "$50", icon: PizzaIcon },
        { name: "Salchipulpos (6 pz) + Papas", price: "$60", icon: PizzaIcon, image: "/images/menu/Salchipulpos.png" },
    ],
    "Platillos": [
        { name: "Alambres en comal (Pollo o Arrachera)", price: "$220", icon: SnackIcon },
        { name: "Mole (Poblano, Negro, Verde)", price: "$120 - $140", description: "Con pechuga o pierna de pollo", icon: SnackIcon },
    ],
    "Postres": [
        { name: "Churros", price: "4 pzs por $50, 8 por $80, 12 por $110" },
        { name: "Pan Dulce", price: "$30" },
        { name: "Orden de Nata", price: "$40" },
    ]
}

export function MenuSection() {
  const [activeTab, setActiveTab] = useState("promociones");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (VALID_TABS.includes(hash as (typeof VALID_TABS)[number])) {
      setActiveTab(hash);
    }
  }, []);

  const colorClasses = {
      pink: "text-sambuca-pink border-sambuca-pink",
      green: "text-sambuca-lime border-sambuca-lime",
      blue: "text-sambuca-purple border-sambuca-purple",
      yellow: "text-sambuca-lime border-sambuca-lime",
      orange: "text-sambuca-pink border-sambuca-pink",
      default: "text-sambuca-lime border-sambuca-lime"
  }
  return (
    <section id="menu" className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-headline tracking-wider text-white relative inline-block pb-3">
          Nuestro Menú
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-sambuca-lime rounded-full" />
        </h1>
        <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
          Descubre los sabores que hacen la noche.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto mb-8">
          <TabsTrigger value="promociones">Promociones</TabsTrigger>
          <TabsTrigger value="paquetes">Paquetes</TabsTrigger>
          <TabsTrigger value="bebidas">Bebidas</TabsTrigger>
          <TabsTrigger value="alimentos">Alimentos</TabsTrigger>
        </TabsList>

        <TabsContent value="promociones">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promociones.map((promo, index) => (
              <Card key={index} className="bg-sambuca-surface-light border-l-4 border-sambuca-pink transition-all duration-300 group flex flex-col">
                 <CardHeader>
                  <CardTitle className="text-3xl font-headline tracking-wider text-sambuca-pink transition-all">{promo.day}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {promo.deals.map((deal, dealIndex) => (
                     <div key={dealIndex} className="border-t border-border/30 pt-4 flex gap-3">
                        {deal.image && (
                          <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                            <Image
                              src={deal.image}
                              alt={deal.title}
                              fill
                              className="object-cover"
                              sizes="64px"
                            />
                          </div>
                        )}
                        <div className="flex-grow">
                          <div className="flex justify-between items-baseline">
                              <h4 className="text-xl font-headline tracking-wider text-foreground">{deal.title}</h4>
                              <p className="text-2xl font-mono text-sambuca-lime">{deal.price}</p>
                          </div>
                          <CardDescription className="text-muted-foreground text-sm mt-1">{deal.description}</CardDescription>
                        </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
            </div>
        </TabsContent>
        
        <TabsContent value="paquetes">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {paquetes.map((pkg, index) => (
                    <Card key={index} className="bg-sambuca-surface-light border-l-4 border-sambuca-lime transition-all duration-300 group">
                        <CardHeader>
                            <div className="flex justify-between items-baseline">
                              <CardTitle className="text-4xl font-headline tracking-wider text-sambuca-lime transition-all duration-300">{pkg.title}</CardTitle>
                              <span className="text-2xl font-mono text-sambuca-lime">{pkg.price}</span>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col sm:flex-row gap-6 items-start">
                                <div className="flex-1 w-full overflow-hidden">
                                    <ul className="space-y-2 list-disc list-inside text-foreground/80">
                                        {pkg.items.map((item, i) => <li key={i}>{item}</li>)}
                                    </ul>
                                    {pkg.bottle && (
                                        <div className="flex items-start text-foreground/80 mt-4">
                                            <span className="mr-2 mt-2 inline-block w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0" />
                                            <p>{pkg.bottle}</p>
                                        </div>
                                    )}
                                </div>
                                {pkg.image && (
                                    <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 flex-shrink-0 sm:-mt-2 mx-auto sm:mx-0">
                                        <Image src={pkg.image} alt={pkg.title} fill className="object-contain" sizes="(max-width: 1024px) 100vw, 50vw" />
                                    </div>
                                )}
                            </div>
                            <div className="mt-4">
                                <p className="text-primary/80 mt-4 text-[13px] sm:text-sm font-semibold whitespace-nowrap overflow-x-auto overflow-y-hidden">{pkg.includes}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </TabsContent>

        <TabsContent value="bebidas">
          <div className="space-y-12">
            {Object.entries(bebidas).map(([category, drinks]) => (
              <div key={category}>
                <h3 className="text-3xl md:text-4xl font-headline tracking-wider text-sambuca-purple mb-6">{category}</h3>
                <div className={`grid grid-cols-1 md:grid-cols-2 ${drinks.length === 1 ? 'lg:grid-cols-1 max-w-md mx-auto md:max-w-md' : drinks.length === 2 ? 'lg:grid-cols-2 max-w-5xl mx-auto' : 'lg:grid-cols-3'} gap-6`}>
                  {drinks.map((drink) => {
                    const colorClass = colorClasses[drink.color as keyof typeof colorClasses] || colorClasses.default;
                    return (
                        <Card key={drink.name} className={`bg-card/70 backdrop-blur-sm border-2 border-transparent group transition-all duration-300 overflow-hidden ${colorClass}`}>
                            {drink.image && (
                              <div className="relative aspect-[4/3] w-full">
                                <Image
                                  src={drink.image}
                                  alt={drink.name}
                                  fill
                                  className="object-contain p-4"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                              </div>
                            )}
                            <CardHeader>
                                <div className="flex justify-between items-start gap-4">
                                    <CardTitle className={`text-2xl font-headline tracking-wider`}>{drink.name}</CardTitle>
                                    <span className={`font-mono text-2xl whitespace-nowrap`}>{drink.price}</span>
                                </div>
                            </CardHeader>
                          <CardContent className="flex-grow flex flex-col justify-between">
                            <div className="space-y-2">
                                {!drink.image && drink.icon && <drink.icon className="w-8 h-8 opacity-70 mb-2" />}
                                {drink.description && <p className="text-muted-foreground text-sm">{drink.description}</p>}
                            </div>
                          </CardContent>
                        </Card>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="alimentos">
           <div className="space-y-12">
            {Object.entries(alimentos).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-3xl md:text-4xl font-headline tracking-wider text-sambuca-purple mb-6">{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {items.map((item) => (
                    <Card key={item.name} className="bg-card border border-border/30">
                      <CardContent className="pt-6 flex items-center justify-between gap-4">
                        {"image" in item && item.image ? (
                          <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                              sizes="64px"
                            />
                          </div>
                        ) : (
                          "icon" in item && item.icon && <item.icon className="w-8 h-8 text-sambuca-lime flex-shrink-0" />
                        )}
                          <div className="flex-grow">
                            <div className="flex justify-between items-center gap-4">
                                <h4 className="text-xl font-headline tracking-wider text-sambuca-lime">{item.name}</h4>
                                <div className="flex items-center gap-2">
                                  {item.price && <p className="font-mono text-sambuca-lime text-xl">{item.price}</p>}
                                  {category !== "Alitas y Papas" && item.name !== "Nuggets de Pollo (6 pz) + Papas" && item.name !== "Samburico" && item.name !== "Papas a la Francesa" && item.name !== "Salchipulpos (6 pz) + Papas" && <p style={{ color: "#FF0000" }} className="font-semibold text-sm md:text-base whitespace-nowrap"> ̶N̶o̶ ̶D̶i̶s̶p̶o̶n̶i̶b̶l̶e̶ </p>}
                                </div>
                            </div>
                            {"description" in item && item.description && <p className="text-muted-foreground text-sm mt-1">{item.description}</p>}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

      </Tabs>
    </section>
  );
}
