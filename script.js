
let weather = {
    apiKey: "57428a10c597b40112fb4bf0d660e1b5",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city
            + "&units=metric&appid=" 
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity }  = data.main;
        const { speed } = data.wind;
        // console.log(name, icon, description, temp, humidity,);
        // uncomment if you need to display the information the console
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =
         "https://openweathermap.org/img/wn/" + icon +".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temperature").innerText = temp + "°C";
        document.querySelector("humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/hr";
        document.querySelector(".weather").classList.remove("loading");
    },
    search: function () {
        this.fetchWeather(document.querySelector(".searchbar").value);
    }
};

document.querySelector(".search-btn")
.addEventListener("click", function () {
    weather.search();
});
// reference back to in case button does not work

document.querySelector(".searchbar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
})

weather.fetchWeather("lagos"); 