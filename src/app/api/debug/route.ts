import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    nodeEnv: process.env.NODE_ENV,
    databaseUrl: process.env.DATABASE_URL ? 'set' : 'not set',
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'not set',
    timestamp: new Date().toISOString()
  });
} 