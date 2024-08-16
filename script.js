let searchInput = document.querySelector('.search input');

let apiKey = 'c2cabaf9c7ea38a0689ad5f5fed8550c';
let apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
let searchBox = document.querySelector('.search button');
let images = document.querySelector('.weather-icon');



async function checkWeather(city) {
    let response = await fetch(apiURL + city + `&appid=${apiKey}`);
    if (response.status == '404') {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }
    else {
        let data = await response.json();
        console.log(data);

        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';

        if (data.weather[0].main === 'Clouds') {
            images.src = 'weather-app-img/images/clouds.png'
        }
        else if (data.weather[0].main === 'Clear') {
            images.src = 'weather-app-img/images/clear.png'
        }
        else if (data.weather[0].main === 'Rain') {
            images.src = 'weather-app-img/images/rain.png'
        }
        else if (data.weather[0].main === 'Drizzle') {
            images.src = 'weather-app-img/images/drizzle.png'
        }
        else if (data.weather[0].main === 'Mist') {
            images.src = 'weather-app-img/images/mist.png'
        }

        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none';

    }

}
searchBox.addEventListener('click', function () {
    checkWeather(searchInput.value)
})