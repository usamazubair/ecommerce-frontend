import React, { useState, useEffect } from "react";
import ShopService from "services/ShopService";
import { useParams } from "react-router-dom";
import ProductsByCategory from "components/ProductsByCategory/ProductsByCategory";
import "assets/scss/component/allItems.scss";
import { useShopContext } from "store/contexts/shopContext";

export default function AllItems() {
  const { categoryId } = useParams();
  const [Products, setProducts] = useState();
  const { allCategories } = useShopContext();
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedSort, setSelectedSort] = useState(1);

  useEffect(() => {
    if (allCategories.length !== 0) {
      var result = allCategories.filter(
        (category) => category._id === categoryId
      );

      setSelectedCategory(result[0]);
    }
  }, [allCategories, categoryId]);

  useEffect(() => {
    (async () => {
      try {
        var response = await ShopService.getProducts(categoryId, selectedSort);

        setProducts(response.data.response);
      } catch (e) {}
    })();
  }, [categoryId, selectedSort]);

  const handleChange = (e) => {
    setSelectedSort(e.target.value);
  };

  return (
    <div>
      {Products && (
        <div className="allItemRoot">
          <ProductsByCategory
            Products={Products}
            selectedSort={selectedSort}
            handleChange={handleChange}
            selectedCategory={selectedCategory}
          />
        </div>
      )}
    </div>
  );
}
