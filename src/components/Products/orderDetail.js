import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ArrowLeftAltIcon from "@material-ui/icons/ArrowRightAlt";
import OrderDetails from "./orderDetail/orderDetails";
import Invoice from "./orderDetail/invoice";
import Products from "./orderDetail/products";


const OrderDetail = () => {
  const [value, setValue] = useState(0);

  const options = [
    "Order Details",
    "Products",
    "Invoice",
  ];

  const getComponent = () => {
    switch (value) {
      case 0:
        return <OrderDetails />;
      case 1:
        return <Products />;
      case 2:
        return <Invoice />;
      default:
        return;
    }
  };

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
            padding: "2rem",
          }}
        >
          <Box display="flex" alignItems="center">
            <IconButton style={{ color: "#fff" }}>
              <ArrowLeftAltIcon
                size={32}
                style={{
                  color: "#fff",
                  transform: "rotate(180deg)",
                }}
              />
            </IconButton>
            <Typography style={{ color: "white", marginLeft: 10 }}>
              Orders
            </Typography>
          </Box>
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
                Order 70d4d7d0
              </Typography>
              <Typography style={{ color: "#fff" }}>
                  From Dollie Bulock
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
            bottom: "2rem",
          }}
        >
          <Box display="flex" alignItems="center">
            {options.map((i, k) => (
              <Button
                onClick={() => {
                  setValue(k);
                }}
                style={{
                  padding: 15,
                  color: value === k ? "#8dd2f3 " : "#c5c9cc",
                  fontSize: 13,
                  lineHeight: "23px",
                  borderRadius: 0,
                  borderBottom: value === k && "solid 2px #8dd2f3",
                  fontWeight: 600,
                }}
                key={k}
                color="primary"
              >
                {i}
              </Button>
            ))}
          </Box>
          <Divider light />
          <Paper elevation={0} style={{ minHeight: "65vh" }}>
            {getComponent()}
          </Paper>
        </Paper>
      </Box>
    </div>
  );
};

export default OrderDetail;
