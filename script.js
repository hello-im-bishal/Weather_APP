const apiKey = "0d932cf88a62781def697f9f78675b7c";   

async function getWeather(){
  const city = document.getElementById("cityInput").value;

  if(city === ""){
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  if(data.cod !== 200){
    alert("City not found!");
    return;
  }

  document.getElementById("temp").innerText = data.main.temp + "°C";
  document.getElementById("desc").innerText = data.weather[0].description;
  document.getElementById("feels").innerText = data.main.feels_like;
  document.getElementById("humidity").innerText = data.main.humidity;
  document.getElementById("wind").innerText = data.wind.speed;
}




