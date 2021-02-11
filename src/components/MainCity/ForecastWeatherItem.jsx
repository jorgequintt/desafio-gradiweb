import React from 'react';
import { timestampToDayOfWeek } from '../../util/helpers';
import WeatherIcon from '../Common/WeatherIcon';

export default function ForecastWeatherItem({ minTemp, maxTemp, weather, day }) {
    return (
        <div>
            <WeatherIcon weather={weather} intent="color" />
            {timestampToDayOfWeek(day)}: {Math.round(minTemp)} / {Math.round(maxTemp)}, {weather}
        </div>
    );
}
