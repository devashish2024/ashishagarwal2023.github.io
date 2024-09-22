import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const result = await pool.query('SELECT url FROM urls WHERE id = $1', [id]);

    if (result.rows.length > 0) {
      return NextResponse.redirect(result.rows[0].url);
    } else {
      return NextResponse.redirect('https://ashish.top');
    }
  } catch (error) {
    console.error(error);
    return NextResponse.redirect('https://ashish.top');
  }
}
