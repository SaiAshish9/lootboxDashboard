import React, {  useState } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import {connect} from 'react-redux'
import {setCurrentUser} from '../../redux/reducers/actionTypes'
import {useForm} from 'react-hook-form'
// import {useHistory} from 'react-router-dom'

const Login = ({ showSignUpScreen,dispatch }) => {
  const [open, setOpen] = useState(false);
   const {register,handleSubmit}=useForm()
  //  const history=useHistory()
  const onSubmit=({email,password}) => {
    axios({
      method: "post",
      url: "http://15.206.151.171/lootbox_backend/public/api/admin/login",
      data: {
        email,
        password
      },
      headers: {
        "X-Localization": "en",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((data) => {
        dispatch(setCurrentUser(
          {first_name:data.data.data.first_name}))
          window.location.pathname='/dashboard'
      })
      .catch((e) => setOpen(true));
  }

  return (
    <Paper
      style={{
        width: "27rem",
        padding: "2rem",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
      <p
        style={{
          color: "#2c2c2c",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "1rem",
          fontSize: "1rem",
        }}
      >
        Lootbox Welcomes You{" "}
        <span role="img" aria-label="emoji">
          🙌
        </span>{" "}
      </p>
      <TextField
        defaultValue="admin@lootbox.com"
        label="Email"
        name="email"
        type="email"
        fullWidth
        inputRef={register}
        style={{marginTop:"1rem"}}
      />
      <TextField
        style={{ margin: "2rem 0" }}
        label="Password"
        name="password"
        type="password"
        fullWidth
        inputRef={register}
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
        type="submite"
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
        Login Now
      </Button>
      <p style={{ display: "flex", fontWeight: 600, justifyContent: "center" }}>
        Not registered yet,{" "}
        <span
          onClick={() => {
            showSignUpScreen(true);
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
      <p style={{ fontWeight: "bold", textAlign: "center" }}>
        *try 12345 and 123456 as password
      </p>
      </form>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        message="There was an error logging you in !"
        autoHideDuration={1000}
      />
    </Paper>
  );
};

export default connect(null)(Login);
