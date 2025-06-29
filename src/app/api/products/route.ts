import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    console.log('Fetching products from database...');
    const products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' }
    });
    console.log(`Found ${products.length} products`);
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

export async function POST(req: any) {
  try {
    const { name, description, price, imageUrl, weight, fishType } = await req.json();
    if (!name || !description || !price || !imageUrl) {
      return NextResponse.json({ error: "Semua field wajib diisi" }, { status: 400 });
    }
    
    console.log('Creating product with data:', { name, description, price, imageUrl, weight, fishType });
    
    const product = await prisma.product.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        imageUrl,
        ...(weight !== undefined && weight !== "" && { weight: parseFloat(weight) }),
        ...(fishType && fishType !== "" && { fishType }),
      },
    });
    return NextResponse.json(product);
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json({ error: "Terjadi kesalahan server", details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
} 