import React from 'react';
import { timestampToDayOfWeek } from '../../util/helpers';

export default function ForecastWeatherItem({ minTemp, maxTemp, weather, day }) {
    return (
        <div>
            {timestampToDayOfWeek(day)}: {Math.round(minTemp)} / {Math.round(maxTemp)}, {weather}
        </div>
    );
}
