import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import AddCategories from './addCategories'
import AddSubCategory from './addSubCategory'
import {Route,Switch,withRouter} from 'react-router-dom'

const ProductDetail = ({history}) => {

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
          //   display="flex"
          //   alignItems="center"
          //   justifyContent="space-between"
          style={{
            width: "100%",
            height: "30vh",
            background: "#303542",
            padding: "2rem",
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            style={{ marginBottom: "30px" }}
          >
            <Box>
              <Typography
                style={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 20,
                  lineHeight: "32px",
                  display: "flex",
                  alignItems: "center",
                  // marginBottom: "5rem",
                }}
              >
                {history.location.pathname === "/categories" &&
                  " Add Categories"}
                {history.location.pathname === "/categories/add/subcategory" &&
                  " Add  Sub Category"}
              </Typography>
            </Box>
          </Box>

          <Typography
            style={{
              position: "relative",
              zIndex: 10,
              marginLeft: "27%",
              alignSelf: "center",
            }}
          ></Typography>
        </Box>

        <Paper
          style={{
            width: "70vw",
            // height: "50vh",
            margin: "auto",
            position: "relative",
            bottom: "3rem",
          }}
        >
          <Box display="flex" alignItems="center"></Box>
          <Divider light />
          <Paper elevation={0} style={{ minHeight: "65vh", padding: "2rem" }}>
            <Switch>
              <Route exact path="/categories" component={AddCategories} />
              <Route path="/categories/add/subcategory" component={AddSubCategory} />
            </Switch>
          </Paper>
        </Paper>
      </Box>
    </div>
  );
};

export default withRouter(ProductDetail);
