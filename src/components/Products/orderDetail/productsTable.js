import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, <Avatar variant="rounded" src="https://img.freepik.com/free-vector/abstract-halftone-background_23-2148583453.jpg?size=664&ext=jpg&ga=GA1.2.1319481524.1588082377"/>, 'A Walk Amongst Friends - Canvas Print', '$ 10.24', 1),
  createData(2, <Avatar variant="rounded" src="https://img.freepik.com/free-vector/abstract-halftone-background_23-2148583453.jpg?size=664&ext=jpg&ga=GA1.2.1319481524.1588082377"/>, 'Lago di Braies - Canvas Print','$ 15.98', 1),
  createData(3, <Avatar variant="rounded" src="https://img.freepik.com/free-vector/abstract-halftone-background_23-2148583453.jpg?size=664&ext=jpg&ga=GA1.2.1319481524.1588082377"/>, 'Never Stop Changing - Canvas', '$ 17.92', 1),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} elevation={0}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell >Image</TableCell>
            <TableCell >Name</TableCell>
            <TableCell >Price</TableCell>
            <TableCell >Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell >{row.calories}</TableCell>
              <TableCell >{row.fat}</TableCell>
              <TableCell >{row.carbs}</TableCell>
              <TableCell >{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
