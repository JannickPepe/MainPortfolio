import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAH0iIzVQj_ttuRJCoqcQ-jkOG01tJD7Y0",
    authDomain: "portfoliovoting.firebaseapp.com",
    projectId: "portfoliovoting",
    storageBucket: "portfoliovoting.appspot.com",
    messagingSenderId: "518949460006",
    appId: "1:518949460006:web:f224dce6586f7169d96ee7",
    measurementId: "G-2VBG7V4KX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };