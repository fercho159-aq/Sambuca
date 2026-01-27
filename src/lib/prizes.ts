export interface Prize {
  id: string;
  nombre: string;
  probabilidad: number;
  color: string;
  colorClass: string;
}

export const PRIZES: Prize[] = [
  {
    id: 'shot-gratis',
    nombre: 'Shot Gratis',
    probabilidad: 30,
    color: 'hsl(330, 100%, 71%)',
    colorClass: 'neon-pink',
  },
  {
    id: 'orden-alitas',
    nombre: 'Orden de Alitas',
    probabilidad: 20,
    color: 'hsl(30, 100%, 55%)',
    colorClass: 'neon-orange',
  },
  {
    id: 'cerveza-gratis',
    nombre: 'Cerveza Gratis',
    probabilidad: 20,
    color: 'hsl(50, 100%, 55%)',
    colorClass: 'neon-yellow',
  },
  {
    id: 'descuento-10',
    nombre: '10% Descuento',
    probabilidad: 15,
    color: 'hsl(130, 90%, 50%)',
    colorClass: 'neon-green',
  },
  {
    id: 'descuento-20',
    nombre: '20% Descuento',
    probabilidad: 10,
    color: 'hsl(200, 100%, 55%)',
    colorClass: 'neon-blue',
  },
  {
    id: 'coctel-gratis',
    nombre: 'Coctel Gratis',
    probabilidad: 5,
    color: 'hsl(330, 100%, 71%)',
    colorClass: 'neon-pink',
  },
];

export function selectPrize(): Prize {
  const random = Math.random() * 100;
  let cumulative = 0;

  for (const prize of PRIZES) {
    cumulative += prize.probabilidad;
    if (random <= cumulative) {
      return prize;
    }
  }

  return PRIZES[0];
}

export function generateCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let part1 = '';
  let part2 = '';

  for (let i = 0; i < 4; i++) {
    part1 += chars.charAt(Math.floor(Math.random() * chars.length));
    part2 += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return `SMB-${part1}-${part2}`;
}

export function getPrizeIndex(prizeId: string): number {
  return PRIZES.findIndex(p => p.id === prizeId);
}
