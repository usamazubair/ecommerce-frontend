import React, { useEffect, useState } from "react";
import AllProducts from "components/AllProducts/AllProducts";
import AdminService from "services/AdminService";
import "assets/scss/component/product.scss";
import AddProducts from "components/AddProducts/AddProducts";

export default function Products() {
  const [allProducts, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await AdminService.getAllProducts();
        setProducts(response.data.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    })();
  }, []);

  const createProduct = (Product) => {
    setProducts([...allProducts, Product]);
  };

  const deleteProduct = async (id) => {
    try {
      await AdminService.deleteProduct(id);
    } catch (e) {
      console.log(e);
    }
    setProducts(allProducts.filter((product) => product._id !== id));
  };

  console.log(allProducts);

  const updateProduct = async (id, product) => {
    const productCopy = [...allProducts];

    console.log(product);
    productCopy[
      productCopy.findIndex((tProduct) => {
        return tProduct._id === id;
      })
    ] = {
      ...product,
    };

    setProducts(productCopy);
  };

  return (
    <div className="productRoot">
      <div className="productContent">
        <h5>Products</h5>
        <AddProducts createProduct={createProduct} />
        <AllProducts
          allProducts={allProducts}
          updateProduct={updateProduct}
          loading={loading}
          deleteProduct={deleteProduct}
        />
      </div>
    </div>
  );
}
