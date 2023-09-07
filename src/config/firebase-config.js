// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAmiIyR8DZOOVeYXuaW5_kbVzD-FJINniM",
    authDomain: "expense-tracker-app-77745.firebaseapp.com",
    projectId: "expense-tracker-app-77745",
    storageBucket: "expense-tracker-app-77745.appspot.com",
    messagingSenderId: "562994022129",
    appId: "1:562994022129:web:15fbac43a16282d95c4b50",
    measurementId: "G-94H31424NQ"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const db = getFirestore(app);
