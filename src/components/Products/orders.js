import React from "react";
import Box from "@material-ui/core/Box";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
// import Table from "../../table";
import Search from "../../search";
import Typography from "@material-ui/core/Typography";
import OrderTable from './orderTable'

const Orders = () => {
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
          display="flex"
          alignItems="center"
        //   justifyContent="space-between"
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
            <ShoppingBasketOutlinedIcon style={{ marginRight: 5 }} />
            Orders
          </Typography>
          <Typography
            style={{
              position: "relative",
              zIndex: 10,
              marginLeft:"27%",
              alignSelf: "center"
            }}
          >
            <Search />
          </Typography>

        </Box>
        <Box
          style={{
            width: "100%",
            position: "relative",
            bottom: "2rem",
            padding: "2rem",
            // paddingLeft: "5vw",
          }}
        >
          <OrderTable />
        </Box>
      </Box>
    </div>
  );
};

export default Orders;
