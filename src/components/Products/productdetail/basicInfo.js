import React from 'react'
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip"
// import { Button } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import {connect} from 'react-redux'
import {updateProductInfo} from '../../../redux/reducers/actionTypes'

const BasicInfo = ({updateProduct,products}) => {


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



const handleChange=e=>{
  updateProduct({
    key:e.target.name,
    value:e.target.value
  })
}




    return (
      <Box style={{ padding: "2rem", minHeight: "65vh" }}>
        <TextField
          // error
          fullWidth
          variant="outlined"
          label="Name*"
          name="name"
          defaultValue={products[0]["name"]}
          //   placeholder="Name*"
          onChange={handleChange}
        />

        <TextField
          multiline
          rows={6}
          fullWidth
          variant="outlined"
          name="description"
          defaultValue={products[0]["description"]}
          label="Description"
          style={{ margin: "20px 0" }}
          onChange={handleChange}
          //   placeholder="Name*"
        />

        <TextField
          select
          placeholder="Select multiple categories"
          fullWidth
          variant="outlined"
          defaultValue={1}
          name="categories"
          label="Categories"
          onChange={handleChange}
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
          defaultValue={1}
          onChange={handleChange}
          name="tags"
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

const mapDispatchToProps=dispatch=>({
  updateProduct:payload=>dispatch(updateProductInfo(payload))
})

const mapStateToProps=state=>({
  products:state.product.products
})


export default connect(mapStateToProps,mapDispatchToProps)(BasicInfo)
