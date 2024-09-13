import React from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, imageUrl }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({id, name, price});
  };

  return (
    <div className="w-64 bg-white border border-darkBiege overflow-hidden shadow-sm">
      <div className="h-64 bg-lightBiege relative">
        <Image
          src={imageUrl}
          alt={name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="p-4 bg-lightBiege">
        <h2 className="text-lg font-semibold text-fonnt">{name}</h2>
        <p className="text-gray-600 mt-1">₹{price.toFixed(2)}</p>
        <button onClick={handleAddToCart} className="mt-3 w-2/3 bg-darkBiege text-fonnt py-2 px-4 font-bold text-left">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;