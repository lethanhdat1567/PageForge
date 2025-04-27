import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // 👈 Thêm dòng này
import { getAnalytics } from "firebase/analytics";

// Firebase config của bạn
const firebaseConfig = {
  apiKey: "AIzaSyAwoJ4SPxUP3NuRs-u1Ap_RUHcNbG2auDY",
  authDomain: "vocaspere.firebaseapp.com",
  projectId: "vocaspere",
  storageBucket: "vocaspere.firebasestorage.app",
  messagingSenderId: "788131808515",
  appId: "1:788131808515:web:337563a479d04cc987d536",
  measurementId: "G-30N4BLR6GC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✨ Thêm dòng này
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, analytics, auth, provider };
