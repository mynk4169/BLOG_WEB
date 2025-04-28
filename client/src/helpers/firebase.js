// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getEvn } from "./getEnv";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: getEvn('VITE_FIREBASE_API'),
  authDomain: "blogweb-a6d78.firebaseapp.com",
  projectId: "blogweb-a6d78",
  storageBucket: "blogweb-a6d78.firebasestorage.app",
  messagingSenderId: "1049015327526",
  appId: "1:1049015327526:web:9003aa3e396d9202867fe7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth,provider}