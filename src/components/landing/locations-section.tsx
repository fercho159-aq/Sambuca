"use client";

import { MapPin, Clock, ChevronRight } from "lucide-react";

const branches = [
    { name: "Sambuca Condesa", address: "Av. Amsterdam 24, Hipódromo, Cuauhtémoc, CDMX", hours: "Jue-Dom 6pm - 3am" },
    { name: "Sambuca Roma", address: "Orizaba 160, Roma Nte., Cuauhtémoc, CDMX", hours: "Mar-Dom 5pm - 2am" },
    { name: "Sambuca Polanco", address: "Av. Presidente Masaryk 299, Polanco, Miguel Hidalgo, CDMX", hours: "Todos los días 2pm - 12am" },
];

export function LocationsSection() {
    return (
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
    );
}
