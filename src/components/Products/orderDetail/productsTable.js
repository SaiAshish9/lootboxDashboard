import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { addOrderProduct } from "../../../redux/reducers/actionTypes";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }



function SimpleTable({ products,addProduct }) {


const handlePress = (e) => {
  if (e.keyCode === 13) {
    if (e.target.value && e.target.value.length > 0) {
      addProduct({
        [e.target.name]: e.target.value,
      });
      e.target.value=''
    }
  }
};

  const classes = useStyles();

  return (
    <React.Fragment>
      <TextField
        onKeyDown={handlePress}
        name="name"
        style={{
          margin: "0 auto",
          marginBottom: " 2rem",
          display: "flex",
          justifyContent: "center",
          width: "20rem",
        }}
        label="name"
      />
      <TableContainer component={Paper} elevation={0}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell component="th" scope="row">
                  {product.ID}
                </TableCell>
                <TableCell>
                  <Avatar variant="rounded" src={product.image} />
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  products: state.order.products,
});

const mapDispatchToProps = (dispatch) => ({
  addProduct: (item) => dispatch(addOrderProduct(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleTable);
