import React from "react";
import Box from "@material-ui/core/Box";
import { DropzoneArea } from "material-ui-dropzone";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Notifications = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      style={{ width: "100%" }}
    >
      <h1 style={{ paddingLeft: "5rem" }}>Add Product</h1>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        style={{
          padding: "5rem",
        }}
      >
        <Typography
          style={{
            color: "#2c2c2c",
            width: "40%",
            alignSelf: "flex-start",
            fontWeight: 600,
          }}
        >
          Upload your Product Image here
        </Typography>
        <Box style={{ width: "60%" }}>
          <DropzoneArea />
        </Box>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        style={{
          padding: "2rem 5rem",
        }}
      >
        <Typography
          style={{
            color: "#2c2c2c",
            width: "40%",
            alignSelf: "flex-start",
            fontWeight: 600,
          }}
        >
          Upload your Product Image here
        </Typography>
        <Box style={{ width: "60%" }}>
          <Paper
            elevation={0}
            style={{
              width: "100%",
              borderRadius: "0px",
              padding: "3rem",
            }}
          >
            <Typography variant="contained" component="h2">
              Name
            </Typography>
            <TextField
              variant="filled"
              fullWidth
              style={{ margin: "20px 0" }}
            />
            <Typography variant="contained" component="h2">
              Description
            </Typography>
            <TextField
              variant="filled"
              multiline
              rows={7}
              fullWidth
              style={{ margin: "20px 0" }}
            />
            <Typography variant="contained" component="h2">
              Unit
            </Typography>
            <TextField
              variant="filled"
              fullWidth
              style={{ margin: "20px 0" }}
            />
          </Paper>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        style={{
          // padding: "2rem",
          position: "relative",
          top: "2rem",
          background: "#fff",
          padding: "3rem 5rem",
        }}
      >
        <Button
          style={{
            fontWeight: "bold",
            color: "red",
            width: "30rem",
            padding: 10,
            borderRadius: 0,
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          disableElevation
          style={{
            fontWeight: "bold",
            color: "#fff",
            width: "30rem",
            padding: 10,
            borderRadius: 0,
            background: "#2c2c2c",
            marginLeft: "20px",
          }}
        >
          Create Product
        </Button>
      </Box>
    </Box>
  );
};

export default Notifications;
