import React, { useState } from "react";
import Table from "components/Table/Table";
import Loader from "components/Loader/Loader";
import UpdateProduct from "components/UpdateProduct";

export default function AllProducts({
  loading,
  allProducts,
  deleteProduct,
  updateProduct,
}) {
  const [updateProductModal, setUpdateProduct] = useState(false);
  const [productData, setProductData] = useState();
  const [productHeading] = useState([
    { id: 0, heading: "Name" },
    { id: 1, heading: "Quantity" },
    { id: 2, heading: "Price" },
    { id: 3, heading: "Color" },
    { id: 4, heading: "Brand" },
  ]);

  const deleteFunction = (id) => {
    deleteProduct(id);
  };

  const updateFunction = (data) => {
    setUpdateProduct(true);
    setProductData(data);
  };

  return (
    <>
      {updateProductModal && (
        <UpdateProduct
          updateProduct={updateProduct}
          productData={productData}
          updateProductModal={updateProductModal}
          setUpdateProduct={setUpdateProduct}
        />
      )}
      <div className="content">
        <div>
          {loading && (
            <div>
              <Loader />
            </div>
          )}
        </div>
        {!loading && allProducts.length === 0 && (
          <div className="noProduct">There is no products</div>
        )}
        {!loading && allProducts.length !== 0 && (
          <Table
            headings={productHeading}
            tableData={allProducts}
            deleteFunction={deleteFunction}
            updateFunction={updateFunction}
          />
        )}
      </div>
    </>
  );
}
