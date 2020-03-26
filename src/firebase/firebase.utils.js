import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_s1Di_rNeWOn8ieb1RfkuKqaYHUZTglo",
  authDomain: "clothes-shopping-app.firebaseapp.com",
  databaseURL: "https://clothes-shopping-app.firebaseio.com",
  projectId: "clothes-shopping-app",
  storageBucket: "clothes-shopping-app.appspot.com",
  messagingSenderId: "473705203078",
  appId: "1:473705203078:web:f5b23139c5ca19de779807",
  measurementId: "G-SETQFCCZLW"
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
