import React,{ useState} from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Switch, Route } from "react-router-dom";
import Notifications from "./Notifications";
import Products from "./Products";
import Categories from "./Categories";
import ProductDetail from "./Products/productDetail";
import NewProduct from "./Products/newProduct";
import Orders from "./Products/orders";
import OrderDetail from "./Products/orderDetail";
import AllNotifications from "./Notifications/AllNotifications";
import Users from "./Users";
import Settings from "./Settings";
// import Homepage from "./Homepage";
import Snackbar from "@material-ui/core/Snackbar";
import {connect} from 'react-redux'

const styles = (theme) => ({});

const Dashboard = ({user}) => {
  const [open, setOpen]=useState(true);
  console.log(user)
  return (
    <div style={{ margin: "auto" }}>
      <h1>Lootbox Dashboard</h1>
      {/* {!user && ( */}
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          // message={`Welcome Back ${user.first_name}`}
          message={'Welcome Back Admin'} 
          autoHideDuration={2000}
        />
      {/* )} */}
    </div>
  );
};

function Content({currentUser}) {
  // const { classes } = props;

  return (
    <Switch>
      {/* <Route exact path="/" component={Homepage} /> */}
      <Route exact path="/">
        <Dashboard user={currentUser.user} />
      </Route>
      <Route exact path="/products" component={Products} />
      <Route path="/products/detail" component={ProductDetail} />
      <Route path="/product/new" component={NewProduct} />
      <Route exact path="/orders" component={Orders} />
      <Route path="/orders/details" component={OrderDetail} />
      <Route path="/categories" component={Categories} />
      <Route exact path="/notifications" component={AllNotifications} />
      <Route path="/notifications/new" component={Notifications} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/settings" component={Settings} />
    </Switch>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps =state=>({
  currentUser:state.auth
})


export default withStyles(styles)(connect(mapStateToProps)(Content));
