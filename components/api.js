/* 
    File for doing api requests
*/
export const getWeatherByCityName = (cityName) => {
    fetch('api.openweathermap.org/data/2.5/weather?q='+ cityName + '&appid=2ccc32cc195c49726f1ee7f58a717fb6')
    .then(response => response.json())
    .then(response => console.log(response));

    return response;

}

