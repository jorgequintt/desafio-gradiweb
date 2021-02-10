import React from 'react';
import ForecastWeatherItem from './ForecastWeatherItem';

export default function ForecastWeatherList({ cityData: { data } }) {
    const forecastItems = [];

    for (let i = 1; i <= 3; i++) {
        const dayForecast = data.daily[i];

        forecastItems.push(
            <ForecastWeatherItem
                key={dayForecast.dt}
                minTemp={dayForecast.temp.min}
                maxTemp={dayForecast.temp.max}
                day={dayForecast.dt}
                weather={dayForecast.weather[0].main}
            />
        );
    }

    return <div className="forecast-weather-list">{forecastItems}</div>;
}
