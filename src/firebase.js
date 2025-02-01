// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB0CtWOniygQ0_zwxlpxhIVrjDtJpGDBSA",
    authDomain: "netflix-clone-c4116.firebaseapp.com",
    projectId: "netflix-clone-c4116",
    storageBucket: "netflix-clone-c4116.firebasestorage.app",
    messagingSenderId: "650452752226",
    appId: "1:650452752226:web:a33af6d705b4b2e2007e3b",
    measurementId: "G-YHRD401N0F"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
