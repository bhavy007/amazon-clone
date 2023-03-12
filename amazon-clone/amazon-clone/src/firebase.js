// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDMVxAZXeLeEYPvH6lLD0i2ekG_kbNVC_8",
    authDomain: "clone-7dee2.firebaseapp.com",
    projectId: "clone-7dee2",
    storageBucket: "clone-7dee2.appspot.com",
    messagingSenderId: "42458118057",
    appId: "1:42458118057:web:5d75dbf39b136291dc36b8",
    measurementId: "G-F5RDG2LBKC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };