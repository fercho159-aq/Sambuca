"use client";

import React, { useState, useEffect } from 'react';
import { MapPin, Music, Beer, Clock, Instagram, Facebook, Phone, Menu as MenuIcon, X, ChevronRight, PartyPopper } from 'lucide-react';
import Link from 'next/link';

// Componente de Navegación
const Navbar = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-pink-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-pulse">
              SAMBUCA
            </div>
            <span className="text-white text-xs tracking-widest border border-white px-1 hidden sm:block">BAR & DRINKS</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['promos', 'bebidas', 'sucursales'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-neon-green px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,255,0,0.5)]"
                >
                  {item}
                </button>
              ))}
               <Link
                href="/reservar"
                className="text-gray-300 hover:text-neon-green px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,255,0,0.5)]"
              >
                Reservar
              </Link>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-pink-500 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Promos', 'Bebidas', 'Sucursales'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className="text-gray-300 hover:text-neon-blue block w-full text-left px-3 py-4 rounded-md text-base font-bold uppercase border-b border-gray-800"
              >
                {item}
              </button>
            ))}
            <Link
                href="/reservar"
                className="text-gray-300 hover:text-neon-blue block w-full text-left px-3 py-4 rounded-md text-base font-bold uppercase border-b border-gray-800"
              >
                Reservar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

// Componente de Tarjeta de Bebida Neon
const NeonDrinkCard = ({ name, price, color, description, icon }) => {
  const colorMap = {
    pink: 'border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.4)] text-pink-500',
    green: 'border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.4)] text-green-500',
    blue: 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.4)] text-blue-500',
    yellow: 'border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.4)] text-yellow-400',
    orange: 'border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.4)] text-orange-500',
  };

  return (
    <div className={`relative bg-gray-900/80 border-2 ${colorMap[color]} rounded-xl p-6 transform hover:-translate-y-2 transition-all duration-300 group`}>
      <div className="absolute -top-4 -right-4 bg-black border border-white rounded-full p-2 rotate-12 group-hover:rotate-0 transition-transform">
        <span className="text-white font-bold text-lg">${price}</span>
      </div>
      <div className="h-16 w-16 mb-4 mx-auto text-4xl flex items-center justify-center">
        {icon || '🦆'}
      </div>
      <h3 className={`text-2xl font-black uppercase text-center mb-2 ${colorMap[color].split(' ').pop()}`}>{name}</h3>
      <p className="text-gray-400 text-center text-sm mb-4">{description}</p>
       <Link href="/menu" className={`w-full py-2 rounded font-bold border ${colorMap[color]} hover:bg-white hover:text-black transition-colors uppercase text-sm block text-center`}>
        Ver Detalle
      </Link>
    </div>
  );
};


