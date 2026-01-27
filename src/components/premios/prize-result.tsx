"use client";

import { Button } from "@/components/ui/button";
import type { Prize } from "@/lib/prizes";

interface PrizeResultProps {
  prize: Prize;
  codigo: string;
  expiresAt: string;
  onPlayAgain?: () => void;
}

export function PrizeResult({ prize, codigo, expiresAt, onPlayAgain }: PrizeResultProps) {
  const expirationDate = new Date(expiresAt);
  const formattedExpiration = expirationDate.toLocaleDateString("es-MX", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const copyCode = () => {
    navigator.clipboard.writeText(codigo);
  };

  return (
    <div className="prize-reveal text-center space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-headline tracking-wider text-muted-foreground">
          ¡Felicidades!
        </h2>
        <div
          className="text-4xl md:text-6xl font-headline tracking-widest animate-pulse"
          style={{
            color: prize.color,
            textShadow: `0 0 20px ${prize.color}, 0 0 40px ${prize.color}`,
          }}
        >
          {prize.nombre}
        </div>
      </div>

      <div className="bg-card border border-border/50 rounded-lg p-6 space-y-4 max-w-sm mx-auto">
        <p className="text-muted-foreground text-sm">Tu código de redención:</p>
        <div
          className="text-3xl md:text-4xl font-mono font-bold tracking-wider cursor-pointer hover:opacity-80 transition-opacity"
          onClick={copyCode}
          style={{
            color: prize.color,
            textShadow: `0 0 10px ${prize.color}`,
          }}
        >
          {codigo}
        </div>
        <p className="text-xs text-muted-foreground">
          (Toca para copiar)
        </p>
      </div>

      <div className="text-sm text-muted-foreground space-y-2">
        <p>
          Muestra este código en cualquier sucursal Sambuca para redimir tu premio.
        </p>
        <p className="text-xs">
          Válido hasta: {formattedExpiration}
        </p>
      </div>

      {onPlayAgain && (
        <Button
          onClick={onPlayAgain}
          variant="outline"
          className="border-primary text-primary hover:bg-primary/10"
        >
          Volver a jugar mañana
        </Button>
      )}
    </div>
  );
}
