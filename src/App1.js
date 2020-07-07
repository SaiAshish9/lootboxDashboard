import React, { useState } from "react";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";
import withStyles from "@material-ui/core/styles/withStyles";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import CategoryIcon from "@material-ui/icons/Category";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Table from "./table";
import Search from "./search";
import Button from "@material-ui/core/Button";

function App({ classes }) {
  const [swipe, setSwipeRight] = useState(false);

  return (
    <React.Fragment>
      <Box
        style={{
          background: "#f5f5f5",
        }}
      >
        <Drawer
          open={!swipe}
          elevation={0}
          classes={{
            paper: {
              background: "red",
            },
          }}
          transitionDuration={0}
          BackdropProps={{
            invisible: true,
          }}
          style={{
            width: "15vw",
            position: "inherit",
            zIndex: -1,
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            // elevation={2}
            style={{
              height: "10vh",
              width: "100%",
              background: "#4c5782",
              borderRadius: "0px",
              position: "relative",
              zIndex: 2,
              overflow: "hidden",
              // paddingLeft: 20,
              // boxShadow:'0 0 10px #fff'
            }}
          >
            <Typography
              style={{
                color: "#fff",
                marginLeft: 20,
                fontWeight: "bold",
              }}
            >
              Lootbox
            </Typography>
          </Box>
          <Box
            style={{
              minHeight: "90vh",
              width: "100%",
              background: "#f5f5f5",
            }}
          >
            <List
              style={{
                marginTop: "10vh",
                width: "15vw",
              }}
            >
              {[
                "Products",
                "Categories",
                "Notifications",
                "Authentication",
              ].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {
                      [
                        <ShoppingBasketOutlinedIcon />,
                        <CategoryIcon />,
                        <NotificationsNoneIcon />,
                        <LockOutlinedIcon />,
                      ][index]
                    }
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>{text}</Typography>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box
          style={{
            marginLeft: !swipe && "15vw",
          }}
        >
          <AppBar
            position="static"
            elevation={0}
            className={classes.appBar}
            style={{
              background: "#3d4977",
              height: "10vh",
            }}
          >
            <Toolbar>
              <IconButton
                onClick={() => {
                  setSwipeRight(!swipe);
                }}
                style={{
                  color: "#fff",
                }}
              >
                <SvgIcon>
                  <path d="M4 18h11c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h8c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm17.3 7.88L17.42 12l2.88-2.88c.39-.39.39-1.02 0-1.41a.9959.9959 0 00-1.41 0L15.3 11.3c-.39.39-.39 1.02 0 1.41l3.59 3.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z"></path>
                </SvgIcon>
              </IconButton>
            </Toolbar>
          </AppBar>

          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            // justifyContent="center"
            style={{
              borderLeft: !swipe && "0.1rem solid #ebebeb",
              minHeight: "100vh",
              width: "100%",
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-around"
              style={{
                marginTop: "10vh",
                background: "#fff",
                width: "100%",
                height: "30vh",
              }}
            >
              <Typography
                style={{
                  color: "#3d4977",
                  fontWeight: "bold",
                  fontSize: 20,
                  lineHeight: "32px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ShoppingBasketOutlinedIcon style={{ marginRight: 5 }} />
                Products
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
                    background: "#3d4977",
                    textTransform: "none",
                    color: "white",
                    fontSize: 20,
                    fontWeight: 400,
                    lineHeight: "32px",
                  }}
                >
                  Submit
                </Button>
              </Typography>
            </Box>
            <Box
              style={{
                width: "80%",
                position: "relative",
                bottom: "3rem",
                // paddingLeft: "5vw",
              }}
            >
              <Table />
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}

const styles = (theme) => ({
  appBar: {
    position: "fixed",
    zIndex: theme.zIndex.drawer + 1,
  },
});

export default withStyles(styles)(App);
