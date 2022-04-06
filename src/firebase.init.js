// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRNPTbOFh1PSFNiZQQ95CA-cTLbaBZGXI",
  authDomain: "simply-firebase-test.firebaseapp.com",
  projectId: "simply-firebase-test",
  storageBucket: "simply-firebase-test.appspot.com",
  messagingSenderId: "689237678457",
  appId: "1:689237678457:web:db709ac8b6fe0523b2b7a8",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
