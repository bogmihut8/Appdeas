import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBWS4-Jp3zuhvmKjWypYHEJz0jEggbPFBg",
    authDomain: "appdeas-f2f8a.firebaseapp.com",
    databaseURL: "https://appdeas-f2f8a.firebaseio.com",
    projectId: "appdeas-f2f8a",
    storageBucket: "appdeas-f2f8a.appspot.com",
    messagingSenderId: "1000770118127"
  };
  firebase.initializeApp(config);
  firebase.firestore();

export default firebase;