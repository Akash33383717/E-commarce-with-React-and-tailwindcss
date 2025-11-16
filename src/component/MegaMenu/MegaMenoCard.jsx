import React from "react";
// Assuming you have an Icon component for the shopping cart (e.g., from a library like 'lucide-react' or similar)
// For this example, I'll use a simple placeholder for the cart icon's structure/size.

const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

// Placeholder for the star rating to match the visual of the 'sssss 0'
const StarRating = () => (
    <div className="flex items-center mb-2">
        {/* Placeholder for star icons (represented by gray 's' in the image) */}
        <span className="text-gray-300 text-2xl tracking-tighter">
            SSSSS
        </span>
        <span className="text-sm text-gray-500 ml-2">0</span>
    </div>
);

export const MegaMunoCard = ({ item }) => {
  return (
    <div className="bg-white hover:scale-101 relative shadow-md rounded-2xl p-4 hover:shadow-xl transition-all duration-300 border border-gray-100 max-w-sm">

      <div className="mb-4">
        {/* Discount Badge with Tapered Edge */}
        <span 
          className="absolute top-0 left-0 bg-[#3BB77E] text-white text-xs px-3 py-1 font-medium rounded-tl-xl rounded-br-xl"
        >
          {item.discount || '8%'} 
        </span>
        
        {/* Image Display */}
        <div className="flex justify-center items-center h-48 pt-4"> 
            <img
                src={item.image}
                alt={item.title}
                className="max-h-full max-w-full object-contain"
            />
        </div>
      </div>

      <p className="text-sm text-gray-500 mb-1">{item.category || 'Fresh Seafood'}</p>

      <h2 className="text-xl font-semibold text-gray-800 mb-1 leading-tight">
        {item.title || "Gorton's Beer Battered Fish Fillets"}
      </h2>
      
      {/* Star Rating Section */}
      <StarRating />

      {/* Brand/Author Section */}
      <p className="text-sm text-gray-500 mb-4">
        By <span className="text-green-600 font-medium">{item.brand || 'Hambger Hel'}</span>
      </p>

      <div className="flex items-center justify-between mt-3">
        <div>
          {/* Price Section */}
          <span className="text-[#3BB77E] font-bold text-2xl">
            ${item.price || '23.85'}
          </span>

          {item.old_price && (
            <span className="line-through text-gray-400 text-base ml-2">
              ${item.old_price || '25.99'}
            </span>
          )}
        </div>

        {/* Add Button with Icon */}
        <button 
          className="bg-green-100 text-green-600 font-semibold px-4 py-2 rounded-xl flex items-center justify-center hover:bg-green-200 transition-all duration-200 shadow-sm"
        >
          <CartIcon />
          Add
        </button>
      </div>
    </div>
  );
};

export default MegaMunoCard;