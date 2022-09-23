import React from "react";
import { useShopContext } from "store/contexts/shopContext";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import OrderItems from "components/OrderItems/OrderItems";

export default function OrderSumamry() {
  const { cart } = useShopContext();

  return (
    <div className="orderContent">
      <div className="heading">Order Summary</div>
      <Accordion className="allItemOrders">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="allItemHeading"
        >
          <Typography>{cart.Products.length} ITEM IN CART</Typography>
        </AccordionSummary>
        <AccordionDetails className="detail">
          {cart?.Products?.map((cartDetail) => (
            <OrderItems key={cartDetail._id} cartDetail={cartDetail} />
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
