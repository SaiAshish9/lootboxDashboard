import React,{ useState,useEffect} from "react";
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
import {useHistory} from 'react-router-dom'


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

 function CustomizedTables({users,dispatch,toggleUserStatus}) {
  const classes = useStyles();
 const history=useHistory();
   const [users1, setUsers] = useState(users);


//  const useForceUpdate=()=> useState()[1]
//  const forceUpdate=useForceUpdate()

useEffect(()=>{
  setUsers(users)
},[users])


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
            {users1.map((usr, k) => (
              <StyledTableRow key={k}>
                <StyledTableCell>{usr.sno}</StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {usr.username}
                </StyledTableCell>
                <StyledTableCell>{usr.email}</StyledTableCell>
                <StyledTableCell>{usr.phoneno}</StyledTableCell>
                <StyledTableCell>{usr.createdOn}</StyledTableCell>
                <StyledTableCell>
                  {/* {usr.active.toString()} */}
                  {usr["active"] === false && (
                    <p
                      onClick={() => {
                        dispatch(toggleUserStatus(usr.sno));
                        // console.log(users[0]["active"]);
                        // console.log(usr['active']);
                        // forceUpdate()
                        history.push("/products");
                        history.push("/users");
                      }}
                      style={{ color: "red", cursor: "pointer" }}
                    >
                      InActive
                    </p>
                  )}
                  {usr["active"] === true && (
                    <p
                      onClick={() => {
                        dispatch(toggleUserStatus(usr.sno));
                        // forceUpdate()
                        // console.log(users[0]["active"]);
                        // history.push("/users");
                        history.push("/products");
                        history.push("/users");
                      }}
                      style={{ color: "green", cursor: "pointer" }}
                    >
                      Active
                    </p>
                  )}
                </StyledTableCell>
                <StyledTableCell>
                  {usr.blocked && (
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
        count={5}
        rowsPerPage={5}
        page={0}
        //   onChangePage={handleChangePage}
        //   onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </React.Fragment>
  );
}




// const mapDispatchToProps=dispatch =>({
//   toggleStatus:sno=>dispatch(toggleUserStatus(sno))
// })
// ,mapDispatchToProps

export default CustomizedTables