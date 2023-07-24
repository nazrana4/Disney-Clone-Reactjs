// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBFTTMx1ZUZL_HXi40SCKmljJq2eqd6QUo",
  authDomain: "disneyclone-2e274.firebaseapp.com",
  projectId: "disneyclone-2e274",
  storageBucket: "disneyclone-2e274.appspot.com",
  messagingSenderId: "101945236402",
  appId: "1:101945236402:web:c3ed626b19635cf5fba2ab",
  measurementId: "G-0BH0HJZSNF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;




