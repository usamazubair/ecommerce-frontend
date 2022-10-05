import React from "react";
import Modal from "components/Modal/Modal";
import { Button } from "@mui/material";

export default function CartInformation({ productData, openModal, setModal }) {
  return (
    <div>
      <Modal
        heading={"Shipping Information"}
        openModal={openModal}
        setOpen={setModal}
      >
        <div className="shippingDetailRoot">
          <div className="leftHeading">
            <div>Name:</div>
            <div>Brand:</div>
            <div>Color</div>
            <div>Image:</div>
            <div>Price</div>
            <div>Quantity</div>
          </div>
          {productData.map((product) => (
            <div>
              <div>{product.ProductId.Name}</div>
              <div>{product.ProductId.Brand}</div>
              <div>{product.ProductId.Color}</div>
              <div>
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={product.ProductId.ImagePath}
                  alt={product.ProductId.Name}
                />
              </div>
              <div>{product.ProductId.Price}</div>
              <div>{product.Quantity}</div>
            </div>
          ))}
        </div>
        <div className="shippingButton">
          <Button onClick={() => setModal(false)}>Close</Button>
        </div>
      </Modal>
    </div>
  );
}
