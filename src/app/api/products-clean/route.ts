import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    console.log('Fetching products from database...');
    const products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' }
    });
    console.log(`Found ${products.length} products`);
    
    return new Response(JSON.stringify(products), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
} 