import React from 'react';
import PropTypes from 'prop-types';
import { timestampToDayOfWeek } from '../../util/helpers';
import WeatherIcon from '../Common/WeatherIcon';
import WeatherTemp from '../Common/WeatherTemp';

function ForecastWeatherItem({ minTemp, maxTemp, weather, day, first }) {
    return (
        <div className={`forecast-weather-item  ${first ? 'first' : ''}`}>
            <div className="column-1">
                <WeatherIcon weather={weather} intent="color" />
            </div>
            <div className="column-2">
                <div className="weekday">{timestampToDayOfWeek(day)}</div>
                <div className="weather">{weather}</div>
            </div>
            <div className="column-3">
                <div className="min-max-temp">
                    <WeatherTemp temp={Math.round(maxTemp)} /> / <WeatherTemp temp={Math.round(minTemp)} />
                </div>
            </div>
        </div>
    );
}

ForecastWeatherItem.propTypes = {
    minTemp: PropTypes.number,
    maxTemp: PropTypes.number,
    weather: PropTypes.string,
    day: PropTypes.number,
    first: PropTypes.bool,
};

export default ForecastWeatherItem;
