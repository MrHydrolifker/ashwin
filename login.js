



  // Firebase SDKs already included above
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDkLRtq2X4j8zGBuI3sW6w_DF6i4HBDExM",
    authDomain: "ashwin-fff0d.firebaseapp.com",
    projectId: "ashwin-fff0d",
    storageBucket: "ashwin-fff0d.firebasestorage.app",
    messagingSenderId: "290863838642",
    appId: "1:290863838642:web:34078d6f65dde5acf360ab",
    measurementId: "G-7DHQ0CGBFV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);











const container = document.querySelector(".container"),
  pwShowHide = document.querySelectorAll(".showHidePw"),
  pwFields = document.querySelectorAll(".password"),
  signUp = document.querySelector(".signup-link"),
  login = document.querySelector(".login-link");

// js code to show/hide password and change icon
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((pwField) => {
      if (pwField.type === "password") {
        pwField.type = "text";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        pwField.type = "password";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});

// js code to appear signup and login form
signUp.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.add("active");
});

login.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.remove("active");
});



const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm.email.value;
  const password = loginForm.password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in successfully
      alert("Login Successful");

      console.log("User:", userCredential.user);
      window.location.href = "index.html";
    
    })
    .catch((error) => {
      // Handle errors
      console.error("Error Code:", error.code);
      console.error("Error Message:", error.message);
      alert(`Error: ${error.message}`);
    });
});



const signUpForm = document.getElementById("signUpForm");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = signUpForm.email.value;
  const password = signUpForm.password.value;
  const confirmPassword = signUpForm.confirmPassword.value;

  // Check password confirmation
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User registered successfully
      alert("Signup Successful");
      console.log("User:", userCredential.user);
    })
    .catch((error) => {
      // Handle errors
      console.error("Error Code:", error.code);
      console.error("Error Message:", error.message);
      alert(`Error: ${error.message}`);
    });
});
