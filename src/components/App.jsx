import '../styles/main.scss';
import React, { Component } from 'react';
import WeatherFetch from '../classes/WeatherFetch';

import LocationsWeatherList from './Locations/LocationsWeatherList';
import CurrentWeather from './MainCity/CurrentWeatherBanner';
import ForecastWeatherList from './MainCity/ForecastWeatherList';
import LoadingBox from './Common/LoadingBox';
import ErrorBox from './Common/ErrorBox';

/**
 * App Component
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
        const parisDataPromise = weatherFetch.fetchCityCurrentWeather('Paris');
        const sydneyDataPromise = weatherFetch.fetchCityCurrentWeather('Sydney');

        // Fetch weather information about the main city (Bogotá) and the initial additional location (Paris)
        Promise.all([mainCityDataPromise, parisDataPromise, sydneyDataPromise])
            .then((data) => {
                const [mainCityData, parisData, sydneyData] = data;

                if (mainCityData.error || parisData.error || sydneyData.error) {
                    return this.setState({ error: 'An error ocurred, please try again.' });
                }

                this.setState({
                    mainCityData: { name: mainCity, data: mainCityData.success },
                    locationsData: [parisData.success, sydneyData.success],
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
                    <ErrorBox text={this.state.error} iconSize={4} textSize={2} />
                ) : this.state.mainCityData && this.state.locationsData.length > 0 ? (
                    <React.Fragment>
                        <div className="section-1">
                            <CurrentWeather cityData={this.state.mainCityData} />
                        </div>
                        <div className="section-2">
                            <ForecastWeatherList cityData={this.state.mainCityData} />
                        </div>
                        <div className="section-3"></div>
                        <div className="section-4">
                            <LocationsWeatherList locations={this.state.locationsData} />
                        </div>
                    </React.Fragment>
                ) : (
                    <LoadingBox iconSize={5} />
                )}
            </div>
        );
    }
}

export default App;
