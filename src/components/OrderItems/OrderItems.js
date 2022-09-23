import React from "react";

export default function OrderItems({ cartDetail }) {
  
  return (
    <div className="cartRoot">
      <img
        className="img"
        src={cartDetail.ProductId.ImagePath}
        alt={cartDetail.ProductId._id}
      />
      <div className="cartDetail">
        <div>{cartDetail.ProductId.Name}</div>
        <div>Qty: {cartDetail.Quantity}</div>
      </div>
      <div className="cartRupee">
        RS {cartDetail.ProductId.Price.toLocaleString("ur-PK")}
      </div>
    </div>
  );
}
