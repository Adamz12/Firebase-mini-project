// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU9_2_qxaeBNOwPLPI8_0wObaanFP9Hqc",
  authDomain: "fire-base-tutorial-5f338.firebaseapp.com",
  projectId: "fire-base-tutorial-5f338",
  storageBucket: "fire-base-tutorial-5f338.appspot.com",
  messagingSenderId: "275400752371",
  appId: "1:275400752371:web:f5e3a0aa11adec2c678b86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()