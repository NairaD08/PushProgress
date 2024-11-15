document.addEventListener("DOMContentLoaded", () => {
  const formTitle = document.getElementById("form-title");
  const submitBtn = document.getElementById("submit-btn");
  const switchLink = document.getElementById("switch-link");
  const switchText = document.getElementById("switch-text");

  let isLogin = true;

  switchLink.addEventListener("click", (event) => {
    event.preventDefault();
    isLogin = !isLogin;

    if (isLogin) {
      formTitle.innerText = "Login";
      submitBtn.innerText = "Login";
      switchText.innerHTML = `Don't have an account? <a href="#" id="switch-link">Sign Up</a>`;
    } else {
      formTitle.innerText = "Sign Up";
      submitBtn.innerText = "Sign Up";
      switchText.innerHTML = `Already have an account? <a href="#" id="switch-link">Login</a>`;
    }
  });

  document.getElementById("auth-form").addEventListener("submit", (event) => {
    event.preventDefault();
    // Add form handling logic here
    console.log(isLogin ? "Logging in" : "Signing up");
  });
});
