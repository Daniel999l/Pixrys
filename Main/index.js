import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

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
const auth = getAuth(app);

// 2️⃣ Grab elements
const pfpEl = document.getElementById("pfp");
const usernameEl = document.getElementById("username");
const profileLink = document.getElementById("twitterProfile");
const logoutBtn = document.getElementById("logoutBtn");

// 3️⃣ Update UI with user info
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Use Twitter profile pic + username
    if (pfpEl) pfpEl.src = user.reloadUserInfo.profileImageURL || "";
    if (usernameEl) usernameEl.textContent = "@" + (user.reloadUserInfo.screenName || "username");
    if (profileLink) profileLink.href = "https://x.com/" + (user.reloadUserInfo.screenName || "");
  } else {
    // Not logged in → redirect
    window.location.href = "../Auth/index.html";
  }
});

// 4️⃣ Logout button
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
