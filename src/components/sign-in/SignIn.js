import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./SignIn.scss";

const SignIn = props => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUserCredentials({
        email: "",
        password: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <div className="sign-in">
      <h2>Already Have An Account ?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          label="email"
          onChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          label="password"
          onChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
