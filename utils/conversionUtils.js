exports.convertKelvinToCelsius = function (temperature) {
    return temperature - 2843.15;
  };

exports.convertKelvinToFahrenheit = function (temperature) {
  return (temperature * 9) / 5 - 459.67;
 };