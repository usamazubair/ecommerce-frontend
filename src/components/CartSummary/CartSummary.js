import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useShopContext } from "store/contexts/shopContext";
import { Link } from "react-router-dom";

export default function CartSummary() {
  const { cart } = useShopContext();
  const [totalPrice, setTotalPrice] = useState(0);
  const [estimationTax] = useState(0);
  const [orderPrice, setOrderPrice] = useState(0);

  useEffect(() => {
    let totalNumber = 0;
    cart.Products.map((cartData) => (totalNumber += cartData.ProductId.Price));
    setTotalPrice(totalNumber);

    setOrderPrice(totalNumber + estimationTax);

    //eslint-disable-next-line
  }, [cart]);

  return (
    <div className="cartSummary">
      <Card variant="outlined" sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography fontWeight={200} variant="h5" gutterBottom>
            Summary
          </Typography>
          <Typography className="estimation" variant="body1" gutterBottom>
            ESTIMATE SHIPPING AND TAX
          </Typography>
          <div className="totalPrice">
            <div>
              <span>Subtotal</span>
              <span>Tax</span>
            </div>
            <div>
              <span>RS {totalPrice.toLocaleString("ur-PK")}</span>
              <span>{estimationTax}</span>
            </div>
          </div>
          <div className="orderSummary">
            <Typography variant="body2">Order Total</Typography>
            <Typography variant="body2">
              RS {orderPrice.toLocaleString("ur-PK")}
            </Typography>
          </div>
        </CardContent>
        <CardActions className="cartAction">
          <Link to={`/user/checkout`} style={{ textDecoration: "none" }}>
            <Button variant="contained">Go To Checkout</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
