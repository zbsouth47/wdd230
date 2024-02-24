const visitsDisplay = document.querySelector(".last-visit");

let lastVisit = window.localStorage.getItem("lastVisit-ls") || 0;
let todayDate = Date.now();

let difference = todayDate - lastVisit;

difference = difference / 84600000;

if (difference > 2) {
  visitsDisplay.textContent = `You last visited ${difference.toFixed(
    0
  )} days ago.`;
} else if (difference >= 1) {
  visitsDisplay.textContent = `You last visited ${difference.toFixed(
    0
  )} day ago.`;
} else {
  visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
}

localStorage.setItem("lastVisit-ls", todayDate);
