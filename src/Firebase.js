import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAHX2WzQ5AfqrbybSJf4EP3IlLf1x1Lh5k",
    authDomain: "yaaz-games.firebaseapp.com",
    projectId: "yaaz-games",
    storageBucket: "yaaz-games.appspot.com",
    messagingSenderId: "785847580247",
    appId: "1:785847580247:web:3518ef0ed2298766949512",
    measurementId: "G-KM7PZ8QME5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
