import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {Switch,Route} from 'react-router-dom'
import Notifications from "./Notifications"
import Products from "./Products"
import Categories from "./Categories"
import ProductDetail from "./Products/productDetail"
import NewProduct from "./Products/newProduct"
import Orders from "./Products/orders"
import OrderDetail from "./Products/orderDetail"
import AllNotifications from "./Notifications/AllNotifications"
import Users from "./Users"

const styles = (theme) => ({

});

const Homepage=()=>(
  <div style={{margin:'auto'}}>
<h1>
  Lootbox
  Dashboard 
</h1>
  </div>
)

function Content(props) {
  // const { classes } = props;
  
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/products" component={Products} />
      <Route path="/products/detail" component={ProductDetail} />
      <Route path="/product/new" component={NewProduct} />
      <Route exact path="/orders" component={Orders} />
      <Route path="/orders/details" component={OrderDetail} />
      <Route path="/categories" component={Categories} />
      <Route exact path="/notifications" component={AllNotifications} />
      <Route path="/notifications/new" component={Notifications} />
      <Route exact path="/users" component={Users} />
    </Switch>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
