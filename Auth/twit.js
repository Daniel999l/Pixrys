// script.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAuth, TwitterAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCqVGh1TeRg9a-tWzhUiGudMb-vX24znT0",
  authDomain: "twitter-login-demo-3ef40.firebaseapp.com",
  projectId: "twitter-login-demo-3ef40",
  storageBucket: "twitter-login-demo-3ef40.firebasestorage.app",
  messagingSenderId: "597647210178",
  appId: "1:597647210178:web:7e0328234ac0deceeb2d5b",
  measurementId: "G-CTT5P63LLY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Make twitterLogin globally accessible for HTML onclick
window.twitterLogin = async function() {
  const provider = new TwitterAuthProvider();
  try {
    await signInWithPopup(auth, provider);
    // Redirect to main page after login
    window.location.href = "../Main/index.html";
  } catch (error) {
    console.error("Twitter login failed:", error);
  }
};
