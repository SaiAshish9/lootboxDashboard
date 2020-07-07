import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import CategoryIcon from "@material-ui/icons/Category";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { withRouter } from "react-router-dom";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";

const styles = (theme) => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: "rgba(255, 255, 255, 0.7)",
    "&:hover,&:focus": {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
    },
  },
  itemCategory: {
    backgroundColor: "#3c4252",
    boxShadow: "0 -1px 0 #404854 inset",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  firebase: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
  itemActiveItem: {
    color: "#fff",
  },
  itemPrimary: {
    fontSize: "inherit",
  },
  itemIcon: {
    minWidth: "auto",
    marginRight: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
});

function Navigator(props) {
  const { classes, history, ...other } = props;

  const categories = [
    {
      id: "",
      children: [
        {
          id: "Products",
          icon: <ShoppingBasketOutlinedIcon />,
          active: history.location.pathname === "/",
          path: "/",
          options: [
            { name: "Product Detail", path: "/products/detail" },
            { name: "New Product", path: "/product/new" },
            { name: "Orders", path: "/products/orders" },
            { name: "Orders Detail", path: "/products/orderDetails" },
          ],
        },
        {
          id: "Categories",
          icon: <CategoryIcon />,
          active: history.location.pathname === "/categories",
          path: "/categories",
          options: [],
        },
        {
          id: "Notifications",
          icon: <NotificationsNoneIcon />,
          active: history.location.pathname === "/notifications",
          path: "/notifications",
          options: [],
        },
      ],
    },
  ];

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          className={clsx(classes.firebase, classes.item, classes.itemCategory)}
        >
          Lootbox
        </ListItem>
        <ListItem className={clsx(classes.item, classes.itemCategory)}>
          <ListItemIcon className={classes.itemIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.itemPrimary,
            }}
          >
            Project Overview
          </ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active, options, path }) => (
              <ListItem
                key={childId}
                onClick={() => {
                  history.push(path);
                }}
                button
                className={clsx(classes.item, active && classes.itemActiveItem)}
              >
                {!options.length && (
                  <ListItemIcon style={{ marginRight: "-50px" }}>
                    {icon}
                  </ListItemIcon>
                )}
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}
                >
                  <TreeView defaultCollapseIcon={icon} defaultExpandIcon={icon}>
                    <TreeItem nodeId="1" label={childId}>
                      {options.length > 0 &&
                        options.map((i, k) => (
                          <TreeItem
                            key={k}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              history.push(i.path);
                            }}
                            style={{
                              cursor: "pointer",
                              margin: "10px 0 ",
                              position: "relative",
                              zIndex: 3,
                            }}
                            nodeId={k + 2}
                            label={i.name}
                          />
                        ))}
                    </TreeItem>
                  </TreeView>
                </ListItemText>
              </ListItem>
            ))}

            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Navigator));
