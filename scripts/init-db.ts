import { Pool } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

async function initDatabase() {
  const client = await pool.connect();

  try {
    console.log('Conectando a la base de datos...');

    // Crear tabla prize_entries
    const createPrizeTableSQL = `
      CREATE TABLE IF NOT EXISTS prize_entries (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
        telefono VARCHAR(15) NOT NULL,
        premio_id VARCHAR(50) NOT NULL,
        premio_nombre VARCHAR(100) NOT NULL,
        codigo_redencion VARCHAR(20) UNIQUE NOT NULL,
        status VARCHAR(20) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT NOW(),
        redeemed_at TIMESTAMP,
        expires_at TIMESTAMP
      );
    `;

    await client.query(createPrizeTableSQL);
    console.log('✓ Tabla prize_entries creada');

    // Crear índice para búsquedas por teléfono y fecha
    const createIndexSQL = `
      CREATE INDEX IF NOT EXISTS idx_telefono_fecha ON prize_entries (telefono, created_at);
    `;

    await client.query(createIndexSQL);
    console.log('✓ Índice idx_telefono_fecha creado');

    // Crear índice para búsquedas por código
    const createCodeIndexSQL = `
      CREATE INDEX IF NOT EXISTS idx_codigo ON prize_entries (codigo_redencion);
    `;

    await client.query(createCodeIndexSQL);
    console.log('✓ Índice idx_codigo creado');

    console.log('\n✅ Base de datos inicializada correctamente');

  } catch (error) {
    console.error('Error inicializando la base de datos:', error);
    throw error;
  } finally {
    client.release();
    await pool.end();
  }
}

initDatabase();
