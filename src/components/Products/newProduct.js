import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ArrowLeftAltIcon from "@material-ui/icons/ArrowRightAlt";
import BasicInfo from "./newproduct/basicInfo";
import ProductImages from './newproduct/productImages'
import Pricing from "./newproduct/pricing"
import Inventory from "./newproduct/inventory"
import Shipping from "./newproduct/shipping"

const NewProduct = () => {
  const [value, setValue] = useState(0);

  const options = [
    "Basic Info",
    "Product Images",
    "Pricing",
    "Inventory",
    "Shipping",
  ];

  const getComponent=()=>{
      switch(value) {
          case 0:return <BasicInfo/>
          case 1:return <ProductImages/>
          case 2:return <Pricing/>
          case 3:return <Inventory/>
          case 4:return <Shipping/>
          default:return
      }
  }


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
          <IconButton style={{ color: "#fff" }}>
            <ArrowLeftAltIcon
              size={32}
              style={{
                color: "#fff",
                transform: "rotate(180deg)",
              }}
            />
          </IconButton>
          <Box
            display="flex"
            alignItems="center"
            style={{ marginBottom: "30px" }}
          >
            <Avatar
              variant="rounded"
              style={{
                height: "3rem",
                marginRight: 10,
                width: "3rem",
              }}
              src="http://localhost:3001/assets/images/ecommerce/product-image-placeholder.png"
            />

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
                New Product
              </Typography>
              <Typography style={{ color: "#fff" }}>Product Detail</Typography>
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
          <Paper
          elevation={0}
          style={{minHeight: "65vh"}}
          >{getComponent()}</Paper>
        </Paper>
      </Box>
    </div>
  );
};

export default NewProduct;
