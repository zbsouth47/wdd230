const banner = document.querySelector(".banner");
const hideButton = document.querySelector("#hide");

hideButton.addEventListener("click", () => {
  banner.classList.add("hide");
});
