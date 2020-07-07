import React from 'react'
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

const BasicInfo = () => {
    return (
      <Box style={{ padding: "2rem",minHeight:"65vh" }}>
        <TextField
          error
          fullWidth
          variant="outlined"
          label="Name*"
          //   placeholder="Name*"
        />

        <TextField
          multiline
          rows={6}
          fullWidth
          variant="outlined"
          label="Description"
          style={{ margin: "20px 0" }}
          //   placeholder="Name*"
        />

        <TextField
          select
          placeholder="Select multiple categories"
          fullWidth
          variant="outlined"
          label="Categories"
          SelectProps={{
            native: true,
          }}
          style={{ margin: "20px 0" }}
          //   placeholder="Name*"
        >
          {[1, 2, 3, 4].map((i, k) => (
            <option key={k} value={k}>
              {i}
            </option>
          ))}
        </TextField>
        <TextField
          select
          placeholder="Select multiple tags"
          fullWidth
          variant="outlined"
          label="Tags"
          SelectProps={{
            native: true,
          }}
          style={{ margin: "20px 0" }}
          //   placeholder="Name*"
        >
          {[1, 2, 3, 4].map((i, k) => (
            <option key={k} value={k}>
              {i}
            </option>
          ))}
        </TextField>
      </Box>
    );
}

export default BasicInfo
