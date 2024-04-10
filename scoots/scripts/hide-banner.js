const banner = document.querySelector(".banner");
const hideButton = document.querySelector("#hide");
const dayOfWeek = new Date();

hideButton.addEventListener("click", () => {
  banner.classList.add("hide");
});
