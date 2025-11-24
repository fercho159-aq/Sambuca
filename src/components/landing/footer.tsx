"use client";

import { Instagram, Facebook, Music } from 'lucide-react';

export function Footer() {
    return (
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
    )
}