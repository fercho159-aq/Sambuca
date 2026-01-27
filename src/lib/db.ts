import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

export async function query<T>(text: string, params?: unknown[]): Promise<T[]> {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result.rows as T[];
  } finally {
    client.release();
  }
}

export async function queryOne<T>(text: string, params?: unknown[]): Promise<T | null> {
  const rows = await query<T>(text, params);
  return rows[0] || null;
}

export async function initPrizeTable(): Promise<void> {
  const createTableSQL = `
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

  const createIndexSQL = `
    CREATE INDEX IF NOT EXISTS idx_telefono_fecha ON prize_entries (telefono, created_at);
  `;

  await query(createTableSQL);
  await query(createIndexSQL);
}

export default pool;
