import React from 'react'
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import {useHistory} from 'react-router-dom'

const Login = ({showSignUpScreen}) => {
  // const history = useHistory()
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
          Hola Groot, Welcome Back !
        </p>
        <TextField label="Email" fullWidth />
        <TextField
          style={{ margin: "2rem 0" }}
          label="Password"
          type="password"
          fullWidth
        />
        <p
          style={{
            cursor: "pointer",
            color: "blue",
            textAlign: "end",
            fontWeight: "bold",
          }}
        >
          Forgot Password?
        </p>
        <Button
          variant="contained"
          disableElevation
          style={{
            background: "#2c2c2c",
            color: "#fff",
            borderRadius: 0,
            textAlign: "center",
            margin: "2rem auto",
            display: "flex",
            justifyContent: "center",
          }}
          onClick={() => {
            window.location.pathname="/dashboard";
          }}
        >
          Login Now
        </Button>
        <p
          style={{ display: "flex", fontWeight: 600, justifyContent: "center" }}
        >
          Not registered yet,{" "}
          <span
          onClick={() => {
            showSignUpScreen(true)
          }}
            style={{
              cursor: "pointer",
              marginLeft: 10,
              fontWeight: "bold",
              color: "blue",
            }}
          >
            Sign Up
          </span>
        </p>
      </Paper>
    );
}

export default Login
