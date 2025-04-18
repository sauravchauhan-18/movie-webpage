// Sign Up
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;
    const confirm = document.getElementById("signup-confirm").value;

    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ username, password }));
    alert("Signup successful! You can now login.");
    window.location.href = "login.html";
  });
}

// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
      alert("Login successful!");
      window.location.href = "index.html"; // Go to movie list
    } else {
      alert("Invalid credentials!");
    }
  });
}
