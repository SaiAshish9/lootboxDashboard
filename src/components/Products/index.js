import React from 'react'
import Box from "@material-ui/core/Box";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import Table from "../../table";
import Search from "../../search";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {connect} from 'react-redux'

const Products = ({product}) => {

console.log(product)

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
            justifyContent="space-between"
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
                  background: "#e0e0e0",
                  color: "#5e5e5e",
                  fontWeight: "bold",
                  padding:10
                }}
              >
                ADD NEW PRODUCT
              </Button>
            </Typography>
          </Box>
          <Box
            style={{
              width: "100%",
              position: "relative",
              bottom: "5rem",
              padding: "2rem",
              // paddingLeft: "5vw",
            }}
          >
            <Table />
          </Box>
        </Box>
      </div>
    );
}

const mapStateToProps=state=>({
  product: state.product
})

export default connect(mapStateToProps)(Products)
