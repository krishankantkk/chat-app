


// Initialize Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBaMXdCkLNr16LpkH8kWhqOgR4ReH4jSw",
  authDomain: "chat-app-91d4b.firebaseapp.com",
  databaseURL: "https://chat-app-91d4b-default-rtdb.firebaseio.com",
  projectId: "chat-app-91d4b",
  storageBucket: "chat-app-91d4b.appspot.com",
  messagingSenderId: "836667568402",
  appId: "1:836667568402:web:04f20050a70db0b1be83cb",
  measurementId: "G-FMHWREG832"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()