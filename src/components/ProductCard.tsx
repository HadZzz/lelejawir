import Link from "next/link";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
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
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">
            Rp {product.price.toLocaleString()}
          </div>
          <Link 
            href={`/products/${product.id}`}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
            aria-label={`Lihat detail ${product.name}`}
          >
            Lihat Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 