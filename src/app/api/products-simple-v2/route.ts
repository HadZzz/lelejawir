export async function GET() {
  const products = [
    {
      id: "1",
      name: "Lele Sangkuriang",
      description: "Lele segar berkualitas tinggi",
      price: 25000,
      imageUrl: "https://via.placeholder.com/300x200?text=Lele+Sangkuriang",
      weight: 1.0,
      fishType: "Sangkuriang"
    },
    {
      id: "2", 
      name: "Lele Dumbo",
      description: "Lele dumbo segar dari kolam",
      price: 22000,
      imageUrl: "https://via.placeholder.com/300x200?text=Lele+Dumbo",
      weight: 0.8,
      fishType: "Dumbo"
    }
  ];
  
  return new Response(JSON.stringify(products), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
} 