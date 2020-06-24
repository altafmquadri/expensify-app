// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXKMiaK6vTrivl7zOhI0APL59iN6SXGDQ",
    authDomain: "expensify-be047.firebaseapp.com",
    databaseURL: "https://expensify-be047.firebaseio.com",
    projectId: "expensify-be047",
    storageBucket: "expensify-be047.appspot.com",
    messagingSenderId: "127046338862",
    appId: "1:127046338862:web:662f744e4d8295f14f12bf",
    measurementId: "G-NR7W82SR62"
};

// // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database()

export default database














