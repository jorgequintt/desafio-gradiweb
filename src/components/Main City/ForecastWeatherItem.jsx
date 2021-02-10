import React from 'react';
import { dayNumberToWeekDay } from '../../util/funcs';

export default function ForecastWeatherItem({ minTemp, maxTemp, weather, dayOfWeek }) {
    return (
        <div>
            {dayNumberToWeekDay(dayOfWeek)}: {minTemp} / {maxTemp}, {weather}
        </div>
    );
}
