import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDA659thpf9zAAenBM8sWJmGt-DUEjCfec",
    authDomain: "clone-533ac.firebaseapp.com",
    projectId: "clone-533ac",
    storageBucket: "clone-533ac.appspot.com",
    messagingSenderId: "1052647219128",
    appId: "1:1052647219128:web:d62431dd58dacf7c1ef94d",
    measurementId: "G-L2BW3195PB"
}
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log("Firebase initialized successfully!");
export { auth };