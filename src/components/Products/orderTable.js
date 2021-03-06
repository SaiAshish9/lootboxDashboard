import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import TablePagination from "@material-ui/core/TablePagination";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#fff",
    color: "#9d9d9d",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    // "&:nth-of-type(odd)": {
    //   backgroundColor: theme.palette.action.hover,
    // },
  },
}))(TableRow);

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
  // createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  // createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  // createData("Eclair", 262, 16.0, 24, 6.0),
  // createData("Cupcake", 305, 3.7, 67, 4.3),
  // createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];//

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
      <React.Fragment>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <Checkbox />
            </StyledTableCell>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Reference</StyledTableCell>
            <StyledTableCell>Customer</StyledTableCell>
            <StyledTableCell>Total</StyledTableCell>
            <StyledTableCell>Payment</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>{" "}
            <StyledTableCell>Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[...Array(5).keys()].map((row, k) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell>
                <Checkbox />
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                1
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                70d4d7d0
              </StyledTableCell>
              <StyledTableCell>Dollie Bullock</StyledTableCell>
              <StyledTableCell>$73.31</StyledTableCell>
              <StyledTableCell>Credit Card</StyledTableCell>
              <StyledTableCell>
                <Chip
                  style={{
                    color: "#fff",
                    background: "#794acf",
                    padding:0,
                    height:30,
                    borderRadius: 10,
                  }}
                  label="Credit Card"
                />
              </StyledTableCell>
              <StyledTableCell>{new Date().toISOString()}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
           <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={5}
          rowsPerPage={5}
          page={0}
        //   onChangePage={handleChangePage}
        //   onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </React.Fragment>
  );
}
