async function getWeather(){

const city =
document.getElementById("city").value;
const apiKey = "afb1f33923571eeb0acd50f1b0a7d5f3";

const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

const response = await fetch(url);

const data = await response.json();

document.getElementById("result")
.innerHTML = `

<h2>${data.name}</h2>

<img src=
"https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">

<h3>${data.main.temp} °C</h3>

<p>${data.weather[0].description}</p>

<p>Humidity: ${data.main.humidity}%</p>

<p>Wind Speed: ${data.wind.speed} m/s</p>

`;

}