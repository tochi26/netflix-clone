// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyA8aeAjk27ypeMz_8IvPpIcFSFVTVMScwM",
    authDomain: "netflix-project-32a6d.firebaseapp.com",
    projectId: "netflix-project-32a6d",
    storageBucket: "netflix-project-32a6d.appspot.com",
    messagingSenderId: "38562973348",
    appId: "1:38562973348:web:d78728c9a0ff889687c831",
    measurementId: "G-EY52KRN1MX"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)
