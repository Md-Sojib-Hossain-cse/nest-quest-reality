// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVbGROsIsoQ3UWdWra30cl44pZ6fwPBJU",
    authDomain: "nest-quest-reality.firebaseapp.com",
    projectId: "nest-quest-reality",
    storageBucket: "nest-quest-reality.appspot.com",
    messagingSenderId: "192602529060",
    appId: "1:192602529060:web:c4a83569779e558a7aa7b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;