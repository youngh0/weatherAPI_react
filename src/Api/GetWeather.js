// 8a9ec30a2155643a638723b6f7dc7abf

import React from 'react';

export async function getWeather(city){
    try{
        // console.log(JSON.stringify(city))
        const weatherData = await fetch(
            'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=8a9ec30a2155643a638723b6f7dc7abf');
        const weatherResult = await weatherData.json();
        // console.log(weatherResult.weather[0].main);
        console.log(weatherResult.status)
        return weatherResult.weather[0].main
    }catch (e){
        console.log("도시이름을 다시 확인해주세");
        alert("도시이름을 다시 확인해주세요");
    }
};
