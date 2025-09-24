 function toggleHeart(button) {
    const icon = button.querySelector("i");
    icon.classList.toggle("far"); // outline
    icon.classList.toggle("fas"); // solid
    icon.classList.toggle("text-danger"); // red color
  }

   import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
  import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

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

  // Init Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // Check user state
  onAuthStateChanged(auth, (user) => {
  if (user) {
    // Twitter display name
    document.getElementById("username").textContent = "@" + user.reloadUserInfo.screenName;

    // Twitter profile picture
    document.getElementById("pfp").src = user.photoURL;

    // Twitter profile link
    document.getElementById("twitterProfile").href = "https://x.com/" + user.reloadUserInfo.screenName;
  } else {
    // Kick them back to login
    window.location.href = "../Auth/index.html";
  }
});