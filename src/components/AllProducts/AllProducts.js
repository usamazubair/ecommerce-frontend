import React, { useState } from "react";
import Table from "components/Table/Table";

export default function AllProducts() {
  const [productHeading] = useState([
    { id: 0, heading: "Name" },
    { id: 1, heading: "Quantity" },
    { id: 2, heading: "Price" },
    { id: 3, heading: "Color" },
    { id: 4, heading: "Brand" },
  ]);

  return (
    <div className="content">
      <h5>All Products</h5>
      <Table headings={productHeading} />
    </div>
  );
}
