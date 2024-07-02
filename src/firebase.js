// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export function firebaseInit() {

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "banham-education-consultancy.firebaseapp.com",
    projectId: "banham-education-consultancy",
    storageBucket: "banham-education-consultancy.appspot.com",
    messagingSenderId: "466508681833",
    appId: "1:466508681833:web:428a65e8ac6760f32848f8"
  };

  // Initialize Firebase
  initializeApp(firebaseConfig);
};
