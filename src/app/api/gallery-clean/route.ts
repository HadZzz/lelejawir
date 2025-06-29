import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    console.log('Fetching gallery from database...');
    const gallery = await prisma.gallery.findMany({
      orderBy: { createdAt: 'desc' }
    });
    console.log(`Found ${gallery.length} gallery items`);
    
    return new Response(JSON.stringify(gallery), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching gallery:', error);
    return new Response(JSON.stringify({ error: "Failed to fetch gallery" }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
} 