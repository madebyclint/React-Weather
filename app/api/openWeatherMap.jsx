var axios = require('axios');

// API Key: d964c536b7e4ab4ac56450c348047d2b
// API Url: http://api.openweathermap.org/data/2.5/weather?appid=d964c536b7e4ab4ac56450c348047d2b&units=imperial

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=d964c536b7e4ab4ac56450c348047d2b&units=imperial';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (err) {
            // throw new Error(err.response.data.message);
            throw new Error('Unable to fetch weather for that location.');
        });
    }
}