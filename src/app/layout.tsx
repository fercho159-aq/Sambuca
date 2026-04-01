import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: {
    template: "%s | Sambuca Bar",
    default: "Sambuca Bar | La Pre-Fiesta en CDMX",
  },
  description:
    "Sambuca: El bar de pre-fiesta en CDMX. Disfruta de nuestras promociones, cocteles, comida y la mejor música en nuestras sucursales.",
  keywords: [
    "Sambuca",
    "Bar",
    "Pre-fiesta",
    "CDMX",
    "Cocteles",
    "Promociones",
    "San Ángel",
    "Copilco",
    "Cuauhtémoc",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-sambuca-bg text-white antialiased font-sans">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
