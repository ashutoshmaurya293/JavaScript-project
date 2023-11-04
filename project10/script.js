const InputBox = document.getElementById("InputBox");
const images = document.getElementById("images");
const Search = document.getElementById("Search");
const Temperature = document.getElementById("Temperature");
const dsc = document.getElementById("dsc");
const Humidity = document.getElementById("Humidity");
const Speed = document.getElementById("Speed");

async function cheakWeather(city) {
  const api_key = "050e5235e4f3ad7be2de6e6087ea168e";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  const weather_data = await fetch(`${url}`).then((response) =>
    response.json()
  );
  Temperature.innerHTML = `${Math.round(
    weather_data.main.temp - 273.15
  )} <sup>°C</sup>`;
  dsc.innerHTML = `${weather_data.weather[0].description}`;
  Humidity.innerHTML = `${weather_data.main.humidity}%`;
  Speed.innerHTML = `${weather_data.wind.speed}km/h`;
  switch (weather_data.weather[0].main) {
    case "Clouds":
      images.src = "images/clouds.png";
    case "Clear":
      images.src = "images/clear.png";
    case "Rain":
      images.src = "images/rain.png";
    case "Mist":
      images.src = "images/mist.png";
    case "drizzle":
      images.src = "images/drizzle.png";
    case "Snow":
      images.src = "images/snow.png";
  }
  InputBox.value = ""
  console.log(weather_data);
}

Search.addEventListener("click", function (e) {
  cheakWeather(InputBox.value);
  e.preventDefault()
});
