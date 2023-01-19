import { useState, useContext } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase";
import { UserContext } from "../../context/user.context";

import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      setCurrentUser(user);
      
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      console.log("error while creating auth user", error.message);
    }
  };

  const handleFormInputChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          labelText="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleFormInputChange}
          required
        />
        <FormInput
          labelText="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleFormInputChange}
          required
        />
        <FormInput
          labelText="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleFormInputChange}
          required
        />
        <FormInput
          labelText="Confirm password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleFormInputChange}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
