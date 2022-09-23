import React from "react";
import CloseIcon from '@mui/icons-material/Close';

export default function CartDetail({ product }) {
  return (
    <div className="addToCartContent">
      <div>
        <img src={product.ProductId.ImagePath} alt={product.ProductId.Name} />
      </div>
      <div>
        <span>{product.ProductId.Name}</span>
      </div>
      <div>
        <span>{product.Quantity}</span>
      </div>
      <div>
        <span>RS {product.ProductId.Price.toLocaleString("ur-PK")}</span>
      </div>
      <div className="deleteProduct">
        <CloseIcon />
      </div>
    </div>
  );
}
