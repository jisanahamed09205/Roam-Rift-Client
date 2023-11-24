// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA8x6vqshr58A7yZ5D3BEjMaQ2bDMdJRw",
  authDomain: "roam-rift.firebaseapp.com",
  projectId: "roam-rift",
  storageBucket: "roam-rift.appspot.com",
  messagingSenderId: "617497545592",
  appId: "1:617497545592:web:328100981062a3537c168d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;