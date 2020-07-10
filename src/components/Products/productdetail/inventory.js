import React from 'react'
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { updateProductInfo } from "../../../redux/reducers/actionTypes";
import { connect } from "react-redux"; 


const inventory = ({ updateProduct, products }) => {
  const handleChange = (e) => {
    updateProduct({
      key: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <Box style={{ padding: "2rem", minHeight: "65vh" }}>
      <TextField
        label="SKU*"
        defaultValue={
          products[0]["sku"]
            ? products[0]["sku"]
            : ""
        }
        onChange={handleChange}
        name="sku"
        fullWidth
        variant="outlined"
      />

      <TextField
        label="Quantity"
        defaultValue={products[0]["quantity"] ? products[0]["quantity"] : 0}
        onChange={handleChange}
        name="quantity"
        fullWidth
        variant="outlined"
        style={{ margin: "20px 0" }}
      />
    </Box>
  );
};

const mapStateToProps = (state) => ({
  products: state.product.products,
});

const mapDispatchToProps = (dispatch) => ({
  updateProduct: (payload) => dispatch(updateProductInfo(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(inventory);

