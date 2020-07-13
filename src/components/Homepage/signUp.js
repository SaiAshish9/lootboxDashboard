import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import {useHistory} from 'react-router-dom'

const Login = ({showSignUpScreen}) => {
  // const history=useHistory()
  return (
    <Paper
      style={{
        width: "27rem",
        padding: "2rem",
      }}
    >
      <p
        style={{
          color: "#2c2c2c",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "1rem",
          fontSize: "1rem",
        }}
      >
        Lootbox Welcomes You Groot{" "}
        <span role="img" aria-label="emoji">
          🙌
        </span>
      </p>
      <TextField label="Email" fullWidth />
      <TextField
        style={{ margin: "1rem 0" }}
        label="Password"
        type="password"
        fullWidth
      />
      <TextField
        style={{ marginBottom: "2rem " }}
        label="Confirm Password"
        type="password"
        fullWidth
      />
      <Button
        variant="contained"
        disableElevation
        onClick={() => {
          window.location.pathname = "/dashboard";
        }}
        style={{
          background: "#2c2c2c",
          color: "#fff",
          borderRadius: 0,
          textAlign: "center",
          margin: "2rem auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Get Started
      </Button>
      <p style={{ display: "flex", fontWeight: 600, justifyContent: "center" }}>
        Already a member?,{" "}
        <span
          onClick={() => {
            showSignUpScreen(false);
          }}
          style={{
            cursor: "pointer",
            marginLeft: 10,
            fontWeight: "bold",
            color: "blue",
          }}
        >
          Sign In
        </span>
      </p>
    </Paper>
  );
};

export default Login;
