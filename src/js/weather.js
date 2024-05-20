const API_KEY = "f68bb9bcd75825343655d1dc14d621ab";

const city = document.querySelector("#city");
const temp = document.querySelector("#temperature span");
const weatherImg = document.querySelector("#weatherImg");
const countryImg = document.querySelector("#country");
const humidity = document.querySelector("#humidity span");
const wind = document.querySelector("#wind span");

const getWeatherData = async (cityName) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY }&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data;
}

export const showWeather = async (cityName) => {
    const data = await getWeatherData(cityName);

    city.innerText = data.name;
    temp.innerText = parseInt(data.main.temp);
    weatherImg.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);

    countryImg.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png`);

    humidity.innerText = `${data.main.humidity}%`;
    wind.innerText = `${data.wind.speed} km/h`;
}