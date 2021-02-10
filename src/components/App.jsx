import '../styles/main.scss';
import React, { Component } from 'react';
import WeatherFetch from '../classes/WeatherFetch';

import LocationsWeatherList from './Locations/LocationsWeatherList';
import CurrentWeather from './MainCity/CurrentWeather';
import ForecastWeatherList from './MainCity/ForecastWeatherList';

/**
 * @App Component
 *
 * In this component, we fetch weather data on component mount and then
 * pass them to their respective children components
 */

export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            mainCityData: null,
            locationsData: [],
        };
    }

    componentDidMount() {
        // Usamos la latitud y longitud de Bogotá ya que este endpoint en particular no permite
        // buscar por nombre de ciudad, pero es el unico que retorna el clima actual y
        // el forecast en un unico request
        const mainCityLat = '4.7110'; // Bogotá's Latitude
        const mainCityLon = '-74.063644'; // Bogotá's Longitude
        const mainCity = 'Bogotá';
        const defaultLocation = 'Paris';

        const weatherFetch = new WeatherFetch();
        const mainCityDataPromise = weatherFetch.fetchCityDailyForecast(mainCityLat, mainCityLon);
        const defaultLocationDataPromise = weatherFetch.fetchCityCurrentWeather(defaultLocation);

        // Fetch weather information about the main city (Bogotá) and the initial additional location (Paris)
        Promise.all([mainCityDataPromise, defaultLocationDataPromise])
            .then((data) => {
                const [mainCityData, defaultLocationData] = data;
                if (mainCityData.error || defaultLocationData.error) {
                    return this.setState({ error: 'An error ocurred, please try again.' });
                }

                this.setState({
                    mainCityData: { name: mainCity, data: mainCityData.success },
                    locationsData: [defaultLocationData.success],
                });
            })
            .catch((err) => {
                console.log(err);
                return this.setState({ error: 'An error ocurred, please try again.' });
            });
    }

    render() {
        return (
            <div className="container">
                {this.state.error ? (
                    this.state.error /* TODO */
                ) : this.state.mainCityData && this.state.locationsData.length > 0 ? (
                    <React.Fragment>
                        <div className="section-1">
                            <CurrentWeather cityData={this.state.mainCityData} />
                        </div>
                        <div className="section-2">
                            <ForecastWeatherList cityData={this.state.mainCityData} />
                        </div>
                        <div className="section-3">
                            <LocationsWeatherList locations={this.state.locationsData} />
                        </div>
                    </React.Fragment>
                ) : (
                    'Loading'
                )}
            </div>
        );
    }
}

export default App;
