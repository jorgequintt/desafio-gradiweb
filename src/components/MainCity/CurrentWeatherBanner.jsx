import React from 'react';
import { slugify } from '../../util/helpers';
import WeatherIcon from '../Common/WeatherIcon';
import WeatherTemp from '../Common/WeatherTemp';

/* We import all svg images so we can obtain their URL after being
moved by the file-loader */
function importAll(r) {
    let banners = {};
    r.keys().map((item, index) => {
        banners[item.replace('./', '')] = r(item);
    });
    return banners;
}

const banners = importAll(require.context('../../assets/images/', true, /-banner.jpg$/));

export default function CurrentWeatherBanner({ cityData: { name: cityName, data } }) {
    const currentWeather = data.current;
    const temp = currentWeather.temp;
    const weather = currentWeather.weather[0].main;

    const bannerSrc = banners[`${slugify(cityName)}-banner.jpg`];

    return (
        <div
            className="current-weather-banner"
            style={{
                backgroundImage: `url(${bannerSrc})`,
            }}
        >
            <div className="banner-title">
                <i className="fas fa-map-marker-alt banner-icon"></i>
                {cityName}
            </div>

            <div className="weather-info-wrapper">
                <div className="weather">
                    <WeatherIcon weather={weather} intent="white" />
                    <div className="weather-title">{weather}</div>
                </div>
                <div className="temp-wrapper">
                    <WeatherTemp temp={temp} />
                </div>
            </div>
        </div>
    );
}
