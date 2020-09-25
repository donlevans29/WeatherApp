/**
 * Weather App
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const Full_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise = fetch(Full_URL)  // fetching resource
   return weatherPromise.then((Response) =>{  // returning promise which has a response of resolved or rejected
     return Response.json()                  // if resolved then return data in json format
   })
}


/**
 * Retrieve city input and get the weather data
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city)
  .then ((Response)=>{
     showWeatherData(Response);
    //  console.log(Response);
  }).catch ((error) => {
    console.log(error);
  })

}

/**
 * Show the weather data in HTML
 */
showWeatherData = (weatherData) => {

  document.getElementById("city-name").innerText = weatherData.name
  document.getElementById("weather-type").innerText = weatherData.weather[0].main
  document.getElementById("temp").innerText = weatherData.main.temp
  document.getElementById("min-temp").innerText = weatherData.main.temp_min
  document.getElementById("max-temp").innerText = weatherData.main.temp_max
}

