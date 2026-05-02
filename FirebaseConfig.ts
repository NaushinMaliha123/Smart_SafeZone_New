import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTvMJxU_t6Kl51oD0tN2PBT5eL8zi3Uwc",
  authDomain: "smartzone2-c0891.firebaseapp.com",
  databaseURL: "https://smartzone2-c0891-default-rtdb.firebaseio.com",
  projectId: "smartzone2-c0891",
  storageBucket: "smartzone2-c0891.firebasestorage.app",
  messagingSenderId: "852613816409",
  appId: "1:852613816409:web:4bb7eb4cbdbf3b9a0d9148",
  measurementId: "G-0RDYW9M9VL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const auth = initializeAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
