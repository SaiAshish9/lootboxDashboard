import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
// import Dialog from "@material-ui/core/Dialog";
import Paper from "@material-ui/core/Paper";
import Backdrop from "@material-ui/core/Backdrop";
import Checkbox from "@material-ui/core/Checkbox";

const styles = (theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
});

function Notifications(props) {
  const { classes } = props;
  const [open, setOpen] = useState(false);
  const [userType, setUserType] = useState("0");
  const inputEl = useRef(null);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      style={{ width: "40%", margin: "auto" }}
    >
      <Typography
        style={{
          color: "#18202c",
          fontWeight: "bold",
        }}
      >
        ADD NOTIFICATION HERE
      </Typography>
      <Input fullWidth placeholder="Title" style={{ marginTop: "3rem" }} />
      <Input
        ref={inputEl}
        fullWidth
        placeholder="Description"
        style={{ marginTop: "3rem" }}
      />
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="icon-button-file"
        ref={inputEl}
        type="file"
      />
      {/* <label htmlFor="icon-button-file"> */}

      <Input
        fullWidth
        placeholder="Upload"
        style={{
          marginTop: "3rem",
          cursor: "pointer",
        }}
        startAdornment={
          <InputAdornment position="start">
            <IconButton
              onClick={() => {
                inputEl.current.click();
              }}
            >
              <PhotoCamera color="primary" />
            </IconButton>
          </InputAdornment>
        }
      />

      <Box
        style={{ marginTop: "3rem", width: "100%" }}
        display="flex"
        alignItems="center"
        justifyContent="space-around"
      >
        <FormControl component="fieldset">
          <FormLabel component="legend">
            <Typography style={{ fontWeight: "bold" }}>Show to</Typography>
          </FormLabel>
          <RadioGroup
            value={userType}
            onChange={(e) => {
              setUserType(e.target.value);
            }}
          >
            <FormControlLabel value="0" control={<Radio />} label="All Users" />
            <FormControlLabel
              value="1"
              control={
                <Radio
                  onClick={() => {
                    setOpen(true);
                  }}
                />
              }
              label="Selected Users"
            />
          </RadioGroup>
        </FormControl>

        <Button variant="contained" color="secondary">
          <Typography style={{ fontWeight: "bold" }}>
            Publish Notification
          </Typography>
        </Button>

        <Backdrop className={classes.backdrop} open={open}>
          <Paper
            style={{
              height: "80vh",
              width: "30vw",
              padding: "2rem",
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              // style={{marginBottom:'5vh'}}
            >
              <Typography color="primary" style={{ fontWeight: "bold" }}>
                List of Users
              </Typography>
              <Button
                onClick={() => {
                  setOpen(false);
                }}
              >
                <Typography style={{ fontWeight: "bold", color: "red" }}>
                  X
                </Typography>
              </Button>
            </Box>

            {[...Array(9).keys()].map((i, k) => (
              <Box
                display="flex"
                key={k}
                alignItems="center"
                justifyContent="space-between"
                // style={{margin:'0.1rem 0'}}
              >
                <Typography style={{ fontWeight: "bold" }}>
                  User {k + 1}
                </Typography>
                <Button>
                  <Typography style={{ fontWeight: "bold", color: "red" }}>
                    <Checkbox checked={k % 2 === 0} />
                  </Typography>
                </Button>
              </Box>
            ))}

            <Box display="flex" justifyContent="center">
              <Button
                onClick={() => {
                  setOpen(false);
                }}
                color="primary"
                style={{
                  padding: "0.5rem 3rem",
                }}
                variant="contained"
              >
                <Typography style={{ fontWeight: "bold" }}>DONE</Typography>
              </Button>
            </Box>
          </Paper>
        </Backdrop>
      </Box>
    </Box>
  );
}

Notifications.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Notifications);
