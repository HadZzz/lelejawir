import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const getProduct = async (id: string): Promise<Product | null> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/products`, {
      cache: 'no-store'
    });
    if (!response.ok) throw new Error('Failed to fetch products');
    const products: Product[] = await response.json();
    return products.find(product => product.id === id) || null;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
};

const ProductDetailPage = async (context: { params: Promise<{ id: string }> }) => {
  const { params } = context;
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/products" 
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
            aria-label="Kembali ke daftar produk"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Produk
          </Link>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Image Section */}
              <div className="md:w-1/2">
                <div className="relative">
                  <Image 
                    src={product.imageUrl} 
                    alt={product.name}
                    width={600}
                    height={600}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-bold">
                      Fresh & Segar
                    </span>
                  </div>
                </div>
              </div>

              {/* Info Section */}
              <div className="md:w-1/2 p-8 md:p-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  {product.name}
                </h1>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  {product.description}
                </p>
                
                <div className="bg-blue-50 rounded-xl p-6 mb-8">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    Rp {product.price.toLocaleString()}
                  </div>
                  <p className="text-gray-600">Harga per kilogram</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600">✓</span>
                    </div>
                    <span className="text-gray-700">Segar langsung dari kolam</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600">✓</span>
                    </div>
                    <span className="text-gray-700">Pengiriman cepat</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600">✓</span>
                    </div>
                    <span className="text-gray-700">Kualitas terjamin</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-full font-bold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    Hubungi untuk Pemesanan
                  </button>
                  <Link 
                    href="/contact"
                    className="flex-1 bg-transparent text-blue-600 py-4 px-8 rounded-full font-bold text-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300 text-center"
                  >
                    Tanya Sekarang
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetailPage; 