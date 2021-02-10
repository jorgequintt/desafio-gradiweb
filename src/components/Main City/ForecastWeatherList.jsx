import React from 'react';
import ForecastWeatherItem from './ForecastWeatherItem';
import { timestampToDayOfWeek } from '../../util/funcs';

export default function ForecastWeatherList({ data }) {
    const weatherData = [];

    for (let i = 1; i <= 3; i++) {
        const dayForecast = data.daily[i];
        const minTemp = Math.round(dayForecast.temp.min);
        const maxTemp = Math.round(dayForecast.temp.max);
        const dayOfWeek = timestampToDayOfWeek(dayForecast.dt);
        const weather = dayForecast.weather[0].main;

        weatherData.push(
            <ForecastWeatherItem
                key={dayForecast.dt}
                minTemp={minTemp}
                maxTemp={maxTemp}
                dayOfWeek={dayOfWeek}
                weather={weather}
            />
        );
    }

    return <div className="forecast-weather-list">{weatherData}</div>;
}
