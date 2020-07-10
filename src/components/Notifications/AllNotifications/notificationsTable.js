import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
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
              <StyledTableCell>Serial Number</StyledTableCell>
              <StyledTableCell>Notification Name</StyledTableCell>
              <StyledTableCell>Created Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[...Array(5).keys()].map((row, k) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  70d4d7d0
                </StyledTableCell>
                <StyledTableCell>Dollie Bullock</StyledTableCell>
                <StyledTableCell>{new Date().toISOString()}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={20}
        rowsPerPage={10}
        page={1}
        //   onChangePage={handleChangePage}
        //   onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </React.Fragment>
  );
}
