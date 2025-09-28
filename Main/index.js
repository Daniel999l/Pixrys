import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

// 1️⃣ Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCqVGh1TeRg9a-tWzhUiGudMb-vX24znT0",
  authDomain: "twitter-login-demo-3ef40.firebaseapp.com",
  projectId: "twitter-login-demo-3ef40",
  storageBucket: "twitter-login-demo-3ef40.firebasestorage.app",
  messagingSenderId: "597647210178",
  appId: "1:597647210178:web:7e0328234ac0deceeb2d5b",
  measurementId: "G-CTT5P63LLY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // now auth knows which app to use

// 2️⃣ Logout button
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    try {
      await signOut(auth);
      window.location.href = "../Auth/index.html";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  });
}
