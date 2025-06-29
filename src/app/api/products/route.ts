import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { verifyJWT } from "@/utils/jwt";

const prisma = new PrismaClient();

function getToken(req: NextRequest) {
  const auth = req.headers.get("authorization");
  if (!auth) return null;
  return auth.replace("Bearer ", "");
}

export async function GET() {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}

export async function POST(req: NextRequest) {
  const token = getToken(req);
  const user = token ? verifyJWT(token) : null;
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
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