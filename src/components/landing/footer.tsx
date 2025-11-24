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
      fill="currentColor"
      {...props}
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.84-.94-6.37-2.96-2.06-2.72-2.4-6.32-1.09-9.52.86-2.07 2.49-3.72 4.45-4.79.03-1.6.01-3.2-.02-4.81.1-1.53.64-3.04 1.76-4.14C9.42 1.59 11.02.94 12.525.02z" />
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
                    <a href="https://www.tiktok.com/@bar_sambuca_cdmx" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><TikTokIcon /></a> 
                </div>
            </div>
        </footer>
    )
}
