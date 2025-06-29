export async function GET() {
  const products = [
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
  
  return new Response(JSON.stringify(products), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
} 