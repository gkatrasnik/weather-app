//fetch data from appi, call filter func. and display func
async function getWeatherData(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5f59f1128a67d98410d4d6388a4ca819`
  );
  const weatherData = await response.json();
  const newData = filterData(weatherData);
  displayData(newData); //make DOM display
}

//get object with filtered data
function filterData(data) {
  const filteredData = {
    city: data.name,
    weather: data.weather[0].main,
    description: data.weather[0].description,
    temp: data.main.temp,
    feelLike: data.main.feels_like,
    wind: data.wind.speed,
  };
  return filteredData;
}

//display data in DOM
function displayData(data) {
  console.log(data);
}

//get input from user
function readInput() {
  const input = document.getElementById("input");
  const inputValue = input.value;
  return inputValue;
}

//start program

const form = document.getElementById("form");

form.addEventListener(`submit`, (e) => {
  let currentCity = readInput();
  e.preventDefault();
  getWeatherData(currentCity);
});
