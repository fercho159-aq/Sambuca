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
import { SaladIcon } from "../icons/salad-icon";

const paquetes = [
  {
    title: "Paquete Sambuca 1",
    items: [
      "1 Samburico",
      "1 Boneless 250 grs.",
      "1 Lamborghini",
      "1 Sambupato Vodka",
      "4 Sambulocas",
      "1 Botella a elegir (Vodka, Tequila, Ron, Brandy, Etiqueta Roja, William Passport, JB)",
    ],
    includes: "Incluye 3 jarras de 1 lt de jugo o 3 refrescos de 1 lt",
  },
  {
    title: "Paquete Sambuca 2",
    items: [
      "1 Samburico",
      "1 Boneless 250 grs.",
      "1 Lamborghini",
      "1 Sambupato Vodka",
      "1 Carrón de 20 Cervezas de medio",
      "1 Botella a elegir (Vodka, Tequila, Ron, Brandy, LB, Etiqueta Roja, William Passport)",
    ],
    includes: "Incluye 3 jarras de 1 lt de jugo o 3 refrescos de 1 lt",
  },
  {
    title: "Paquete Sambuca 3",
    items: [
      "1 Samburico",
      "1 Boneless 250 grs.",
      "1 Lamborghini",
      "1 Sambupato Vodka",
      "2 Carrón de 20 Cervezas de medio",
      "1 Botella a elegir (Vodka, Tequila, Ron, Brandy, LB, Etiqueta Roja, William Passport)",
    ],
    includes: "Incluye 3 jarras de 1 lt de jugo o 3 refrescos de 1 lt",
  },
  {
    title: "Paquete Sambuca 4",
    items: [
      "1 Samburico",
      "1 Boneless 250 grs.",
      "1 Lamborghini",
      "1 Sambupato Vodka",
      "2 Carrón de 20 Cervezas de medio",
      "1 Botella a elegir (Whisky o Cognac, excepto Buchanan’s 18 años)",
    ],
    includes: "Incluye 3 jarras de 1 lt de jugo o 3 refrescos de 1 lt",
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
      },
      {
        title: "Frappes y Copas de 1 LT",
        price: "2x1",
        description: "De Chela, Sky, Caribe Cooler.",
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
      },
    ],
  },
  {
    day: "Lunes, Martes, Miércoles y Domingo",
    deals: [
        { title: "Tritón de 4.8 Litros", price: "$349", description: "De VODKA PREPARADOS, CERVEZA o NEON" },
    ]
  },
  {
    day: "Jueves, Viernes y Sábado",
    deals: [
        { title: "Tritón de Cerveza, Neon o Vodka", price: "$399", description: "4.8 Litros" },
    ]
  },
  {
    day: "De Lunes a Domingo",
    deals: [
        { title: "Tritón de 4.8 Litros", price: "$500", description: "De TEQUILA, RON o WHISKY" },
    ]
  }
];

const bebidas = {
  "Neon Drinks": [
    { name: "Sencillas Litro", price: "$120", icon: GlassWater, description: "Yellow On, Orange On, Blue On, Pink On, Green On. No incluye mini botella.", color: "yellow" },
    { name: "Con Patito", price: "$130", icon: DuckIcon, description: "Pink On, Green On, Blue On, Yellow On, Orange On. 'Enciende tu bebida'. Incluye patito de regalo.", color: "pink" },
    { name: "Especiales Litro", price: "$140", icon: BottleIcon, description: "Orange On, Yellow On, Green On, Pink On, Blue On. Incluye mini botella de regalo.", color: "blue" },
  ],
  "Micheladas": [
    { name: "Micheladas Especiales", price: "$120", icon: Beer, description: "1.25L. Mango, Cereza, Gomitas, Cacahuates, Cueritos.", color: "yellow" },
    { name: "Especial de Camarón", price: "$200", icon: Beer, description: "1Lt Chela + Camarón. Vaso escarchado especial.", color: "orange" },
  ],
  "Para Compartir (Sambupatos)": [
    { name: "Baby Vodka (10 Shots)", price: "$300", icon: Bomb, description: "Mango, fresa, cereza, tamarindo, frutos rojos, y más.", color: "green" },
    { name: "Skittles + Skyy (10 Shots)", price: "$300", icon: Bomb, description: "Incluye paquete de Skittles y botella Skyy.", color: "pink" },
    { name: "Baileys (10 Shots)", price: "$450", icon: Bomb, color: "yellow" },
    { name: "Perlas Negras (10 Shots)", price: "$450", icon: Bomb, description: "Opcional: con Boost o con Monster.", color: "blue" },
  ],
  "Cervezas": [
    { name: "Monster Chela 1L", price: "$100", icon: Beer, color: "green" },
    { name: "Perla Chela 1L", price: "$100", icon: Beer, color: "blue" },
    { name: "Carrón de 20 Cervezas", price: "$748", icon: Beer, description: "Indio, Lager, Tecate, Tecate Ambar, Tecate Light", color: "yellow" },
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
        { name: "Alipapas (6 alitas + papas)", price: "", description: "Salsas: Infierno, Mango Habanero, Hot, Bufalo, Tamarindo, B.B.Q" },
        { name: "Orden de 12 Alitas + Papas", price: "", description: "Bañadas en tu salsa favorita" },
        { name: "Boneless (250grs) + Papas", price: "$180", description: "Bañados en tu salsa favorita" },
    ],
    "Para Saborear": [
        { name: "Nuggets de Pollo (6 pz) + Papas", price: "$60", icon: PizzaIcon },
        { name: "Papas a la Francesa", price: "$65", icon: PizzaIcon },
        { name: "Botanas de Locura", price: "$80", description: "Papas, churritos, gomitas/cacahuates y salsas", icon: PizzaIcon },
        { name: "Samburico", price: "$140", description: "6 Alitas, 6 Nuggets, Papas a la Francesa", icon: PizzaIcon },
        { name: "Papas de Locura", price: "$80", icon: PizzaIcon },
        { name: "Cacahuates Sambuca", price: "$50", icon: PizzaIcon },
        { name: "Salchipulpos (6 pz) + Papas", price: "$60", icon: PizzaIcon },
    ],
    "Platillos": [
        { name: "Alambres en comal (Pollo o Arrachera)", price: "$220", icon: SaladIcon },
        { name: "Mole (Poblano, Negro, Verde)", price: "$120 - $140", description: "Con pechuga o pierna de pollo", icon: SaladIcon },
    ],
    "Postres": [
        { name: "Churros", price: "4 pzs por $50, 8 por $80, 12 por $110" },
        { name: "Pan Dulce", price: "$30" },
        { name: "Orden de Nata", price: "$40" },
    ]
}

