const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = `https://api.openweathermap.org/data/3.0/onecall?lat=42.86&lon=-112.45&exclude=minutely,alerts&units=imperial&appid=b4f039a7f4409449f111d776279a66e0`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}

function displayResults(data) {
  let desc = data.current.weather[0].description;
  currentTemp.innerHTML = `${data.current.temp}°F - ${desc}`;
  const iconsrc = `https://openweathermap.org/img/w/${data.current.weather[0].icon}.png`;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = `${desc}`;
}

apiFetch();
