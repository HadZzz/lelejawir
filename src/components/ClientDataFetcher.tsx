'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import type { Product } from '@/components/ProductCard';
import { Gallery } from '@/types/gallery';

const ClientDataFetcher = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [gallery, setGallery] = useState<Gallery[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch products from database
        const productsResponse = await fetch('/api/products');
        if (productsResponse.ok) {
          const productsData = await productsResponse.json();
          setProducts(productsData);
          console.log('Products loaded from database:', productsData.length);
        } else {
          console.error('Failed to fetch products:', productsResponse.status);
        }
        
        // Fetch gallery from database
        const galleryResponse = await fetch('/api/gallery');
        if (galleryResponse.ok) {
          const galleryData = await galleryResponse.json();
          setGallery(galleryData);
          console.log('Gallery loaded from database:', galleryData.length);
        } else {
          console.error('Failed to fetch gallery:', galleryResponse.status);
        }
        
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">Loading data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">⚠️</span>
        </div>
        <p className="text-red-600 mb-2">Error loading data</p>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  return (
    <div>
      {/* Products Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Produk Lele Kami</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
              Pilih lele segar berkualitas sesuai kebutuhan Anda
            </p>
            <p className="text-lg text-blue-600 font-semibold">
              UMKM Lele Gumpang Surakarta
            </p>
          </div>
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🐟</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Belum Ada Produk</h3>
              <p className="text-gray-600">Produk akan ditampilkan di sini</p>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Galeri Kolam Kami</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Lihat langsung kondisi kolam dan proses budidaya lele kami
            </p>
          </div>
          {gallery.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-square bg-gray-200 overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      unoptimized={item.imageUrl.startsWith('http')}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
                              <div class="text-center">
                                <span class="text-6xl mb-2 block">🐟</span>
                                <p class="text-blue-600 font-semibold text-sm">Gambar Galeri</p>
                              </div>
                            </div>
                          `;
                        }
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                    {item.description && (
                      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                    )}
                    {item.category && (
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🐟</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Belum Ada Galeri</h3>
              <p className="text-gray-600">Galeri akan ditampilkan di sini</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ClientDataFetcher; 