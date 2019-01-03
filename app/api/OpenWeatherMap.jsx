var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=3ca71a6307a1d72acbbc7f06f456a9d0&units=metric';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(
      function(result) {
        if(result.data.cod && result.data.message)
          throw new Error(result.data.message);
        else
          return result.data.main.temp;
      },
      function(error) {
        // throw new Error(error.response.data.message);
        throw new Error('City not found');
      }
    );
  }
}
