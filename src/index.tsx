import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwi2N-RYW3KNEoRBIap5Lmbwl5LEfi-JQ",
  authDomain: "denisa-orlikova-portfolio.firebaseapp.com",
  projectId: "denisa-orlikova-portfolio",
  storageBucket: "denisa-orlikova-portfolio.appspot.com",
  messagingSenderId: "1033102571981",
  appId: "1:1033102571981:web:f173e825f7b18feabc2c84",
  measurementId: "G-52ST00L0Y7"
};

// Initialize Firebase
//eslint-disable-next-line
const app = initializeApp(firebaseConfig);
//eslint-disable-next-line
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
