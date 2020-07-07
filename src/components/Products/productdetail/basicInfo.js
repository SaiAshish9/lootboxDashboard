import React from 'react'
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip"
// import { Button } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

const BasicInfo = () => {


const styles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      // borderColor: "red",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      // borderColor: "red",
    },
    "& .MuiOutlinedInput-root .Mui-focused .MuiOutlinedInput-notchedOutline": {
      // borderColor: "yellow",
      // outline:"none"
    },
  },
});

const classes=styles()
    return (
      <Box style={{ padding: "2rem", minHeight: "65vh" }}>
        <TextField
          // error
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
          // defaultValue={}
          label="Categories"
          className={classes.root}
          SelectProps={{
            native: true,
          }}
          style={{ margin: "20px 0" }}
          // placeholder="Name*"
        >
          {[1, 2, 3, 4].map((i, k) => (
            <option key={k} value={k}>
              {i}
              {/* <Button>{k}</Button> */}
            </option>
          ))}
          <Chip label="Canvas Print" />
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
