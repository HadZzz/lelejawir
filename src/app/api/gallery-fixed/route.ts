import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Return mock data for testing
    const mockGallery = [
      {
        id: "1",
        title: "Kolam Lele Sangkuriang",
        description: "Kolam lele sangkuriang yang sehat dan produktif",
        imageUrl: "https://via.placeholder.com/400x400?text=Kolam+Lele+Sangkuriang",
        category: "Kolam",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: "2",
        title: "Proses Panen",
        description: "Proses panen lele yang higienis",
        imageUrl: "https://via.placeholder.com/400x400?text=Proses+Panen",
        category: "Panen",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: "3",
        title: "Lele Segar",
        description: "Lele segar siap dikirim",
        imageUrl: "https://via.placeholder.com/400x400?text=Lele+Segar",
        category: "Produk",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ];
    
    console.log('Returning mock gallery:', mockGallery.length);
    return NextResponse.json(mockGallery);
  } catch (error) {
    console.error('Error in gallery-fixed API:', error);
    return NextResponse.json({ error: "Failed to fetch gallery" }, { status: 500 });
  }
} 