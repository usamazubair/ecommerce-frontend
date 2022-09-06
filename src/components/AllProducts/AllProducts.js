import React, { useState } from "react";
import Table from "components/Table/Table";
import Loader from "components/Loader/Loader";
import UpdateProduct from "components/UpdateProduct";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

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
    { id: 5, heading: "Image" },
    { id: 6, heading: "Category" },
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
          <Table headings={productHeading}>
            {allProducts.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" align="center" scope="row">
                  {row?.Name}
                </TableCell>
                <TableCell align="center">{row?.Quantity}</TableCell>
                <TableCell align="center">{row?.Price}</TableCell>
                <TableCell align="center">{row?.Color}</TableCell>
                <TableCell align="center">{row?.Brand}</TableCell>
                <TableCell align="center">
                  <img
                    className="productImage"
                    src={row?.ImagePath}
                    alt={row?.Name}
                  />
                </TableCell>
                <TableCell align="center">{row?.CategoryId?.Name}</TableCell>
                <TableCell align="center">
                  <div className="tableActions">
                    <span
                      className="update"
                      onClick={() => updateFunction(row, true)}
                    >
                      Update
                    </span>
                    <span
                      className="delete"
                      onClick={() => deleteFunction(row?._id)}
                    >
                      Delete
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </Table>
        )}
      </div>
    </>
  );
}
