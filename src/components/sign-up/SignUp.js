import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../Utils/firebase/firebase.utils";

import Button  from "../button/Button";

import './SignUp.scss'

import Form from "../form-input/form-input";

const defaultFormField = {
  DisplayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFeild, setFormFeild] = useState(defaultFormField);
  const { DisplayName, email, password, confirmPassword } = formFeild;


  const resetFormFeild = () => {
    setFormFeild(defaultFormField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords Does not match!");
      return;
    }

    console.log(formFeild);

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { DisplayName }); 
      resetFormFeild();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user , email-already-in-use");
      }
      console.log("user encountered an error", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFeild({ ...formFeild, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an Account ?</h2>
      <span>Sign up with Email/Password</span>
      <form onSubmit={handleSubmit}>
        <Form
          label= 'Display Name *'
          type="text"
          required
          onChange={handleChange}
          name="DisplayName"
          value={DisplayName}
        />

        <Form
          label = 'email *'
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <Form
          label = 'Password *'
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <Form
          label = 'Confirm Password *'
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">SIGN UP</Button>
      </form>
    </div>
  );
};

export default SignUp;
