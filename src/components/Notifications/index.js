import React from "react";
import Box from "@material-ui/core/Box";
import { DropzoneArea } from "material-ui-dropzone";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import './index.css'
import {makeStyles} from "@material-ui/core/styles";


const styles = makeStyles({
  root: {
    "	& .MuiDropzoneArea-root": {
      height: "9rem",
      background:"#000"
    },
  },
});


const Notifications = () => {
  const classes=styles()
  const [value, setValue] = React.useState("All");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      style={{ width: "100%" }}
    >
      {/* <h1 style={{ paddingLeft: "5rem" }}>Add Product</h1> */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        style={{
          padding: "2rem 5rem",
          paddingBottom: "1rem",
        }}
      >
        <Typography
          style={{
            color: "#2c2c2c",
            width: "60%",
            alignSelf: "flex-start",
            fontWeight: 600,
          }}
        >
          Upload your Notifcation / Image here
        </Typography>
        <Box style={{ width: "40%",background:'#fff',padding:'2rem' }}>
          <DropzoneArea 
          className={classes.root}
           />
        </Box>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        style={{
          padding: "1rem 5rem",
        }}
      >
        <Typography
          style={{
            color: "#2c2c2c",
            width: "60%",
            alignSelf: "flex-start",
            fontWeight: 600,
          }}
        >
          Add your notification / description & essential information here
        </Typography>
        <Box style={{ width: "40%" }}>
          <Paper
            elevation={0}
            style={{
              width: "100%",
              borderRadius: "0px",
              padding: "1rem",
            }}
          >
            <TextField
              variant="outlined"
              label="Title"
              fullWidth
              style={{ margin: "10px 0" }}
            />
            <TextField
              variant="outlined"
              multiline
              label="Description"
              rows={5}
              fullWidth
              style={{ margin: "10px 0" }}
            />
          </Paper>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        style={{
          padding: "0.3rem 5rem",
          width:"70%"
        }}
      >
        <Typography
          style={{
            color: "#2c2c2c",
            width: "30%",
            alignSelf: "flex-start",
            fontWeight: 600,
          }}
        >
          Select Users :
        </Typography>

        <FormControl component="fieldset">
          <RadioGroup
            row
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="All"
              control={<Radio />}
              label="All Users"
              style={{marginRight:"7rem"}}
            />
            <FormControlLabel
              value="Selected"
              control={<Radio />}
              label="Selected Users"
            />
          </RadioGroup>
        </FormControl>
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
          padding: "0.5rem 5rem",
        }}
      >
        <Button
          style={{
            fontWeight: "bold",
            color: "red",
            width: "50%",
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
            width: "50%",
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
