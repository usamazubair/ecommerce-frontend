import React, { useState } from "react";
import Stepper from "components/Stepper/Stepper";
import "assets/scss/component/checkout.scss";
import ShippingAddress from "components/ShippingAddress/ShippingAddress";
import Grid from "@mui/material/Grid";
import OrderSumamry from "components/OrderSummary/OrderSummary";
import PaymentOptions from "components/PaymentOptions/PaymentOptions";

export default function Checkout() {
  const [stepperData] = useState(["Shipping", "Review & Payments"]);
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState(null);

  return (
    <>
      <div className="stepperRoot">
        <Stepper stepperData={stepperData} activeStep={activeStep} />
      </div>

      <Grid pl={5} container justifyContent="center" spacing={5}>
        <Grid item xs={5}>
          {activeStep === 0 && (
            <ShippingAddress
              setActiveStep={setActiveStep}
              setShippingData={setShippingData}
            />
          )}
          {activeStep === 1 && (
            <PaymentOptions
              setActiveStep={setActiveStep}
              shippingData={shippingData}
            />
          )}
        </Grid>
        <Grid item pr={5} xs={7}>
          <div className="orderSummary">
            <OrderSumamry />
          </div>
        </Grid>
      </Grid>
    </>
  );
}
