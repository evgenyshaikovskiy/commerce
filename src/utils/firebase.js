// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUcomTn9dfCqv4MyCFCggRUu7UhfxHv74",
  authDomain: "shop-demo-project.firebaseapp.com",
  projectId: "shop-demo-project",
  storageBucket: "shop-demo-project.appspot.com",
  messagingSenderId: "715664029805",
  appId: "1:715664029805:web:efd192713ffbb5a32d2764",
  measurementId: "G-1KCSCRY8C0",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("User with such email already exists.");
      } else {
        console.log("error while creating user", error.message);
      }
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (email && password) {
    return await createUserWithEmailAndPassword(auth, email, password);
  }
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (email && password) {
    return await signInWithEmailAndPassword(auth, email, password);
  }
};

export const signOutUser = async () => await signOut(auth);
