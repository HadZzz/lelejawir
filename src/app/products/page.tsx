import { Metadata } from 'next';
import ProductsClientFetcher from '@/components/ProductsClientFetcher';

export const metadata: Metadata = {
  title: "Produk Lele Segar UMKM Lele Gumpang Surakarta | Harga Terjangkau",
  description: "Lihat semua produk lele segar berkualitas tinggi dari UMKM Lele Gumpang Surakarta. Berbagai ukuran lele segar dengan harga terjangkau. Pesan sekarang!",
  keywords: "produk lele Gumpang, harga lele Surakarta, jual lele segar, UMKM lele Gumpang, lele berkualitas Surakarta, daftar harga lele",
  openGraph: {
    title: "Produk Lele Segar UMKM Lele Gumpang Surakarta",
    description: "Berbagai pilihan lele segar berkualitas tinggi dari UMKM Lele Gumpang dengan harga terjangkau",
    url: "https://lelejawir.vercel.app/products",
    images: ["/politama-removebg-preview.png"],
  },
  alternates: {
    canonical: "https://lelejawir.vercel.app/products",
  },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Produk Lele Segar
            <span className="block text-yellow-300">UMKM Lele Gumpang Surakarta</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Pilihan terbaik lele segar berkualitas tinggi langsung dari kolam UMKM Lele Gumpang di Surakarta. 
            Berbagai ukuran dengan harga terjangkau untuk kebutuhan Anda.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Daftar Produk UMKM Lele Gumpang
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Semua lele segar kami dipanen langsung dari kolam di Gumpang, Surakarta untuk menjamin kualitas dan kesegaran terbaik
            </p>
          </div>
          
          <ProductsClientFetcher />
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Mengapa Memilih Produk UMKM Lele Gumpang?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Lele Segar Terjamin</h3>
              <p className="text-gray-600">Dipanen langsung dari kolam UMKM Lele Gumpang sesuai pesanan</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Kualitas Premium</h3>
              <p className="text-gray-600">Lele berkualitas tinggi dengan pakan terbaik di Surakarta</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Harga Terjangkau</h3>
              <p className="text-gray-600">Harga kompetitif langsung dari UMKM tanpa perantara</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}