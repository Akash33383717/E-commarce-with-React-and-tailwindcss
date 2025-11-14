import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
const colors = [
  "bg-red-500", "bg-red-600", "bg-red-700",
  "bg-orange-400", "bg-orange-500", "bg-orange-600",
  "bg-amber-400", "bg-amber-500", "bg-amber-600",
  "bg-yellow-400", "bg-yellow-500", "bg-yellow-600",
  "bg-lime-400", "bg-lime-500", "bg-lime-600",
  "bg-green-400", "bg-green-500", "bg-green-600",
  "bg-emerald-400", "bg-emerald-500", "bg-emerald-600",
  "bg-teal-400", "bg-teal-500", "bg-teal-600",
  "bg-cyan-400", "bg-cyan-500", "bg-cyan-600",
  "bg-sky-400", "bg-sky-500", "bg-sky-600",
  "bg-blue-400", "bg-blue-500", "bg-blue-600",
  "bg-indigo-400", "bg-indigo-500", "bg-indigo-600",
  "bg-violet-400", "bg-violet-500", "bg-violet-600",
  "bg-purple-400", "bg-purple-500", "bg-purple-600",
  "bg-fuchsia-400", "bg-fuchsia-500", "bg-fuchsia-600",
  "bg-pink-400", "bg-pink-500", "bg-pink-600",
  "bg-rose-400", "bg-rose-500", "bg-rose-600",
  "bg-red-400", "bg-orange-300", "bg-yellow-300",
  "bg-green-300", "bg-blue-300", "bg-purple-300",
  "bg-pink-300", "bg-rose-300"
];


const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className={`relative border border-gray-300 rounded-xl p-5 bg-white shadow-sm hover:scale-101 duration-300`}>
      
      {/* Discount Badge */}
      <div className={`absolute top-0 left-0 ${randomColor}  text-white px-3 py-1 rounded-br-xl rounded-tl-xl text-xs font-semibold`}>
        {Math.round(product.offPercentage)}%
      </div>

      {/* Product Image */}
      <div className="w-full flex justify-center mt-5">
        <img
          src={product.img}
          alt={product.productName}
          className="h-40 object-contain"
        />
      </div>

      {/* Category */}
      <p className="text-gray-400 text-sm mt-6">Baking material</p>

      {/* Product Title */}
      <h2 className="text-lg font-semibold mt-1 leading-6">
        {product.productName}
      </h2>

      {/* Rating row */}
      <div className="flex items-center gap-2 mt-3">
        <span className="text-gray-300 tracking-wider">★★★★★</span>
        <span className="text-gray-400 text-sm">0</span>
      </div>

      {/* Brand */}
      <p className="text-gray-400 text-sm mt-2">
        By <span className="text-green-600 font-medium">{product.brand}</span>
      </p>

      {/* Price + Add Button */}
      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="text-green-600 font-bold text-xl">
            ${product.currentPrice}
          </p>
          <p className="text-gray-300 line-through text-sm">
            ${product.oldPrice}
          </p>
        </div>

        <button className="bg-green-100 text-green-600 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-200 duration-200">
          <FaShoppingCart /> Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
