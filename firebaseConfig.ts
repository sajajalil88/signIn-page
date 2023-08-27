// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgTAmTOYuRdlpTv734-gIQrbuf8UtKXQo",
  authDomain: "fir-auth-67214.firebaseapp.com",
  projectId: "fir-auth-67214",
  storageBucket: "fir-auth-67214.appspot.com",
  messagingSenderId: "528485355517",
  appId: "1:528485355517:web:aaaca29b4d342ed1669394"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP );
export const FIREBASE_DB = getFirestore(FIREBASE_APP );