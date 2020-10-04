import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyASOEdDNua9F6iIEWiE5ReD2ZLt91B_rfQ",
    authDomain: "storybook-bb525.firebaseapp.com",
    databaseURL: "https://storybook-bb525.firebaseio.com",
    projectId: "storybook-bb525",
    storageBucket: "storybook-bb525.appspot.com",
    messagingSenderId: "496766414388",
    appId: "1:496766414388:web:effcb8397061adba076461",
    measurementId: "G-8C7L6MXGEK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({});

  export default firebase;