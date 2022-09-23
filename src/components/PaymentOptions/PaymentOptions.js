import React, { useState } from "react";
import Button from "@mui/material/Button";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ShopService from "services/ShopService";
import { useShopContext } from "store/contexts/shopContext";
import Modal from "components/Modal/Modal";
import { useNavigate } from "react-router-dom";

export default function PaymentOptions({ setActiveStep, shippingData }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const navigateTo = useNavigate();
  const [allOptions] = useState([
    { id: 1, name: "COD", description: "Cash On Delivery" },
    { id: 2, name: "Stripe", description: "Through Credit Cart" },
  ]);
  const { cart, setCart } = useShopContext();

  const handleOption = (option) => {
    setSelectedOption(option);
  };

  const placeOrder = async () => {
    try {
      await ShopService.order({
        cartId: cart._id,
        shippingDetail: { ...shippingData },
        paymentOption: selectedOption.name,
      });
      setOrderSuccess(true);
    } catch (e) {
      console.log(e);
    }
  };

  const goToHome = () => {
    setCart(null);
    navigateTo("/");
  };

  return (
    <>
      <Modal
        heading={"Order Placed"}
        openModal={orderSuccess}
        setOpen={setOrderSuccess}
      >
        <span>Your order is placed Successfully</span>
        <Button onClick={goToHome}>Cancel</Button>
      </Modal>
      <div className="pOptionRoot">
        <div className="paymentOptions">
          {allOptions.map((option) => (
            <div key={option.id}>
              {selectedOption && option.id === selectedOption.id && (
                <CheckBoxIcon onClick={() => handleOption(null)} />
              )}
              {(!selectedOption || option.id !== selectedOption.id) && (
                <CheckBoxOutlineBlankIcon
                  onClick={() => handleOption(option)}
                />
              )}
              {option.description}
              {selectedOption && option.id === selectedOption.id && (
                <Button onClick={placeOrder}>Place Order</Button>
              )}
            </div>
          ))}
        </div>
        <Button fullWidth variant="contained" onClick={() => setActiveStep(0)}>
          Back
        </Button>
      </div>
    </>
  );
}
