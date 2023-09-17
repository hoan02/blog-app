// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "blog-app-399208.firebaseapp.com",
  projectId: "blog-app-399208",
  storageBucket: "blog-app-399208.appspot.com",
  messagingSenderId: "258916752246",
  appId: "1:258916752246:web:ae1cc58fd77722a2c43857",
  measurementId: "G-SGW06J3CFR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);