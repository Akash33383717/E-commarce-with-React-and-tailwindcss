import React, { useEffect, useState } from "react";
import MegaMenoCard from "./MegaMenoCard";

export default function MegaMenu() {
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/megameno.json")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);

        // Get unique categories from the data
        const uniqueCategories = [
          "All",
          ...new Set(data.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
      });
  }, []);

  // Filter items based on selected category
  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="container mx-auto my-10">
      {/* Category list */}
      <div className="md:flex justify-between md:gap-5 space-y-5 ">
        <div className="whitespace-nowrap">
          <h2 className="text-4xl">Popular Products</h2>
        </div>
      <div className="flex gap-4 mb-5 overflow-x-scroll scroll-smooth px-2 py-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`w-fit py-2 px-3 whitespace-nowrap rounded ${
              selectedCategory === cat ? "bg-[#29A56C] text-white" : "bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      </div>

      {/* MegaMenu cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredItems.map((item) => (
          <MegaMenoCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
