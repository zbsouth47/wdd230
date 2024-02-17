const temp = document.querySelector("#temp");
const windspeed = document.querySelector("#windspeed");
const button = document.querySelector("button");
const div = document.querySelector(".weather");
const windchillp = document.createElement("p");

button.addEventListener("click", function () {
  if (temp.value <= 50 && windspeed.value >= 5) {
    var windspeedEXP = windspeed.value ** 0.16;
    var windchill =
      35.74 +
      0.6215 * temp.value -
      35.75 * windspeedEXP +
      0.4275 * windspeedEXP;
    windchillp.textContent = `The current windchill is ${windchill.toFixed(
      2
    )}°F`;
    div.append(windchillp);
  } else {
    windchillp.textContent = `N/A`;
    div.append(windchillp);
  }
});
