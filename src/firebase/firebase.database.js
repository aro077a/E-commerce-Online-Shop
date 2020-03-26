import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();
firestore
  .collection("users")
  .doc("DhXCUdHXBfiH2pOG7Ou8")
  .collection("cartItems")
  .doc("SSkr75NknmZQYqLOQFBt");
firestore.doc("/users/DhXCUdHXBfiH2pOG7Ou8/cartItems/SSkr75NknmZQYqLOQFBt");
firestore.collection("/users/DhXCUdHXBfiH2pOG7Ou8/cartItems");
