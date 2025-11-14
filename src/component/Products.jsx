import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/produts.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  const datas = data.slice(0,10);
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 container mx-auto">
      {datas.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Products;
