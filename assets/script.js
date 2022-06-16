const long = "-122.67563"
const lat = "45.51179"

function getWeatherData() {
    const apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat="+ lat +"&lon="+ long +"&exclude={part}&appid=51ae77056fd9abd11ca5e1e8a37541e0"

    fetch(apiUrl) 
        .then(function(response){
            console.log(response)
            todayForecast();
        });
};

function todayForecast(){

}

getWeatherData()
