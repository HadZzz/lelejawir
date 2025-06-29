import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { verifyJWT } from '@/utils/jwt';

const prisma = new PrismaClient();

// GET /api/gallery/[id] - Get gallery item by id
export async function GET(_req: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const gallery = await prisma.gallery.findUnique({ where: { id } });
    if (!gallery) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json(gallery);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch gallery' }, { status: 500 });
  }
}

// PUT /api/gallery/[id] - Update gallery item
export async function PUT(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const token = request.headers.get('authorization')?.replace('Bearer ', '');
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const decoded = verifyJWT(token);
    if (!decoded || (decoded as { role?: string }).role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }
    const body = await request.json();
    const { title, description, imageUrl, category } = body;
    const updated = await prisma.gallery.update({
      where: { id },
      data: { title, description, imageUrl, category }
    });
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: 'Failed to update gallery' }, { status: 500 });
  }
}

// DELETE /api/gallery/[id] - Delete gallery item
export async function DELETE(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const token = request.headers.get('authorization')?.replace('Bearer ', '');
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const decoded = verifyJWT(token);
    if (!decoded || (decoded as { role?: string }).role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }
    await prisma.gallery.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to delete gallery' }, { status: 500 });
  }
} 