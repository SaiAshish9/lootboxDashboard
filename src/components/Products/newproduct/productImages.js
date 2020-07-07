import React,{useState} from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const ProductImages = () => {
  
  const [elevation,setElevation]=useState(1)

  return (
    <Box style={{ padding: "2rem", minHeight: "65vh" }}>
      <Paper
        elevation={elevation}
        onMouseEnter={() => {
          setElevation(10);
        }}
        onMouseLeave={() => {
          setElevation(1);
        }}
        style={{
          height: "12rem",
          width: "12rem",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CloudUploadIcon
          style={{
              color:"#757575",
              fontSize:40
            }}
          size={32}
        />
      </Paper>
    </Box>
  );
};

export default ProductImages;
