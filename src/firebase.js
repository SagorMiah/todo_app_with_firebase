import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB_12wM8wzGWnAs3WPSVAVcATzzwM52bsc",
  authDomain: "todo-app-f623d.firebaseapp.com",
  projectId: "todo-app-f623d",
  storageBucket: "todo-app-f623d.appspot.com",
  messagingSenderId: "425606139800",
  appId: "1:425606139800:web:50500580bddab188f5e5ed",
  measurementId: "G-T41YC9R9K5",
});

const db = firebaseApp.firestore();

export default db;
// todoappfirebasewithreact
