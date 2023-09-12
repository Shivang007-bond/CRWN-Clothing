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
  onAuthStateChanged
} from "firebase/auth";

import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu1GXjh3flp_0o0K4u1hgvY_BSrHryrno",
  authDomain: "crwn-clothing-db-dcca0.firebaseapp.com",
  projectId: "crwn-clothing-db-dcca0",
  storageBucket: "crwn-clothing-db-dcca0.appspot.com",
  messagingSenderId: "1082324850084",
  appId: "1:1082324850084:web:58a8378fe681a28f931d31",
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

export const Db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo
) => {
  if(!userAuth) return;
  
  const userDocRef = doc(Db, "users", userAuth.uid);

  const userSnap = await getDoc(userDocRef);

  //if user data does not exists
  //create/set the document withndata from userAuth in the collection
  if (!userSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }

    //if user data exists
    //return userDoc
    return userDocRef;
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async() => signOut(auth);

export const onAuthUserStateChanged = (callback) => {
  onAuthStateChanged(auth,callback)
}
