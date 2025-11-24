"use client";

import { Instagram, Facebook, Music } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
    return (
        <footer className="bg-black border-t border-gray-900 pt-16 pb-8 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <div className="relative h-12 w-48 mx-auto md:mx-0">
                        <Image
                            src="/images/logo sambuca.png"
                            alt="Sambuca Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <p className="text-gray-500 text-sm mt-2">© 2025 Todos los derechos reservados.</p>
                </div>
                <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Facebook size={24} /></a>
                    <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors"><Instagram size={24} /></a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Music size={24} /></a>
                </div>
            </div>
        </footer>
    )
}
