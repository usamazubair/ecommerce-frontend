import React from "react";
import Modal from "components/Modal/Modal";
import { Button } from "@mui/material";

export default function ShippingInformation({
  shippingData,
  openModal,
  setModal,
}) {
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
            <div>Address:</div>
            <div>Company:</div>
            <div>Country</div>
            <div>City</div>
            <div>Phone Number</div>
            <div>Zip Code</div>
          </div>
          <div className="rightHeading">
            <div>{shippingData.fName + " " + shippingData.lName}</div>
            <div>{shippingData.address}</div>
            <div>
              {shippingData.company === "" ? "null" : shippingData.company}
            </div>
            <div>{shippingData.country}</div>
            <div>{shippingData.city}</div>
            <div>{shippingData.pnumber}</div>
            <div>{shippingData.zipcode}</div>
          </div>
        </div>
        <div className="shippingButton">
          <Button onClick={() => setModal(false)}>Close</Button>
        </div>
      </Modal>
    </div>
  );
}
