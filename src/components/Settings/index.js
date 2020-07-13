import React from "react";
import Box from "@material-ui/core/Box";
import Table from "./labelsTable";
import { connect } from "react-redux";
import { toggleUserStatus } from "../../redux/reducers/actionTypes";
// import {useHistory}  from 'react-router-dom'
import { createStructuredSelector } from "reselect";
import { selectUsers } from "../../redux/reducers/selectors";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Search from './search'

const Users = ({users, dispatch}) => {

  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        style={{
          height: "100vh",
          width: "100%",
        }}
      >
        <Box
          style={{
            width: "100%",
            height: "30vh",
            background: "#303542",
            padding: "2rem 0",
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            style={{
              width: "100%",
              height: "30vh",
              background: "#303542",
              padding: "2rem",
            }}
          >
            <Typography
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: 20,
                lineHeight: "32px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Labels
            </Typography>
            <Typography
              style={{
                position: "relative",
                zIndex: 10,
              }}
            >
              <Search />
            </Typography>
            <Typography>
              <Button
                style={{
                  background: "#e0e0e0",
                  color: "#5e5e5e",
                  fontWeight: "bold",
                  padding: 10,
                }}
              >
                Add Label
              </Button>
            </Typography>
          </Box>
        </Box>

        <Box
          style={{
            width: "70vw",
            margin: "auto",
            position: "relative",
            bottom: "2rem",
          }}
        >
          <Table
            users={users}
            dispatch={dispatch}
            toggleUserStatus={toggleUserStatus}
          />
        </Box>
      </Box>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  users: selectUsers,
});

export default connect(mapStateToProps)(Users);