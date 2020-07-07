import React,{useState} from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Avatar } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";

const ProductImages = () => {
  
  const [elevation,setElevation]=useState(1)

  return (
    <Box
      display="flex"
      // justifyContent="space-between"
      flexWrap="wrap"
      style={{ padding: "2rem", minHeight: "65vh" }}
    >
      <Paper
        elevation={elevation}
        onMouseEnter={() => {
          setElevation(10);
        }}
        onMouseLeave={() => {
          setElevation(1);
        }}
        style={{
          height: "9rem",
          width: "9rem",
          cursor: "pointer",
          display: "flex",
          margin: "0 10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CloudUploadIcon
          style={{
            color: "#757575",
            fontSize: 40,
          }}
          size={32}
        />
      </Paper>

      {[...Array(10).keys()].map((i, k) => (
        <Paper
          key={k}
          // elevation={elevation}
          onMouseEnter={() => {
            // setElevation(10);
          }}
          onMouseLeave={() => {
            // setElevation(1);
          }}
          style={{
            height: "9rem",
            width: "9rem",
            margin: "0 10px",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // justifyContent: "center",
            background: "#ecf0f3",
            padding: 10,
          }}
        >
          {k === 0 && (
            <StarIcon
              style={{
                color: "#ffa726",
                position: "absolute",
                zIndex: 2,
                marginLeft: "3.6rem",
              }}
            />
          )}
          <Avatar
            variant="rounded"
            style={{
              height: "5rem",
              width: "5rem",
              marginTop: "1.5rem",
            }}
            src="https://image.freepik.com/free-vector/minimalist-cv-template_52683-39826.jpg"
          />
        </Paper>
      ))}
    </Box>
  );
};

export default ProductImages;
