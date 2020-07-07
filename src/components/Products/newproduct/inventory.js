import React from 'react'
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

const inventory = () => {
    return <Box style={{ padding: "2rem", minHeight: "65vh" }}>

<TextField
label="SKU*"
fullWidth
variant="outlined"
/>

<TextField
label="Quantity"
fullWidth
defaultValue={0}
variant="outlined"
style={{ margin: "20px 0" }}
/>

    </Box>
}

export default inventory
