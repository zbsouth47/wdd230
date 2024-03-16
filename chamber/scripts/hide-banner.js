const banner = document.querySelector(".banner");
const hideButton = document.querySelector("#hide");
const dayOfWeek = new Date();

hideButton.addEventListener("click", () => {
  banner.classList.add("hide");
});

if (dayOfWeek.getDay() < 1 || dayOfWeek.getDay() > 3) {
  banner.classList.add("hide");
}
