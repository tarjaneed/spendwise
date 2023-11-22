// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMpcCuyl3mk0IJo7sr93T3BKtMDGP8GHk",
    authDomain: "spendwise-6b61a.firebaseapp.com",
    projectId: "spendwise-6b61a",
    storageBucket: "spendwise-6b61a.appspot.com",
    messagingSenderId: "754157392353",
    appId: "1:754157392353:web:e597e6e42540cd4e5082a0",
    measurementId: "G-LECW3ZV5EZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firestore DB
export const db = getFirestore(app);

export default app;
