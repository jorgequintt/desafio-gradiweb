import React from 'react';
import PropTypes from 'prop-types';
import getCountryName from '../../util/getCountryName';
import { getCardinal } from '../../util/helpers';
import WeatherIcon from '../Common/WeatherIcon';
import WeatherTemp from '../Common/WeatherTemp';

function LocationsWeatherItem({ weather, temp, humidity, city, country, wind }) {
    const countryName = getCountryName(country);

    return (
        <div className="locations-weather-item">
            <div className="section-1">
                <div className="column-1">
                    <div className="weather-icon-wrapper">
                        <WeatherIcon weather={weather} intent="color" />
                    </div>
                </div>
                <div className="column-2">
                    <div className="temp-wrapper">
                        <WeatherTemp temp={Math.round(temp)} />
                    </div>
                </div>
                <div className="column-3">
                    <div className="city-name">{city}</div>
                    <div className="country-name">{countryName}</div>
                </div>
            </div>
            <div className="section-2">
                <div>Humidity {humidity}%</div>
                <div>{getCardinal(wind.deg)}</div>
                <div>{wind.speed}m/s</div>
            </div>
        </div>
    );
}
LocationsWeatherItem.propTypes = {
    weather: PropTypes.string,
    temp: PropTypes.number,
    humidity: PropTypes.number,
    city: PropTypes.string,
    country: PropTypes.string,
    wind: PropTypes.object,
};

export default LocationsWeatherItem;
