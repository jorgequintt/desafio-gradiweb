import React from 'react';

export default function CurrentWeather({ cityData: { name: cityName, data } }) {
    const currentWeather = data.current;
    const temp = currentWeather.temp;
    const weather = currentWeather.weather[0].main;

    return (
        <div>
            {cityName} {weather} {Math.round(temp)}
        </div>
    );
}
