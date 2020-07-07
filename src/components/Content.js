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

const styles = (theme) => ({

});

function Content(props) {
  // const { classes } = props;
  
  return (
   <Switch>
     <Route  exact path="/" component={Products}/>
     <Route  path="/products/detail" component={ProductDetail}/>
     <Route  path="/product/new" component={NewProduct}/>
     <Route  path="/products/orders" component={Orders}/>
     <Route  path="/products/orderDetails" component={OrderDetail}/>
     <Route  path="/categories" component={Categories}/>
     <Route  path="/notifications" component={Notifications}/>
   </Switch>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
