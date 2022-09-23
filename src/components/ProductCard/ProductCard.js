import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useShopContext } from "store/contexts/shopContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShopService from "services/ShopService";

export default function Product({ product }) {
  const { setCart, cart } = useShopContext();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (!cart) {
      return;
    }

    let productData = cart?.Products?.filter(
      (cartProduct) => cartProduct.ProductId === product._id
    );

    if (productData.length !== 0) {
      setQuantity(productData[0].Quantity);
    }
  }, [cart, product]);

  const handleQuantity = (selector) => {
    if (selector === "add") {
      setQuantity(quantity + 1);
      return;
    }
    if (quantity !== 0) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = async () => {
    var productCart = { productId: product._id, Quantity: quantity };

    try {
      await ShopService.addToCart(productCart);

      setCart([...cart, productCart]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Card className="productCard" key={product._id} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        className="productCImage"
        height="140"
        image={product.ImagePath}
        alt="green iguana"
      />
      <CardContent className="productCContent">
        <Typography gutterBottom align="center" variant="h6" component="div">
          {product.Name}
        </Typography>
        <Typography variant="body2" align="center" color="text.secondary">
          <span className="productTitle">Price:</span> Rs{" "}
          {product.Price.toLocaleString("ur-PK")}
        </Typography>
        <Typography variant="body2" align="center" color="text.secondary">
          <span className="productTitle">Color:</span> {product.Color}
        </Typography>
        <Typography variant="body2" align="center" color="text.secondary">
          <span className="productTitle">Brand:</span> {product.Brand}
        </Typography>
        <div className="dropper">
          <span className="increament" onClick={() => handleQuantity("add")}>
            <AddIcon />
          </span>
          <span className="quantity">{quantity}</span>
          <span className="decreament" onClick={() => handleQuantity("remove")}>
            <RemoveIcon />
          </span>
        </div>
      </CardContent>
      <CardActions className="action">
        <Button
          disabled={quantity === 0 ? true : false}
          size="small"
          onClick={addToCart}
        >
          Add To Cart{" "}
        </Button>
      </CardActions>
    </Card>
  );
}
