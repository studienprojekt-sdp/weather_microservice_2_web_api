exports.convertKelvinToCelsius = function (temperature) {
    return temperature - 273.15;
  };

exports.convertKelvinToFahrenheit = function (temperature) {
  return (temperature * 9) / 5 - 459.67;
 };