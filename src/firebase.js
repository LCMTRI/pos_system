// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYDXaRXUvNlfnM6m_1XsOs7Rpi9u8f9Yc",
    authDomain: "pos-system-f8619.firebaseapp.com",
    projectId: "pos-system-f8619",
    storageBucket: "pos-system-f8619.appspot.com",
    messagingSenderId: "100368632661",
    appId: "1:100368632661:web:54506c712ae570699e3ddc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app



