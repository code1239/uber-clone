// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkkqLieeR3T_qh42ioBnP8aGr_79LIx60",
  authDomain: "uber-clone-122c0.firebaseapp.com",
  projectId: "uber-clone-122c0",
  storageBucket: "uber-clone-122c0.appspot.com",
  messagingSenderId: "488674791702",
  appId: "1:488674791702:web:b0927d6e62f041cdf30037"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider, auth}