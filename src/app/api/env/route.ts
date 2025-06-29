import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    nodeEnv: process.env.NODE_ENV,
    jwtSecret: process.env.JWT_SECRET ? 'set' : 'not set',
    databaseUrl: process.env.DATABASE_URL ? 'set' : 'not set',
    vercelUrl: process.env.VERCEL_URL || 'not set',
    timestamp: new Date().toISOString()
  });
} 