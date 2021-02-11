import React from 'react';
import PropTypes from 'prop-types';
import ForecastWeatherItem from './ForecastWeatherItem';

function ForecastWeatherList({ cityData: { data } }) {
    const forecastItems = [];

    for (let i = 0; i < 3; i++) {
        const dayForecast = data.daily[i];

        forecastItems.push(
            <ForecastWeatherItem
                key={dayForecast.dt}
                minTemp={dayForecast.temp.min}
                maxTemp={dayForecast.temp.max}
                day={dayForecast.dt}
                weather={dayForecast.weather[0].main}
                first={i === 0} // if its the first forecast, should be $mainColor
            />
        );
    }

    return (
        <div className="forecast-weather-list">
            <div className="forecast-title">
                <span className="days">3 Days</span> Forecast
            </div>
            <div className="forecast-list-content">{forecastItems}</div>
        </div>
    );
}

ForecastWeatherList.propTypes = {
    cityData: PropTypes.object,
};

export default ForecastWeatherList;
