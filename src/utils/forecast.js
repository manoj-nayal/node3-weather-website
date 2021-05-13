const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=9c696415f3f1ea770803c526e195c527&query=${latitude},${longitude}&units=m`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback(`Unable to connect to weather services`, undefined);
    } else if (body.error) {
      callback(`Unable to find location`, undefined);
    } else {
      const temperature = body.current.temperature;
      const feelslike = body.current.feelslike;
      const description = body.current.weather_descriptions[0];
      callback(
        undefined,
        `${description}. It is currently ${temperature}°C out but it feels like ${feelslike}°C out.`
      );
    }
  });
};

module.exports = forecast;
