import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  projectId: "abstract-ring-466603-i7",
  appId: "1:648975036640:web:84e89025ebde8eb989a085",
  storageBucket: "abstract-ring-466603-i7.firebasestorage.app",
  apiKey: "AIzaSyAIdjyyVZ8BICcXohDW8_BP9BwfrJK2hDc",
  authDomain: "abstract-ring-466603-i7.firebaseapp.com",
  messagingSenderId: "648975036640",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app, "firts");

export { app, db };
