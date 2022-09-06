import React from "react";
import { useShopContext } from "store/contexts/shopContext";

export default function ShopCategories() {
  const { allCategories } = useShopContext();

  return (
    <div className="shopCategories">
      <div className="heading">All Categories</div>
      {allCategories.map((categroy) => (
        <div key={categroy._id} className="categoryName">
          {categroy.Name}
        </div>
      ))}
    </div>
  );
}
