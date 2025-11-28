import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: {
    template: "%s | Sambuca Bar",
    default: "Sambuca Bar | La Pre-Fiesta Neón en CDMX",
  },
  description:
    "Sambuca: El bar con ambiente neón para la pre-fiesta en CDMX. Disfruta de nuestras promociones, cocteles, comida y la mejor música en nuestras sucursales.",
  keywords: [
    "Sambuca",
    "Bar",
    "Neon",
    "Pre-fiesta",
    "CDMX",
    "Cocteles",
    "Promociones",
    "San Ángel",
    "Roma",
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
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
