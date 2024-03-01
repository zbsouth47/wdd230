const password1 = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const message = document.querySelector("#password-message");

password2.addEventListener("focusout", checkSame);

function checkSame() {
  if (password1.value !== password2.value) {
    message.textContent = "Passwords do not match";
    message.style.visibility = "show";
    password1.style.backgroundColor = "#fff0f3";
    password2.style.backgroundColor = "#fff0f3";
    password1.value = "";
    password2.value = "";
    password1.focus();
  } else {
    message.style.display = "none";
    password1.style.backgroundColor = "#fff";
    password1.style.color = "#000";
    password2.style.backgroundColor = "#fff";
    password2.style.color = "#000";
  }
}
