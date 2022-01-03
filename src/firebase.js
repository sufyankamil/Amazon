// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF-x3P3e1P9Tsnjgjg-t3YnyYdmLqFAoI",
  authDomain: "clone-a7587.firebaseapp.com",
  projectId: "clone-a7587",
  storageBucket: "clone-a7587.appspot.com",
  messagingSenderId: "508439967215",
  appId: "1:508439967215:web:b73d82c1380b984711f21a",
  measurementId: "G-6CX05EZKCK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
