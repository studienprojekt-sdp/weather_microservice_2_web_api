import express from "express";
import axios from "axios";

const app = express();
const port = 4001;

app.listen(port, () => {
  console.log("Weather microservice running!");
});

app.get("/api/weather/", function(req, res) { 
  const city = req.query.c; // the city that is passed via the URL
  const url  = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2e15c965ff28cc6a856c04b3489f9d68`;

    axios
      .get(url)
      .then(response => {
        
        const temperatureK = response.data.main.temp;
        const humidity     = response.data.main.humidity;
        const cityName     = response.data.name;
        const countryName  = response.data.sys.country;

        // Handle Temperature conversions from Kelvins
        const temperatureF = (temperatureK * 9) / 5 - 459.67;
        const temperatureC = temperatureK - 273.15;

        const weatherDisplay = `Right now, in \
            ${cityName}, ${countryName} the current temperature is \
            ${temperatureC.toFixed(1)} ºC \
            (${temperatureF.toFixed(1)} ºF), with ${humidity}% humidity, \
            conditions: ${response.data.weather[0].description} `.replace(/\s+/g, " ");

        res.status(200).send(weatherDisplay)
      })
      .catch(error => {
        if (error.response) {
          res.status(404).send("Error occurred! Reason: " + error.response.data)
        }
        else {
          res.status(404).send("Unknown error occurred!")
        }
      });

    });