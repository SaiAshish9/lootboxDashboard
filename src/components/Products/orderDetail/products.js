import React from "react";
import Box from "@material-ui/core/Box";
import ProductsTable from './productsTable'

const ProductImages = () => {

  return (
    <Box style={{ padding: "2rem", minHeight: "65vh" }}>
    <ProductsTable/>
    </Box>
  );
};

export default ProductImages;
