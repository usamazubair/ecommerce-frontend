import React from "react";

import ShopCategories from "components/ShopCategories/ShopCategories";
import Box from "@mui/material/Box";
import Loader from "components/Loader/Loader";
import Grid from "@mui/material/Grid";
import CustomCarousel from "components/CustomCarousel/CustomCarousel";
import { useShopContext } from "store/contexts/shopContext";
import apple from "assets/images/apple.jpg";
import mobile from "assets/images/mobile.jpg";
import watches from "assets/images/watches.jpg";
import Detail from "components/Detail/Detail";

export default function Home() {
  const { allCategories } = useShopContext();

  var items = [
    {
      name: "Apple",
      img: apple,
    },
    {
      name: "Mobile",
      img: mobile,
    },
    {
      name: "Watches",
      img: watches,
    },
  ];

  return (
    <div>
      {allCategories.length === 0 && (
        <div className="loader">
          <Loader />
        </div>
      )}
      {allCategories.length !== 0 && (
        <Box sx={{ flexGrow: 1 }} pt={5}>
          <Grid container justifyContent={"center"} spacing={2}>
            <Grid item xs={2}>
              <ShopCategories />
            </Grid>
            <Grid item xs={6}>
              <CustomCarousel items={items} />
            </Grid>
          </Grid>
        </Box>
      )}
      <Detail />
    </div>
  );
}
