import { Weather } from "./weatherApi.js";
const { UI } = require("./ui");
const { Store } = require("./store");

const store = new Store();
const { city, countryCode } = store.getLocationData();
const ui = new UI();
const weather = new Weather(city, countryCode);

require("./index.css");

// Obtengo los datos de la API
async function fetchWeather() {
  const data = await weather.getWeather();
  //console.log(data);
  ui.render(data);
}

document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const countryCode = document.getElementById("countryCode").value;
  weather.changeLocation(city, countryCode);
  fetchWeather();
  e.preventDefault();
});

document.addEventListener("DOMContentLoaded", fetchWeather);
