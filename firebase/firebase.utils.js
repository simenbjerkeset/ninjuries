import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBoKRpw692RrSD260930YMYrGBlTRnM_qU",
    authDomain: "ninjuries-39bc9.firebaseapp.com",
    projectId: "ninjuries-39bc9",
    storageBucket: "ninjuries-39bc9.appspot.com",
    messagingSenderId: "1028858831257",
    appId: "1:1028858831257:web:0185e5ed58318243f2f308",
    measurementId: "G-DWTX284XZ9"
};

if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
} else {
    firebase.app();
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const signInWithEmailAndPassword = (email, password) => auth.signInWithEmailAndPassword(email, password);

export default firebase;