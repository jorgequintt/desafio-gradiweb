import React from 'react';
import PropTypes from 'prop-types';

function WeatherTemp({ temp }) {
    return (
        <div className="temp">
            <span className="value">{temp}</span>
            <span className="celcius-symbol">○ c</span>
        </div>
    );
}

WeatherTemp.propTypes = {
    temp: PropTypes.number,
};

export default WeatherTemp;
