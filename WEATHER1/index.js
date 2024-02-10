const inputBox=document.querySelector(`.input.box`);
const searchBtn=document.getElementById(`searchBtn`);
const weather_img=document.querySelector(`.weather-img`);
const temperature=document.querySelector(`.temperature`);
const description=document.querySelector(`.description`);
const humidity=document.querySelector(`humidity`);
const wind_speed=document.querySelector(`wind-speed`);


async function checkWeather(city){
    const api_key ="a9ebc9750fe6cee93dcac3a066076584";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;


    const weather_data = await fetch(`${url}`).then
    (response => response.json());
console.log(weather_data);
    }
searchBtn.addEventListener('click',{checkWeather(inputBox_value);
});