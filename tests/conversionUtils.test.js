const conversionFunctions = require("../utils/conversionUtils");

describe("test conversion from kelvin to celsius", function () {
  
it("k to c with number", () => {
    expect(conversionFunctions.convertKelvinToCelsius(273.15)).toBe(0);
})

it("k to c with letters", () => {
  expect(conversionFunctions.convertKelvinToCelsius(test)).toBe(NaN);
})

it("k to c with null", () => {
  expect(conversionFunctions.convertKelvinToCelsius(test)).toBe(NaN);
})

it("k to c with undefined", () => {
  expect(conversionFunctions.convertKelvinToCelsius(test)).toBe(NaN);
})

});


describe("test conversion from kelvin to fahrenheit", function () {

it("k to f with number", () => {
  expect(conversionFunctions.convertKelvinToFahrenheit(255.372)).toBeCloseTo(0);
})

it("k to f with letters", () => {
  expect(conversionFunctions.convertKelvinToCelsius(test)).toBe(NaN);
})

it("k to f with null", () => {
  expect(conversionFunctions.convertKelvinToCelsius(test)).toBe(NaN);
})

it("k to f with undefined", () => {
  expect(conversionFunctions.convertKelvinToCelsius(test)).toBe(NaN);
})

});
