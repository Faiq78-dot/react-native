// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiItrpt4wy7Rrt7srZuVEPj9klvQrTU_k",
  authDomain: "faiq-726ea.firebaseapp.com",
  projectId: "faiq-726ea",
  storageBucket: "faiq-726ea.firebasestorage.app",
  messagingSenderId: "285815876927",
  appId: "1:285815876927:web:805eb0434d5a4d250c378a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);