import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBLITl7mla9LsbtV6gIiOl-t1hE__zTCag",
    authDomain: "merchant-center-1579876201890.firebaseapp.com",
    databaseURL: "https://merchant-center-1579876201890.firebaseio.com",
    projectId: "merchant-center-1579876201890",
    storageBucket: "merchant-center-1579876201890.appspot.com",
    messagingSenderId: "981280928496",
    appId: "1:981280928496:web:f7e44be0048255b872c835"
  };
  // Initialize Firebase
 firebase.initializeApp(config)

 export default firebase