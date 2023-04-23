export const getWeatherData = async (url) => {
  try {
    const data = await fetch(url, {
      mode: "cors",
    });
    const response = await data.json();
    return response;
  } catch (e) {
    alert(e);
  }
};

export const buildURL = (city) => {
  return `https://api.weatherapi.com/v1/current.json?key=5970c03ba0ec486bad4223716232104&q=${city}`;
};


