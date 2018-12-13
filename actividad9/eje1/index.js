let request = require('request');

let apiKey = '38c69d261f8b6618ce34c6c27da8ced5';
let city = 'tokyo';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url,function(err,response,body){
    if (err) {
        console.log('error:', error);
    }else{
        let weather = JSON.parse(body);
        let message = `Hay ${weather.main.temp} grados en ${weather.name}!`;
        console.log(message);
    }
});
