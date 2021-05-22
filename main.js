async function getWeatherData(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5f59f1128a67d98410d4d6388a4ca819`
  );
  const weatherData = await response.json();
  console.log(weatherData);
}

getWeatherData("Kranj");
