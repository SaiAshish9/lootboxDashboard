import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
// import Grid from "@material-ui/core/Grid";
// import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {Switch,Route} from 'react-router-dom'
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const lightColor = "rgba(255, 255, 255, 0.7)";

const styles = (theme) => ({
  secondaryBar: {
    zIndex: 0,
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    textDecoration: "none",
    color: lightColor,
    "&:hover": {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
});

function Header(props) {
  const { classes, onDrawerToggle } = props;

  return (
    <React.Fragment>
      <AppBar
        color="primary"
        position="sticky"
        elevation={0}
        style={{
          height: "8vh",
          background: "#f5f5f5",
        }}
      >
        <Box
          style={{ height: "8vh", padding: "0 20px" }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Switch>
            <Route exact path="/notifications">
              <Box display="flex" alignItems="center">
                <IconButton>
                  <ArrowBackIcon />
                </IconButton>
                <Typography
                  style={{
                    marginLeft: 10,
                    fontWeight: "bold",
                    color: "#515a63",
                  }}
                >
                  ADD NOTIFICATION HERE
                </Typography>
              </Box>
            </Route>
            <Route exact path="/">
              <Typography
                style={{ marginLeft: 10, fontWeight: "bold", color: "#515a63" }}
              >
                HOME
              </Typography>
            </Route>
            <Route exact path="/products">
              <Typography
                style={{ marginLeft: 10, fontWeight: "bold", color: "#515a63" }}
              >
                PRODUCTS
              </Typography>
            </Route>
            <Route exact path="/products/detail">
              <Typography
                style={{ marginLeft: 10, fontWeight: "bold", color: "#515a63" }}
              >
                PRODUCT DETAIL
              </Typography>
            </Route>
            <Route exact path="/product/new">
              <Typography
                style={{ marginLeft: 10, fontWeight: "bold", color: "#515a63" }}
              >
                NEW PRODUCT
              </Typography>
            </Route>
            <Route exact path="/orders">
              <Typography
                style={{ marginLeft: 10, fontWeight: "bold", color: "#515a63" }}
              >
                ORDERS
              </Typography>
            </Route>
            <Route exact path="/orders/detail">
              <Typography
                style={{ marginLeft: 10, fontWeight: "bold", color: "#515a63" }}
              >
                ORDERS DETAIL
              </Typography>
            </Route>
            <Route exact path="/categories">
              <Typography
                style={{ marginLeft: 10, fontWeight: "bold", color: "#515a63" }}
              >
                ADD CATEGORIES
              </Typography>
            </Route>
            <Route exact path="/categories/add/subcategory">
              <Typography
                style={{ marginLeft: 10, fontWeight: "bold", color: "#515a63" }}
              >
                ADD SUB CATEGORY
              </Typography>
            </Route>
          </Switch>
        </Box>

        {/* <Grid > */}
        {/* hi */}
        {/* </Grid> */}
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);
