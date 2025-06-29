import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/gallery - Get all gallery items
export const GET = async () => {
  try {
    console.log('Fetching gallery from database...');
    const gallery = await prisma.gallery.findMany({
      orderBy: { createdAt: 'desc' }
    });
    console.log(`Found ${gallery.length} gallery items`);
    return NextResponse.json(gallery);
  } catch (error) {
    console.error('Error fetching gallery:', error);
    return NextResponse.json(
      { error: 'Failed to fetch gallery' },
      { status: 500 }
    );
  }
};

// POST /api/gallery - Create new gallery item
export const POST = async (request: any) => {
  try {
    const body = await request.json();
    const { title, description, imageUrl, category } = body;

    if (!title || !imageUrl) {
      return NextResponse.json(
        { error: 'Title and imageUrl are required' },
        { status: 400 }
      );
    }

    const gallery = await prisma.gallery.create({
      data: {
        title,
        description,
        imageUrl,
        category
      }
    });

    return NextResponse.json(gallery, { status: 201 });
  } catch (error) {
    console.error('Error creating gallery item:', error);
    return NextResponse.json(
      { error: 'Failed to create gallery item' },
      { status: 500 }
    );
  }
}; 