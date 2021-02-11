import React from 'react';
import PropTypes from 'prop-types';

/* We import all svg images so we can obtain their URL after being
moved by the file-loader */
function importAll(r) {
    let icons = {};
    r.keys().map((item, index) => {
        icons[item.replace('./', '')] = r(item);
    });
    return icons;
}

const icons = importAll(require.context('../../assets/icons/', true, /.svg$/));

function WeatherIcon({ weather, intent }) {
    let weatherIconSrc;

    const themedWeathers = ['Clouds', 'Thunderstorm', 'Drizzle', 'Rain', 'Snow'];
    if (weather === 'Clear') weatherIconSrc = 'clear.svg';
    else if (themedWeathers.indexOf(weather) >= 0) weatherIconSrc = `${weather.toLowerCase()}_${intent}.svg`;
    else weatherIconSrc = `unknown_${intent}.svg`;

    return (
        <div className="weather-icon-container">
            <img className="weather-icon" src={icons[weatherIconSrc]} />
        </div>
    );
}

WeatherIcon.propTypes = {
    weather: PropTypes.string,
    intent: PropTypes.string,
};

export default WeatherIcon;
