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
import InfoIcon from "@material-ui/icons/InfoOutlined";

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
              <StyledTableCell>Username</StyledTableCell>
              <StyledTableCell>Email Id</StyledTableCell>
              <StyledTableCell>Mobile No:</StyledTableCell>
              <StyledTableCell>CreatedOn_Date</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[...Array(5).keys()].map((row, k) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell>
                  F8BGD6H
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  Thanos
                </StyledTableCell>
                <StyledTableCell>abc@gmail.com</StyledTableCell>
                <StyledTableCell>987654321</StyledTableCell>
                <StyledTableCell>{new Date().toISOString()}</StyledTableCell>
                <StyledTableCell>
                  {k % 2 === 0 ? <p
                  style={{color:'red'}}
                  >InActive</p> : <p
                  style={{color:'green'}}
                  >InActive</p>}
                </StyledTableCell>
                <StyledTableCell>
                  {k % 2 === 0 && (
                    <InfoIcon
                      style={{
                        // color: "green",
                        cursor: "pointer",
                      }}
                    />
                  )}
                </StyledTableCell>
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
