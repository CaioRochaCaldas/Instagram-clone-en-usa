import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp( {
   /* Your put firebase config here  */
   apiKey: "AIzaSyDuiQDy6qsSKsun4Be_eS9RNE_VQjRHeVY",
  authDomain: "instagram-clone-en-usa-cd1ce.firebaseapp.com",
  databaseURL: "https://instagram-clone-en-usa-cd1ce.firebaseio.com",
  projectId: "instagram-clone-en-usa-cd1ce",
  storageBucket: "instagram-clone-en-usa-cd1ce.appspot.com",
  messagingSenderId: "96437434979",
  appId: "1:96437434979:web:2973033eaef8601644d656",
  measurementId: "G-S5QLSJ1MTN"
});

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db,auth,storage}



