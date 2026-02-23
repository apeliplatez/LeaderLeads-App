import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    projectId: "abstract-ring-466603-i7",
    appId: "1:648975036640:web:84e89025ebde8eb989a085",
    storageBucket: "abstract-ring-466603-i7.firebasestorage.app",
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "abstract-ring-466603-i7.firebaseapp.com",
    messagingSenderId: "648975036640",
};

// Initialize Firebase only if it hasn't been initialized already
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app, "firts");

// Initialize Cloud Storage
const storage = getStorage(app);

export { app, db, storage };
