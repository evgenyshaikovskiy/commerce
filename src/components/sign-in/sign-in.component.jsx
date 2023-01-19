import SignUpForm from "../sign-up/sign-up-form.component";
import { signInWithGooglePopup } from "../../utils/firebase";

import { createUserDocumentFromAuth } from "../../utils/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>SIGN IN</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default SignIn;
