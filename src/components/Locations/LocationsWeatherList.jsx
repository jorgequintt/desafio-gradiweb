import React from 'react';
import PropTypes from 'prop-types';
import AddLocation from './AddLocation';
import LocationWeatherItem from './LocationsWeatherItem';

/**
 * @LocationsWeatherList Component
 *
 * We only need to show Paris data, but in the sample image provided with the
 * document display a feature to add and keep track of other locations so I
 * decided to make this component behave like it would recieve a list of
 * locations. I prefered this over calling these components "ParisWeather" and such
 */

function LocationsWeatherList({ locations }) {
    const locationsListItems = [];

    for (let i = 0; i < locations.length; i++) {
        const location = locations[i];

        locationsListItems.push(
            <LocationWeatherItem
                key={location.id}
                weather={location.weather[0].main}
                temp={location.main.temp}
                humidity={location.main.humidity}
                city={location.name}
                country={location.sys.country}
                wind={location.wind}
            />
        );
    }

    return (
        <div className="locations-weather-list">
            <AddLocation />
            <div className="locations-content">{locationsListItems}</div>
        </div>
    );
}

LocationsWeatherList.propTypes = {
    locations: PropTypes.array,
};

export default LocationsWeatherList;
