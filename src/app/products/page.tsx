import ProductCard from "@/components/ProductCard";
import { getApiUrl } from "@/utils/url";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(getApiUrl('/api/products'), {
      cache: 'no-store'
    });
    if (!response.ok) throw new Error('Failed to fetch products');
    return response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Produk Lele Kami
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Pilih lele segar berkualitas sesuai kebutuhan Anda
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {products.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🐟</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Belum Ada Produk</h3>
              <p className="text-gray-600">Produk akan segera tersedia</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Daftar Produk Tersedia
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Semua produk kami dipanen segar dan siap dikirim ke lokasi Anda
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default ProductsPage; 