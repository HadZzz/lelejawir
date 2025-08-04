import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Blog UMKM Lele Gumpang Surakarta | Tips Budidaya & Bisnis Lele",
  description: "Blog UMKM Lele Gumpang berisi tips budidaya lele, resep masakan lele, dan panduan bisnis lele di Surakarta. Pelajari cara sukses beternak lele.",
  keywords: "blog lele Gumpang, tips budidaya lele Surakarta, bisnis lele, cara ternak lele, resep lele, UMKM lele sukses",
  alternates: {
    canonical: "https://umkmlelegumpang.vercel.app/blog",
  },
};

const blogPosts = [
  {
    id: 1,
    title: "Tips Sukses Budidaya Lele di Surakarta untuk Pemula",
    excerpt: "Panduan lengkap memulai budidaya lele di Surakarta. Dari persiapan kolam hingga panen pertama yang menguntungkan.",
    date: "2025-01-04",
    slug: "tips-budidaya-lele-surakarta-pemula",
    category: "Budidaya"
  },
  {
    id: 2,
    title: "Resep Lele Goreng Kremes Khas Gumpang yang Lezat",
    excerpt: "Resep rahasia lele goreng kremes yang menjadi favorit warga Gumpang. Cocok untuk usaha kuliner rumahan.",
    date: "2025-01-03",
    slug: "resep-lele-goreng-kremes-gumpang",
    category: "Resep"
  },
  {
    id: 3,
    title: "Strategi Pemasaran UMKM Lele di Era Digital",
    excerpt: "Cara memasarkan produk lele secara online dan offline. Tips khusus untuk UMKM lele di Surakarta.",
    date: "2025-01-02",
    slug: "strategi-pemasaran-umkm-lele-digital",
    category: "Bisnis"
  },
  {
    id: 4,
    title: "Keunggulan Lele Gumpang Dibanding Daerah Lain",
    excerpt: "Mengapa lele dari Gumpang Surakarta memiliki kualitas terbaik? Faktor apa saja yang mempengaruhinya?",
    date: "2025-01-01",
    slug: "keunggulan-lele-gumpang-surakarta",
    category: "Informasi"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Blog UMKM Lele Gumpang
            <span className="block text-yellow-300">Surakarta</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Tips budidaya lele, resep masakan, dan strategi bisnis UMKM lele terbaik di Surakarta
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Artikel Terbaru UMKM Lele Gumpang
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pelajari tips dan trik sukses dalam budidaya lele dan mengembangkan bisnis UMKM lele di Surakarta
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                    <time className="text-sm text-gray-500">{post.date}</time>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Baca Selengkapnya
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Kategori Artikel UMKM Lele Gumpang
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Budidaya Lele</h3>
              <p className="text-gray-600 text-sm">Tips dan teknik budidaya lele modern</p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Resep Masakan</h3>
              <p className="text-gray-600 text-sm">Resep lezat berbahan dasar lele</p>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Strategi Bisnis</h3>
              <p className="text-gray-600 text-sm">Tips mengembangkan UMKM lele</p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Informasi</h3>
              <p className="text-gray-600 text-sm">Berita dan info seputar lele Gumpang</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}