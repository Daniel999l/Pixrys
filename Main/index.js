// ---- IMPORTS AT THE TOP ----
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } 
  from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

// ---- TOGGLE HEART FUNCTION ----
function toggleHeart(button) {
  const icon = button.querySelector("i");
  icon.classList.toggle("far"); // outline
  icon.classList.toggle("fas"); // solid
  icon.classList.toggle("text-danger"); // red color
}

// ---- FIREBASE CONFIG ----
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
const auth = getAuth(app);

// ---- ON AUTH STATE CHANGE ----
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Set PFP
    const pfpEl = document.getElementById("pfp");
    if (pfpEl) pfpEl.src = user.photoURL;

    // Set username
    const usernameEl = document.getElementById("username");
    if (usernameEl) usernameEl.textContent = "@" + user.reloadUserInfo.screenName;

    // Set link to X profile
    const profileLink = document.getElementById("twitterProfile");
    if (profileLink) profileLink.href = "https://x.com/" + user.reloadUserInfo.screenName;
  } else {
    window.location.href = "../Auth/index.html"; // Not logged in
  }
});

// ---- LOGOUT BUTTON ----
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    try {
      await signOut(auth);   // works now
      window.location.href = "../Auth/index.html";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  });
}

