export async function GET() {
  const gallery = [
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
  
  return new Response(JSON.stringify(gallery), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
} 