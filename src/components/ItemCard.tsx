import Link from "next/link";
import React from "react";

interface ItemProps {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  buyUrl: string;
}

const ItemCard: React.FC<ItemProps> = ({
  name,
  price,
  description,
  imageUrl,
  buyUrl,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {/* Image */}
      <img className="w-full h-48 object-cover" src={imageUrl} alt={name} />

      {/* Card Body */}
      <div className="px-6 py-4">
        {/* Name and Price */}
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">${price.toFixed(2)}</p>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </div>

      {/* Button */}
      <div className="px-6 py-4">
        <Link href={buyUrl} target="_blank">
          <span className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
            Add to Cart
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ItemCard;
