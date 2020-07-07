import React from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

const Shipping = () => {
  return (
    <Box style={{ padding: "2rem", minHeight: "65vh" }}>
      <Box display="flex" justifyContent="space-between">
        <TextField
          label="Width"
          variant="outlined"
          style={{ margin: "20px 0", width: "32%" }}
        />
        <TextField
          label="Height"
          variant="outlined"
          style={{ margin: "20px 0", width: "32%" }}
        />
        <TextField
          label="Depth"
          fullWidth
          variant="outlined"
          style={{ margin: "20px 0", width: "32%" }}
        />
      </Box>
      <TextField
        label="Weight"
        fullWidth
        variant="outlined"
        style={{ margin: "20px 0" }}
      />
      <TextField
        defaultValue="$ 0"
        label="Extra Shipping Fee"
        fullWidth
        variant="outlined"
        style={{ margin: "20px 0" }}
      />
    </Box>
  );
};

export default Shipping;
