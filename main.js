//fetch data from appi, call filter func. and display func
async function getWeatherData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5f59f1128a67d98410d4d6388a4ca819`
    );
    const weatherData = await response.json();
    const newData = filterData(weatherData);
    displayData(newData);
  } catch (err) {
    alert("Search result not found");
  }
}

//get object with filtered data
function filterData(data) {
  const filteredData = {
    city: data.name,
    country: data.sys.country,
    weather: data.weather[0].main,
    description: data.weather[0].description,
    temp: Math.round(data.main.temp),
    wind: Math.round(data.wind.speed),
  };
  return filteredData;
}

//display data in DOM
function displayData(data) {
  cityName.textContent = data.city + ", " + data.country;
  weather.textContent = data.weather;
  description.textContent = data.description;
  temperature.textContent = "Temperature: " + data.temp + "°C";
  wind.textContent = "Wind: " + data.wind + " m/s";
}

//get input from user
function readInput() {
  const input = document.getElementById("input");
  const inputValue = input.value;
  return inputValue;
}

//start program

//define DOM elements
const form = document.getElementById("form");
const card = document.getElementById("card");
const cityName = document.getElementById("cityName");
const weather = document.getElementById("weather");
const description = document.getElementById("description");
const temperature = document.getElementById("temp");
const wind = document.getElementById("wind");

//listen for user input submit
form.addEventListener(`submit`, (e) => {
  let currentCity = readInput();
  e.preventDefault();
  getWeatherData(currentCity);
});
