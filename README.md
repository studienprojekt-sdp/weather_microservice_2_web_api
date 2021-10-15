# Microservice to return current weather report in Browser

using OpenWeatherMap API: https://openweathermap.org/

# Test

run the container with published ports

`docker run -dit --publish 3000:3000 --name <CONTAINER_NAME> <IMAGE_NAME>`

then enter in your browser's address bar

`http://localhost:3000/api/city/w=<CITY>`


