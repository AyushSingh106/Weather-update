
const apiKey = "6a4ff57078cb07fe9ff7c79872ef15cc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".btn");
const weatherIcon=document.querySelector(".weather-Icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

if(response.status=="404")
{
    document.querySelector(".error").style.display="block";
    document.querySelector(".weatherbox").style.display="none";
}

else
{
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name ;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".info-humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".info-wind").innerHTML = data.wind.speed + " Km/H";
   
    if(data.weather[0].main=="Clouds")
      { 
        weatherIcon.src= "clouds.png";
    }
  else if(data.weather[0].main=="Clear")
    {
        weatherIcon.src= "clear.png";
    }
    else if(data.weather[0].main=="Rain")
    {
        weatherIcon.src= "rain.png";
    }
    else if(data.weather[0].main=="Drizzle")
    {
        weatherIcon.src= "drizzle.png";
    }
    else if(data.weather[0].main == "Mist")
    {
        weatherIcon.src= "mist.png";
    }
    document.querySelector(".error").style.display="none";
    document.querySelector(".weatherbox").style.display = "block"
}

}
searchBtn.addEventListener("click",()=>
{
    checkWeather(searchBox.value);
    searchBox.value="";

})

