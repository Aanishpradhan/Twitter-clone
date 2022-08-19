import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCi7pA0kTuPxW6oXLAnzOgkXnty2JbvB3Q",
    authDomain: "twitter-clone-5963a.firebaseapp.com",
    databaseURL: "https://twitter-clone-5963a-default-rtdb.firebaseio.com",
    projectId: "twitter-clone-5963a",
    storageBucket: "twitter-clone-5963a.appspot.com",
    messagingSenderId: "624035588728",
    appId: "1:624035588728:web:6ad00c9a9ace130e8bdb8d",
    measurementId: "G-M3XCP8675X"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;