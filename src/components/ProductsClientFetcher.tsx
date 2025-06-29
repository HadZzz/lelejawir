'use client';

import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { getApiUrl } from '@/utils/url';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductsClientFetcher = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(getApiUrl('/api/products'));
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Products loaded from database:', data);
        setProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
          <span className="text-4xl">🐟</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Memuat Produk...</h3>
        <p className="text-gray-600">Mohon tunggu sebentar</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">⚠️</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Terjadi Kesalahan</h3>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">🐟</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Belum Ada Produk</h3>
        <p className="text-gray-600">Produk akan segera tersedia</p>
      </div>
    );
  }

  return (
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
  );
};

export default ProductsClientFetcher; 