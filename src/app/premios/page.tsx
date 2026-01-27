"use client";

import { useState } from "react";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { PrizeForm, type PrizeFormData } from "@/components/premios/prize-form";
import { PrizeWheel } from "@/components/premios/prize-wheel";
import { PrizeResult } from "@/components/premios/prize-result";
import { useToast } from "@/hooks/use-toast";
import type { Prize } from "@/lib/prizes";

type GameState = "form" | "spinning" | "result";

interface PrizeApiResponse {
  success?: boolean;
  prize?: Prize;
  codigo?: string;
  expiresAt?: string;
  error?: string;
  alreadyPlayed?: boolean;
  existingPrize?: {
    nombre: string;
    codigo: string;
  };
}

export default function PremiosPage() {
  const { toast } = useToast();
  const [gameState, setGameState] = useState<GameState>("form");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPrize, setSelectedPrize] = useState<Prize | null>(null);
  const [codigo, setCodigo] = useState("");
  const [expiresAt, setExpiresAt] = useState("");

  const handleFormSubmit = async (data: PrizeFormData) => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/premios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result: PrizeApiResponse = await response.json();

      if (!response.ok) {
        if (result.alreadyPlayed && result.existingPrize) {
          toast({
            title: "Ya participaste hoy",
            description: `Tu premio: ${result.existingPrize.nombre} - Código: ${result.existingPrize.codigo}`,
            variant: "destructive",
          });
        } else {
          toast({
            title: "Error",
            description: result.error || "Algo salió mal. Intenta de nuevo.",
            variant: "destructive",
          });
        }
        setIsLoading(false);
        return;
      }

      if (result.prize && result.codigo && result.expiresAt) {
        setSelectedPrize(result.prize);
        setCodigo(result.codigo);
        setExpiresAt(result.expiresAt);
        setGameState("spinning");
      }
    } catch (error) {
      toast({
        title: "Error de conexión",
        description: "No pudimos conectar con el servidor. Intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSpinComplete = () => {
    setGameState("result");
  };

  const handlePlayAgain = () => {
    setGameState("form");
    setSelectedPrize(null);
    setCodigo("");
    setExpiresAt("");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center pt-24 md:pt-32">
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            {/* Title */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-headline tracking-widest text-glow-primary">
                Premios
              </h1>
              <p className="text-lg text-muted-foreground mt-4">
                {gameState === "form" && "¡Gira la ruleta y gana premios increíbles!"}
                {gameState === "spinning" && "¡Buena suerte!"}
                {gameState === "result" && "¡Felicidades!"}
              </p>
            </div>

            {/* Content based on game state */}
            <div className="bg-card p-8 rounded-lg border border-border/50">
              {gameState === "form" && (
                <div className="space-y-8">
                  <div className="text-center text-muted-foreground text-sm">
                    <p>Ingresa tus datos para participar.</p>
                    <p>Una participación por día por número de teléfono.</p>
                  </div>
                  <PrizeForm onSubmit={handleFormSubmit} isLoading={isLoading} />
                </div>
              )}

              {gameState === "spinning" && (
                <div className="py-8">
                  <PrizeWheel
                    isSpinning={true}
                    selectedPrize={selectedPrize}
                    onSpinComplete={handleSpinComplete}
                  />
                </div>
              )}

              {gameState === "result" && selectedPrize && (
                <PrizeResult
                  prize={selectedPrize}
                  codigo={codigo}
                  expiresAt={expiresAt}
                  onPlayAgain={handlePlayAgain}
                />
              )}
            </div>

            {/* Prize list */}
            {gameState === "form" && (
              <div className="mt-12 text-center">
                <h3 className="text-xl font-headline tracking-wider text-muted-foreground mb-4">
                  Premios Disponibles
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    { name: "Shot Gratis", color: "neon-pink" },
                    { name: "Orden de Alitas", color: "neon-orange" },
                    { name: "Cerveza Gratis", color: "neon-yellow" },
                    { name: "10% Descuento", color: "neon-green" },
                    { name: "20% Descuento", color: "neon-blue" },
                    { name: "Coctel Gratis", color: "neon-pink" },
                  ].map((prize) => (
                    <span
                      key={prize.name}
                      className={`px-3 py-1 rounded-full text-sm border text-${prize.color} border-${prize.color} shadow-${prize.color}`}
                    >
                      {prize.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
