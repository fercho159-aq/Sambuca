"use client";

import { Instagram } from 'lucide-react';
import Image from 'next/image';

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
    </svg>
  );
}


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
                    <a href="https://www.instagram.com/bar_sambuca/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors"><Instagram size={24} /></a>
                    <a href="https://www.tiktok.com/@bar_sambuca_cdmx" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><TikTokIcon className="h-6 w-6" /></a> 
                </div>
            </div>
        </footer>
    )
}
