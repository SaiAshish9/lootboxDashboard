import React from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux"; 
import { updateProductInfo } from "../../../redux/reducers/actionTypes";


const Shipping = ({ updateProduct, products }) => {


  const handleChange = (e) => {
    updateProduct({
      key: e.target.name,
      value: e.target.value,
    });
  };



  return (
    <Box style={{ padding: "2rem", minHeight: "65vh" }}>
      <Box display="flex" justifyContent="space-between">
        <TextField
          label="Width"
          defaultValue={products[0]["width"] ? products[0]["width"] : ""}
          onChange={handleChange}
          name="width"
          variant="outlined"
          style={{ margin: "20px 0", width: "32%" }}
        />
        <TextField
          label="Height"
          defaultValue={products[0]["height"] ? products[0]["height"] : ""}
          onChange={handleChange}
          name="height"
          variant="outlined"
          style={{ margin: "20px 0", width: "32%" }}
        />
        <TextField
          label="Depth"
          fullWidth
          defaultValue={products[0]["depth"] ? products[0]["depth"] : ""}
          onChange={handleChange}
          name="depth"
          variant="outlined"
          style={{ margin: "20px 0", width: "32%" }}
        />
      </Box>
      <TextField
        label="Weight"
        fullWidth
        defaultValue={products[0]["weight"] ? products[0]["weight"] : ""}
        onChange={handleChange}
        name="weight"
        variant="outlined"
        style={{ margin: "20px 0" }}
      />
      <TextField
        label="Extra Shipping Fee"
        defaultValue={products[0]["extraShippingFree"] ? products[0]["extraShippingFee"] : "$ 0.0"}
        onChange={handleChange}
        name="extraShippingFee"
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

export default connect(mapStateToProps, mapDispatchToProps)(Shipping)
