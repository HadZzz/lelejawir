import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { verifyJWT } from "@/utils/jwt";

const prisma = new PrismaClient();

function getToken(req: NextRequest) {
  const auth = req.headers.get("authorization");
  if (!auth) return null;
  return auth.replace("Bearer ", "");
}

export async function PUT(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const token = getToken(req);
  const user = token ? verifyJWT(token) : null;
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const { name, description, price, imageUrl } = await req.json();
    if (!name || !description || !price || !imageUrl) {
      return NextResponse.json({ error: "Semua field wajib diisi" }, { status: 400 });
    }
    const product = await prisma.product.update({
      where: { id },
      data: { name, description, price: parseFloat(price), imageUrl },
    });
    return NextResponse.json(product);
  } catch {
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const token = getToken(req);
  const user = token ? verifyJWT(token) : null;
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    await prisma.product.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 });
  }
} 