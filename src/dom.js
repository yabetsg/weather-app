import { getWeatherData } from "./api";
import { getUserInput } from ".";

 export const displayCurrent = async (data) => {
    const currentWeather = document.getElementById('current-weather');
    currentWeather.textContent = `${data}°F`;
   
}

 export const displayRegion = async (data)=>{
    const region = document.getElementById('city-name');
    region.textContent = data;
    
}
 export const displayFeelsLike = async (data) =>{
    const feelsLike = document.getElementById('feels-like');
    feelsLike.textContent = `${data}°F`;
 }
 export const displayHumidity = async (data) =>{
    const humidity = document.getElementById('humidity');
    humidity.textContent = `${data}%`;
   
}

export const displayWeatherData = async ()=>{
    const currentWeather = document.getElementById('current-weather');
    const region = document.getElementById('city-name');
    const feelsLike = document.getElementById('feels-like');
    const humidity = document.getElementById('humidity');
    const response = await getUserInput();
    currentWeather.textContent = `${response.current.temp_f}°F`;
    region.textContent = response.location.name;
    feelsLike.textContent = `${response.current.feelslike_f}°F`;
    humidity.textContent = `${response.current.humidity}%`;
};

window.onload = async (e)=>{
    const currentWeather = document.getElementById('current-weather');
    const region = document.getElementById('city-name');
    const feelsLike = document.getElementById('feels-like');
    const humidity = document.getElementById('humidity');
    const url = "https://api.weatherapi.com/v1/current.json?key=5970c03ba0ec486bad4223716232104&q=detroit"
    const response = await getWeatherData(url);
    currentWeather.textContent = `${response.current.temp_f}°F`;
    region.textContent = response.location.name;
    feelsLike.textContent = `Feels like: ${response.current.feelslike_f}°F`;
    humidity.textContent = `Humidity: ${response.current.humidity}%`;
}
// displayWeatherData();
