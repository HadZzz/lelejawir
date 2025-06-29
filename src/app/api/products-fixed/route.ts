import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Return mock data for testing
    const mockProducts = [
      {
        id: "1",
        name: "Lele Sangkuriang",
        description: "Lele segar berkualitas tinggi",
        price: 25000,
        imageUrl: "https://via.placeholder.com/300x200?text=Lele+Sangkuriang",
        weight: 1.0,
        fishType: "Sangkuriang",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: "2", 
        name: "Lele Dumbo",
        description: "Lele dumbo segar dari kolam",
        price: 22000,
        imageUrl: "https://via.placeholder.com/300x200?text=Lele+Dumbo",
        weight: 0.8,
        fishType: "Dumbo",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ];
    
    console.log('Returning mock products:', mockProducts.length);
    return NextResponse.json(mockProducts);
  } catch (error) {
    console.error('Error in products-fixed API:', error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
} 