export function MenuSection() {
  const colorClasses = {
      pink: "text-neon-pink border-neon-pink group-hover:shadow-neon-pink",
      green: "text-neon-green border-neon-green group-hover:shadow-neon-green",
      blue: "text-neon-blue border-neon-blue group-hover:shadow-neon-blue",
      yellow: "text-neon-yellow border-neon-yellow group-hover:shadow-neon-yellow",
      orange: "text-neon-orange border-neon-orange group-hover:shadow-neon-orange",
      default: "text-primary border-primary group-hover:shadow-neon-pink"
  }
  return (
    <section id="menu" className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-headline tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-glow">
          Nuestro Menú
        </h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
          Descubre los sabores que encienden la noche.
        </p>
      </div>

      <Tabs defaultValue="promociones" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto mb-8">
          <TabsTrigger value="promociones">Promociones</TabsTrigger>
          <TabsTrigger value="paquetes">Paquetes</TabsTrigger>
          <TabsTrigger value="bebidas">Bebidas</TabsTrigger>
          <TabsTrigger value="alimentos">Alimentos</TabsTrigger>
        </TabsList>

        <TabsContent value="promociones">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promociones.map((promo, index) => (
              <Card key={index} className="bg-card border-2 border-accent/50 hover:border-accent transition-all duration-300 group hover:box-glow-accent flex flex-col">
                 <CardHeader>
                  <CardTitle className="text-3xl font-headline tracking-wider text-accent transition-all">{promo.day}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {promo.deals.map((deal, dealIndex) => (
                     <div key={dealIndex} className="border-t border-border/30 pt-4">
                        <div className="flex justify-between items-baseline">
                            <h4 className="text-xl font-headline tracking-wider text-foreground">{deal.title}</h4>
                            <p className="text-2xl font-mono text-accent">{deal.price}</p>
                        </div>
                      <CardDescription className="text-muted-foreground text-sm mt-1">{deal.description}</CardDescription>
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
                    <Card key={index} className="bg-card border-2 border-primary/50 hover:border-primary transition-all duration-300 group hover:box-glow-primary">
                        <CardHeader>
                            <CardTitle className="text-4xl font-headline tracking-wider text-primary group-hover:text-glow transition-all duration-300">{pkg.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 list-disc list-inside text-foreground/80">
                                {pkg.items.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                            <p className="text-primary/80 mt-4 text-sm font-semibold">{pkg.includes}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </TabsContent>

        <TabsContent value="bebidas">
          <div className="space-y-12">
            {Object.entries(bebidas).map(([category, drinks]) => (
              <div key={category}>
                <h3 className="text-4xl md:text-5xl font-headline tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-400 text-glow-primary mb-6">{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {drinks.map((drink) => {
                    const colorClass = colorClasses[drink.color as keyof typeof colorClasses] || colorClasses.default;
                    return (
                        <Card key={drink.name} className={`bg-card/70 backdrop-blur-sm border-2 border-transparent group transition-all duration-300 ${colorClass}`}>
                            <CardHeader>
                                <div className="flex justify-between items-start gap-4">
                                    <CardTitle className={`text-2xl font-headline tracking-wider`}>{drink.name}</CardTitle>
                                    <span className={`font-mono text-2xl whitespace-nowrap`}>{drink.price}</span>
                                </div>
                            </CardHeader>
                          <CardContent className="flex-grow flex flex-col justify-between">
                            <div className="space-y-2">
                                {drink.icon && <drink.icon className="w-8 h-8 opacity-70 mb-2" />}
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
                <h3 className="text-4xl md:text-5xl font-headline tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 text-glow-primary mb-6">{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {items.map((item) => (
                    <Card key={item.name} className="bg-card border border-border/30">
                      <CardContent className="pt-6 flex items-center justify-between gap-4">
                        {item.icon && <item.icon className="w-8 h-8 text-accent flex-shrink-0" />}
                         <div className="flex-grow">
                            <div className="flex justify-between items-baseline">
                                <h4 className="text-xl font-headline tracking-wider text-accent">{item.name}</h4>
                                {item.price && <p className="font-mono text-accent text-xl">{item.price}</p>}
                            </div>
                            {item.description && <p className="text-muted-foreground text-sm mt-1">{item.description}</p>}
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
