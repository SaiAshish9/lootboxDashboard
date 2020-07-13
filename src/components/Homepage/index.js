import React, { useState } from "react";
import Login from "./login";
import SignUp from "./signUp";

const Homepage = () => {
  const [signUp, showSignUpScreen] = useState(!true);
  return (
    <div style={{ margin: "auto" }}>
      {signUp ? <SignUp showSignUpScreen={showSignUpScreen} /> : <Login showSignUpScreen={showSignUpScreen} />}
    </div>
  );
};

export default Homepage;
