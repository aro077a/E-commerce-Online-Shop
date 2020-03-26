import React from "react";
import "./AuthPage.scss";
import SignIn from "../../components/sign-in/SignIn";
import Signup from "../../components/sign-up/Signup";

const AuthPage = () => {
  return (
    <div className="auth-page">
      <SignIn />
      <Signup />
    </div>
  );
};

export default AuthPage;
