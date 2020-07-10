import React from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import {connect} from 'react-redux' 
import { updateProductInfo } from "../../../redux/reducers/actionTypes";


const Pricing = ({updateProduct,products}) => {


const handleChange = (e) => {
  updateProduct({
    key: e.target.name,
    value: e.target.value,
  });
};



  return (
    <Box style={{ padding: "2rem", minHeight: "65vh" }}>
      <TextField
        inputProps={{
          step: 1,
        }}
        type="step"
        defaultValue={
          products[0]["taxExcludedPrice"]
            ? products[0]["taxExcludedPrice"]
            : "$ 0.0"
        }
        onChange={handleChange}
        name="taxExcludedPrice"
        label="Tax Excluded Price"
        fullWidth
        variant="outlined"
        step
      />
      <TextField
        defaultValue={
          products[0]["taxIncludedPrice"]
            ? products[0]["taxIncludedPrice"]
            : "$ 0.0"
        }
        onChange={handleChange}
        name="taxIncludedPrice"
        label="Tax Included Price"
        fullWidth
        variant="outlined"
        style={{ margin: "20px 0" }}
      />
      <TextField
        defaultValue={
          products[0]["taxRate"] ? products[0]["taxRate"] : "$ 0.0"
        }
        onChange={handleChange}
        name="taxRate"
        label="Tax Rate"
        fullWidth
        variant="outlined"
        style={{ margin: "20px 0" }}
      />
      <TextField
        helperText="*Add a compare price to show next to the real price"
        defaultValue={
          products[0]["comparedPrice"]
            ? products[0]["comparedPrice"]
            : "$ 0.0"
        }
        onChange={handleChange}
        name="comparedPrice"
        label="Compared Price"
        fullWidth
        variant="outlined"
        style={{ margin: "20px 0" }}
      />
    </Box>
  );
};

const mapStateToProps =state=>({
products: state.product.products
})

const mapDispatchToProps = (dispatch) => ({
  updateProduct: (payload) => dispatch(updateProductInfo(payload)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Pricing);
