// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJAbZHh6KJHrgTAuGyZ1Y_cWDvqs66aiM",
  authDomain: "react-fb-auth-26a23.firebaseapp.com",
  projectId: "react-fb-auth-26a23",
  storageBucket: "react-fb-auth-26a23.appspot.com",
  messagingSenderId: "717230088214",
  appId: "1:717230088214:web:1c4103febb1fddf6949537",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
