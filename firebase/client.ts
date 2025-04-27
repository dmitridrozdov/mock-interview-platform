// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBInKq5toPjpr23iJurB-Pw8nGxdPqR62k",
  authDomain: "prepwise-8860b.firebaseapp.com",
  projectId: "prepwise-8860b",
  storageBucket: "prepwise-8860b.firebasestorage.app",
  messagingSenderId: "350516443518",
  appId: "1:350516443518:web:b9815b979802df72315b2f",
  measurementId: "G-N6G1DX1QKV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);