
import firebase from 'firebase/app';
import 'firebase/firestore';
require('firebase/auth')

const firebaseConfig = {
    apiKey: "AIzaSyBIEqKOhn46gag2WObiySOwDcksRAAI6ck",
    authDomain: "slackclone-7ac18.firebaseapp.com",
    projectId: "slackclone-7ac18",
    storageBucket: "slackclone-7ac18.appspot.com",
    messagingSenderId: "445162122300",
    appId: "1:445162122300:web:a5efb6e9a38cd509856739"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export default db;
  export {auth, provider}