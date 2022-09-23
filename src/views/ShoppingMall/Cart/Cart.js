import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import "assets/scss/component/cart.scss";
import CartDetail from "components/CartDetail/CartDetail";
import { useShopContext } from "store/contexts/shopContext";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CartSummary from "components/CartSummary/CartSummary";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart } = useShopContext();
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!cart) {
      navigateTo("/");
    }
  }, [cart, navigateTo]);

  return (
    <Box sx={{ flexGrow: 1 }} p={2}>
      <Typography
        className="cartHeading"
        id="transition-modal-title"
        gutterBottom
        textAlign={"center"}
        variant="h5"
        component="h2"
      >
        Shopping Cart
      </Typography>
      <Grid container justifyContent="center" spacing={5}>
        <Grid item xs={6}>
          <div className="cartContent">
            <div className="headings">
              <div>Item</div>
              <div>Name</div>
              <div>Qty</div>
              <div>Price</div>
            </div>
            <div>
              {cart?.Products?.map((cartData, index) => (
                <CartDetail key={index} product={cartData} />
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <CartSummary />
        </Grid>
      </Grid>
    </Box>
  );
}
