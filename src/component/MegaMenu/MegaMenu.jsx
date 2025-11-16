import React, { useEffect, useState } from "react";
import MegaMenoCard from "./MegaMenoCard";

export default function MegaMenu() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/megameno.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 container mx-auto  my-15">
      {items.map((item) => (
        <MegaMenoCard key={item.id} item={item} />
      ))}
    </div>
  );
}

