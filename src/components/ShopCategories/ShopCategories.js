import React from "react";
import { useShopContext } from "store/contexts/shopContext";
import { Link } from "react-router-dom";

export default function ShopCategories() {
  const { allCategories } = useShopContext();

  return (
    <div className="shopCategories">
      <div className="heading">All Categories</div>
      {allCategories.map((categroy) => (
        <div key={categroy._id} className="categoryName">
          <Link to={`/user/mall/${categroy._id}`}>{categroy.Name}</Link>
        </div>
      ))}
    </div>
  );
}
