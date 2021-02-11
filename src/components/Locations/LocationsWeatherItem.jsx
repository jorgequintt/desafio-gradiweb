import React from 'react';
import getCountryName from '../../util/getCountryName';
import { getCardinal } from '../../util/helpers';

export default function LocationsWeatherItem({ weather, temp, humidity, city, country, wind }) {
    const countryName = getCountryName(country);

    return (
        <div>
            {weather} {Math.round(temp)} {city} {countryName} {wind.speed}m/s {getCardinal(wind.deg)} Humidity{' '}
            {humidity}%
        </div>
    );
}
