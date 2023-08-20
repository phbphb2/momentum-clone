const weather = document.querySelector("#weather-temp");
const city = document.querySelector("#city");
const API_KEY = "99ab7ff75a4270f4f78b69e1a6db1add";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      const mainWeather = data.weather[0].main;
      const temp = data.main.temp;
      weather.innerText = `${mainWeather} / ${temp}K`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
