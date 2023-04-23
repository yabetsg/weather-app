import { getWeatherData,buildURL } from "./api"; 
import { displayCurrent,displayFeelsLike,displayHumidity,displayRegion } from "./dom";

export const getUserInput = async () => {
    const form = document.querySelector("form");
  const promise = new Promise((resolve) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const userInput = document.getElementById("city");
      let city = userInput.value;
      const url = buildURL(city); 
       const response = await getWeatherData(url);
       displayRegion(response.location.name)
       displayCurrent(response.current.temp_f);
       displayFeelsLike(response.current.feelslike_f);
       displayHumidity(response.current.humidity);
       resolve(response);
       userInput.value = '';
    });
  });
   
};
getUserInput();