export default function Home() {
  const [activeTab, setActiveTab] = useState('litros');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };
  
  // Datos basados en las fotos del menú
  const promos = [
    {
      title: "CHAROLA $650",
      subtitle: "Lunes, Martes y Miércoles",
      items: ["24 Latas de Cerveza 355ml", "+ 1 Orden de 6 Alitas", "+ Papas a la Francesa"],
      highlight: true
    },
    {
      title: "TRITÓN 4.8L",
      subtitle: "Promoción Tritonera",
      items: ["Vodka Preparado", "Cerveza o Neon", "Solo $349"],
      highlight: false
    },
    {
      title: "ALITAS $349",
      subtitle: "Miércoles de Alitas",
      items: ["En la compra del primer tritón", "Te enviamos una orden", "Bañadas en tu salsa favorita"],
      highlight: false
    }
  ];

  const drinks = [
    { name: "PINK ON", price: "130", color: "pink", description: "Enciende tu bebida. Incluye patito de regalo.", icon: "💖" },
    { name: "GREEN ON", price: "130", color: "green", description: "Sabor explosivo. Incluye patito de regalo.", icon: "💚" },
    { name: "BLUE ON", price: "130", color: "blue", description: "Refrescante y eléctrico. Incluye patito de regalo.", icon: "💙" },
    { name: "YELLOW ON", price: "130", color: "yellow", description: "Cítrico y brillante. Incluye patito de regalo.", icon: "💛" },
    { name: "SAMBUPATO", price: "450", color: "orange", description: "10 Shots de Baileys o Perlas Negras.", icon: "🦆" },
    { name: "MICHELADA", price: "120", color: "yellow", description: "Mango o Cereza. 1.2 Litros de sabor.", icon: "🍺" },
  ];

  const branches = [
    { name: "Sambuca Condesa", address: "Av. Amsterdam 24, Hipódromo, Cuauhtémoc, CDMX", hours: "Jue-Dom 6pm - 3am" },
    { name: "Sambuca Roma", address: "Orizaba 160, Roma Nte., Cuauhtémoc, CDMX", hours: "Mar-Dom 5pm - 2am" },
    { name: "Sambuca Polanco", address: "Av. Presidente Masaryk 299, Polanco, Miguel Hidalgo, CDMX", hours: "Todos los días 2pm - 12am" },
  ];

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-pink-500 selection:text-white">
      <Navbar 
        scrollToSection={scrollToSection} 
      />

      {/* HERO SECTION */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        
        <div className="relative z-10 text-center px-4">
          <h2 className="text-neon-green font-bold tracking-widest text-lg md:text-xl mb-4 animate-bounce">¿ESTÁS LISTO?</h2>
          <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter leading-none">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 filter drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">ENCIENDE</span>
            <span className="block text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">LA FIESTA</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
            El lugar de los <span className="text-yellow-400 font-bold">Patitos</span>, los <span className="text-cyan-400 font-bold">Tritones</span> y las mejores promos de la CDMX.
          </p>
          <button 
            onClick={() => scrollToSection('promos')}
            className="bg-pink-600 hover:bg-pink-700 text-white px-10 py-4 rounded-full font-black text-xl tracking-widest transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] border-2 border-white/20"
          >
            VER PROMOS
          </button>
        </div>
      </section>

      {/* PROMOS SECTION (Basado en Menú) */}
      <section id="promos" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-16">
            <PartyPopper className="text-yellow-400" size={40} />
            <h2 className="text-4xl md:text-6xl font-black text-center uppercase italic">Promociones <span className="text-yellow-400">Tritoneras</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {promos.map((promo, idx) => (
              <div key={idx} className={`relative border-4 ${promo.highlight ? 'border-yellow-400 bg-gray-900' : 'border-gray-700 bg-black'} p-8 rounded-2xl transform hover:scale-105 transition-all duration-300`}>
                {promo.highlight && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black font-black px-6 py-2 rounded-full uppercase text-sm shadow-[0_0_20px_rgba(250,204,21,0.6)]">
                    La Favorita
                  </div>
                )}
                <h3 className="text-3xl font-black text-white mb-2 uppercase italic">{promo.title}</h3>
                <p className="text-pink-500 font-bold mb-6 text-lg uppercase tracking-wider">{promo.subtitle}</p>
                <ul className="space-y-3">
                  {promo.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <ChevronRight className="text-green-500 mr-2" size={20} />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DRINKS SECTION */}
      <section id="bebidas" className="py-20 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">NEON DRINKS</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Nuestras bebidas insignia. Brillan en la oscuridad e incluyen tu patito coleccionable.</p>

          <div className="flex justify-center gap-4 mb-12">
             <button 
                onClick={() => setActiveTab('litros')}
                className={`px-6 py-2 rounded-full font-bold border-2 transition-all ${activeTab === 'litros' ? 'bg-white text-black border-white' : 'border-gray-700 text-gray-500 hover:border-white'}`}
             >
               LITROS
             </button>
             <button 
                onClick={() => setActiveTab('shots')}
                className={`px-6 py-2 rounded-full font-bold border-2 transition-all ${activeTab === 'shots' ? 'bg-white text-black border-white' : 'border-gray-700 text-gray-500 hover:border-white'}`}
             >
               SHOTS & PATOS
             </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {drinks.filter(d => activeTab === 'litros' ? !d.name.includes('SAMBUPATO') : d.name.includes('SAMBUPATO')).map((drink, idx) => (
               <NeonDrinkCard key={idx} {...drink} />
            ))}
            {activeTab === 'shots' && (
                <>
                    <NeonDrinkCard name="BABY VODKA" price="300" color="yellow" description="10 Shots. Sabores: Mango, Fresa, Cereza..." icon="🐣" />
                    <NeonDrinkCard name="PERLAS NEGRAS" price="450" color="blue" description="10 Shots de Jägermeister con boost." icon="💣" />
                </>
            )}
          </div>
        </div>
      </section>

      {/* SUCURSALES & CONTACTO */}
      <section id="sucursales" className="py-20 px-4 bg-gradient-to-t from-pink-900/20 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16 uppercase border-b-4 border-pink-600 inline-block pb-2">Encuentra tu Sede</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {branches.map((branch, idx) => (
                <div key={idx} className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-neon-green transition-colors cursor-pointer group">
                   <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-neon-green transition-colors">{branch.name}</h3>
                        <div className="flex items-center text-gray-400 mt-2">
                            <MapPin size={18} className="mr-2 text-pink-500" />
                            <p>{branch.address}</p>
                        </div>
                        <div className="flex items-center text-gray-400 mt-1">
                            <Clock size={18} className="mr-2 text-blue-500" />
                            <p className="text-sm">{branch.hours}</p>
                        </div>
                      </div>
                      <ChevronRight className="text-gray-600 group-hover:text-white transition-colors" />
                   </div>
                </div>
              ))}
            </div>

            <div className="h-[400px] bg-gray-800 rounded-2xl relative overflow-hidden border-2 border-gray-700 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1931&auto=format&fit=crop')] bg-cover opacity-30 grayscale"></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-2xl font-black text-white bg-black/70 px-6 py-3 rounded backdrop-blur-sm">
                        MAPA DE UBICACIÓN
                    </p>
                 </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESERVAR CTA */}
      <section id="reservar" className="py-24 px-4 bg-pink-600 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-lg">NO TE QUEDES FUERA</h2>
            <p className="text-xl text-pink-100 mb-10 font-medium">Las mesas vuelan. Reserva tu Charola o tu Tritón ahora mismo.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="https://wa.me/5215512345678" target="_blank" rel="noopener noreferrer" className="bg-black text-white hover:text-neon-green px-8 py-4 rounded-full font-black text-lg flex items-center justify-center gap-3 transition-all hover:shadow-2xl">
                <Phone size={24} /> WHATSAPP
              </Link>
              <Link href="https://instagram.com/sambuca" target="_blank" rel="noopener noreferrer" className="bg-white text-pink-600 px-8 py-4 rounded-full font-black text-lg flex items-center justify-center gap-3 hover:bg-gray-100 transition-all">
                <Instagram size={24} /> DM INSTAGRAM
              </Link>
            </div>
         </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-gray-900 pt-16 pb-8 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left">
                  <h4 className="text-2xl font-black text-white mb-2">SAMBUCA</h4>
                  <p className="text-gray-500 text-sm">© 2025 Todos los derechos reservados.</p>
              </div>
              <div className="flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Facebook size={24} /></a>
                  <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors"><Instagram size={24} /></a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors"><Music size={24} /></a> 
              </div>
          </div>
      </footer>
    </div>
  );
}
