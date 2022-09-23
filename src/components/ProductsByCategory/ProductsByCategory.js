import React, { useState } from "react";
import ProductCard from "components/ProductCard/ProductCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DropDown from "components/DropDown/DropDown";

export default function ProductsByCategory({
  Products,
  selectedCategory,
  selectedSort,
  handleChange,
}) {
  const [dropDownData] = useState([
    { _id: 1, Name: "Price" },
    { _id: 2, Name: "Product Name" },
  ]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography
        gutterBottom
        align="center"
        variant="h4"
        className="heading"
        component="div"
      >
        {selectedCategory?.Name}
      </Typography>
      <div>
        <DropDown
          heading={"Sort By"}
          dropDownData={dropDownData}
          handleChange={handleChange}
          value={selectedSort}
        />
      </div>
      <Grid container spacing={4}>
        {Products?.map((product) => (
          <Grid item xs={12} md={2} key={product._id}>
            <ProductCard key={product._id} product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
