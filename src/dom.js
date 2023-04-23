import { getWeatherData , getUserInput} from "./api";

export const displayCurrent = () => {
    const currentWeather = document.getElementById('current-weather');
    const response = getUserInput()
    console.log(getUserInput());
}
