const currentTemp = document.querySelector("#current-temp");
const humidity = document.querySelector("#humidity");
const weatherIcon = document.querySelector("#weather-icon");
const windchillp = document.querySelector("#windchill");
const forecast = document.querySelector(".forecast");
const bannerTemp = document.querySelector("#banner-content");
const lat = 20.422980449037773;
const long = -86.92428580556886;

const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude=minutely,alerts&units=imperial&appid=b4f039a7f4409449f111d776279a66e0`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
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
  humidity.innerHTML = `Current Humidity: ${data.current.humidity}% `;
  const iconsrc = `https://openweathermap.org/img/w/${data.current.weather[0].icon}.png`;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);

  if (data.current.temp <= 50 && data.current.wind_speed >= 5) {
    var windspeedEXP = data.current.wind_speed ** 0.16;
    var windchill =
      35.74 +
      0.6215 * data.current.temp -
      35.75 * windspeedEXP +
      0.4275 * windspeedEXP;
    windchillp.textContent = `The current windchill is ${windchill.toFixed(
      2
    )}°F`;
  }

  for (let i = 1; i <= 3; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let date = new Date();
    date.setDate(date.getDate() + i);

    td1.textContent = `${
      date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()}`;
    td2.textContent = `${data.daily[i].temp.day}°F`;
    td3.textContent = `${data.daily[i].summary}`;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    forecast.appendChild(tr);
  }

  bannerTemp.textContent = `The high today will be ${data.daily[0].temp.max}°F`;
}

apiFetch();
