import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../Utils/firebase/firebase.utils";

import Button from "../button/Button";

import "./SignIn.scss";

import Form from "../form-input/form-input";



const defaultFormField = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFeild, setFormFeild] = useState(defaultFormField);
  const { email, password } = formFeild;


  const resetFormFeild = () => {
    setFormFeild(defaultFormField);
  };

  const logGoogleUser = async () => {
     await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFeild();

    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong/Incorrect Password");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFeild({ ...formFeild, [name]: value });
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an Account ?</h2>
      <span>Sign In with Email/Password</span>
      <form onSubmit={handleSubmit}>
        <Form
          label="email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <Form
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">SIGN IN</Button>

          <Button type='button' buttonType="google" onClick={logGoogleUser}>
            GOOGLE SIGN IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
