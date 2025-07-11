"use client";

import Link from "next/link";
import Image from "next/image";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  weight?: number;
  fishType?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const handleWhatsAppOrder = () => {
    const phoneNumber = "6285876120167";
    const message = `Halo! Saya ingin memesan ${product.name} dengan detail:\n\nNama Produk: ${product.name}\nHarga: Rp ${product.price.toLocaleString()}\n${product.weight ? `Berat: ${product.weight} kg` : ''}\n${product.fishType ? `Jenis: ${product.fishType}` : ''}\n\nApakah masih tersedia? Terima kasih!`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="aspect-square bg-gray-200 relative overflow-hidden">
        <Image 
          src={product.imageUrl} 
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4">
          <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
            Fresh
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        {product.weight && (
          <div className="text-sm text-gray-500 mb-1">Berat: {product.weight} kg</div>
        )}
        {product.fishType && (
          <div className="text-sm text-gray-500 mb-1">Jenis: {product.fishType}</div>
        )}
        <div className="flex items-center justify-between mt-2">
          <div className="text-2xl font-bold text-blue-600">
            Rp {product.price.toLocaleString()}
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <Link 
            href={`/products/${product.id}`}
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg text-center"
            aria-label={`Lihat detail ${product.name}`}
          >
            Lihat Detail
          </Link>
          <button
            onClick={handleWhatsAppOrder}
            className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-lg text-sm font-semibold hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
            aria-label={`Order ${product.name} via WhatsApp`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 