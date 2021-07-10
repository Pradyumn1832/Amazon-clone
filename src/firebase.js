import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB7v1gwSr5DLtqNH7dQKLKTDZu3MxC8Pc",
  authDomain: "clone-317a6.firebaseapp.com",
  projectId: "clone-317a6",
  storageBucket: "clone-317a6.appspot.com",
  messagingSenderId: "631848112507",
  appId: "1:631848112507:web:926b5728153aa969776dde",
  measurementId: "G-NXTK4WT6NY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
