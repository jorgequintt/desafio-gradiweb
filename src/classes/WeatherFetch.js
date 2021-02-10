export default class WeatherFetch {
    constructor() {
        this.apiEndpoint = 'https://api.openweathermap.org/data/2.5';
        this.apiKey = '9940bff35b7d9953214cb22ab3ce0470';
        this.timeout = 10000;
    }

    get(endpoint, params) {
        return new Promise((res) => {
            const encodedParams = new URLSearchParams(params).toString();
            const requestUrl = this.apiEndpoint + endpoint + '?' + encodedParams;

            const xhr = new XMLHttpRequest();
            xhr.timeout = this.timeout;
            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        if (xhr.getResponseHeader('content-type').indexOf('json') >= 0) {
                            res({ success: JSON.parse(xhr.response) });
                        } else {
                            res({ error: 'Response is not a JSON object' });
                        }
                    } else {
                        res({ error: 'Wrong HTTP status returned' });
                    }
                }
            };
            xhr.onerror = () => {
                res({ error: 'Something went wrong' });
            };
            xhr.ontimeout = () => {
                res({ error: 'Request timed out' });
            };

            xhr.open('GET', requestUrl, true);
            xhr.send();
        });
    }

    fetchCityDailyForecast(lat, lon) {
        const params = {
            lat,
            lon,
            exclude: 'minutely,hourly,alerts',
            units: 'metric',
            appid: this.apiKey,
        };

        return this.get('/onecall', params);
    }

    fetchCityCurrentWeather(city) {
        const params = {
            q: city,
            appid: this.apiKey,
            units: 'metric',
        };
        return this.get('/weather', params);
    }
}
