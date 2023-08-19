// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYBwAaYSp0b9tQYsRdbnZKR7aGkddeoQs",
  authDomain: "linkedin-mrsddq.firebaseapp.com",
  projectId: "linkedin-mrsddq",
  storageBucket: "linkedin-mrsddq.appspot.com",
  messagingSenderId: "680969382783",
  appId: "1:680969382783:web:236e9f8c874e18ac7bc84a",
  measurementId: "G-W8GKZVMFY4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);