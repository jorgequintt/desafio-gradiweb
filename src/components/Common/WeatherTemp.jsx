import React from 'react';

export default function WeatherTemp({ temp }) {
    return (
        <div className="temp">
            <span className="value">{temp}</span>
            <span className="celcius-symbol">○ c</span>
        </div>
    );
}
