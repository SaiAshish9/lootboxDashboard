import React from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

const Pricing = () => {
  return (
    <Box style={{ padding: "2rem", minHeight: "65vh" }}>
      <TextField
        inputProps={{
          step: 1,
        }}
        type="step"
        defaultValue="$ 0.0"
        label="Tax Excluded Price"
        fullWidth
        variant="outlined"
        step
      />
      <TextField
        defaultValue="$ 0.0"
        label="Tax Included Price"
        fullWidth
        variant="outlined"
        style={{ margin: "20px 0" }}
      />
      <TextField
        defaultValue="$ 0.0"
        label="Tax Rate"
        fullWidth
        variant="outlined"
        style={{ margin: "20px 0" }}
      />
      <TextField
        helperText="*Add a compare price to show next to the real price"
        defaultValue="$ 0.0"
        label="Compared Price"
        fullWidth
        variant="outlined"
        style={{ margin: "20px 0" }}
      />
    </Box>
  );
};

export default Pricing;
