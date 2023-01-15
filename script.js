const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'da3254ab36mshb6d58f010474e3ep1be55bjsncb7a9f4b88a1',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Delhi");
document.querySelector("#Hisar").addEventListener("click", function () {
    getWeather("Hisar");
})
document.querySelector("#Bangalore").addEventListener("click", function () {
    getWeather("Bangalore");
})
document.querySelector("#UttarPradesh").addEventListener("click", function () {
    getWeather("Uttar Pradesh");
})
b = document.getElementsByClassName("firstrow");
const getWeather2 = (a, city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            a[0].innerHTML = response.cloud_pct
            a[1].innerHTML = response.feels_like
            a[2].innerHTML = response.humidity
            a[3].innerHTML = response.max_temp
            a[4].innerHTML = response.min_temp
            a[5].innerHTML = response.sunrise
            a[6].innerHTML = response.sunset
            a[7].innerHTML = response.temp
            a[8].innerHTML = response.wind_degrees
            a[9].innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
}
getWeather2(b, "Lucknow");
c = document.getElementsByClassName("secondrow");
getWeather2(c, "Hyderabad");
d = document.getElementsByClassName("thrdrow");
getWeather2(d, "Madhya Pradesh");
e = document.getElementsByClassName("forthrow");
getWeather2(e, "Shanghai");
