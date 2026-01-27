import { NextRequest, NextResponse } from 'next/server';
import { query, queryOne, initPrizeTable } from '@/lib/db';
import { selectPrize, generateCode, PRIZES } from '@/lib/prizes';

interface PrizeEntry {
  id: number;
  nombre: string;
  telefono: string;
  premio_id: string;
  premio_nombre: string;
  codigo_redencion: string;
  status: string;
  created_at: Date;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, telefono } = body;

    if (!nombre || !telefono) {
      return NextResponse.json(
        { error: 'Nombre y teléfono son requeridos' },
        { status: 400 }
      );
    }

    // Initialize table if it doesn't exist
    await initPrizeTable();

    // Check if phone has already played today
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const existingEntry = await queryOne<PrizeEntry>(
      `SELECT * FROM prize_entries
       WHERE telefono = $1
       AND created_at >= $2`,
      [telefono, today.toISOString()]
    );

    if (existingEntry) {
      return NextResponse.json(
        {
          error: 'Ya participaste hoy. Vuelve mañana para otra oportunidad.',
          alreadyPlayed: true,
          existingPrize: {
            nombre: existingEntry.premio_nombre,
            codigo: existingEntry.codigo_redencion,
          }
        },
        { status: 400 }
      );
    }

    // Select prize and generate code
    const prize = selectPrize();
    const codigo = generateCode();

    // Calculate expiration (24 hours from now)
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 24);

    // Save to database
    await query(
      `INSERT INTO prize_entries (nombre, telefono, premio_id, premio_nombre, codigo_redencion, expires_at)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [nombre, telefono, prize.id, prize.nombre, codigo, expiresAt.toISOString()]
    );

    return NextResponse.json({
      success: true,
      prize: {
        id: prize.id,
        nombre: prize.nombre,
        color: prize.color,
        colorClass: prize.colorClass,
      },
      codigo,
      expiresAt: expiresAt.toISOString(),
    });
  } catch (error) {
    console.error('Error in premio API:', error);
    return NextResponse.json(
      { error: 'Error al procesar tu participación. Intenta de nuevo.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ prizes: PRIZES });
}
