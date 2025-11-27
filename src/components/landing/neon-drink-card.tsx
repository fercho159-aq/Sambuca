"use client"

import Link from "next/link";

export const NeonDrinkCard = ({ name, price, color, description, icon }) => {
  const colorMap = {
    pink: 'border-neon-pink text-neon-pink shadow-neon-pink',
    green: 'border-neon-green text-neon-green shadow-neon-green',
    blue: 'border-neon-blue text-neon-blue shadow-neon-blue',
    yellow: 'border-neon-yellow text-neon-yellow shadow-neon-yellow',
    orange: 'border-neon-orange text-neon-orange shadow-neon-orange',
    default: 'border-primary text-primary shadow-neon-pink'
  };

  const selectedColor = colorMap[color] || colorMap.default;

  return (
    <div className={`relative bg-gray-900/80 border-2 ${selectedColor} rounded-xl p-6 transform hover:-translate-y-2 transition-all duration-300 group`}>
      <div className="absolute -top-4 -right-4 bg-black border border-white rounded-full p-2 rotate-12 group-hover:rotate-0 transition-transform">
        <span className="text-white font-bold text-lg">{price}</span>
      </div>
      <div className="h-16 w-16 mb-4 mx-auto text-4xl flex items-center justify-center">
        {icon}
      </div>
      <h3 className={`text-2xl font-black uppercase text-center mb-2`}>{name}</h3>
      <p className="text-gray-400 text-center text-sm mb-4 h-10">{description}</p>
       <Link href="/menu" className={`w-full py-2 rounded font-bold border ${selectedColor} hover:bg-white hover:text-black transition-colors uppercase text-sm block text-center`}>
        Ver Detalle
      </Link>
    </div>
  );
};
