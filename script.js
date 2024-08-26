let weather = {
    "apiKey": "597bcbd3cd3fd345031aa8f6da45d0bb",
    fetchweather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayweather(data));
    },
    displayweather: function(data) {
        const { name } = data;
        const {icon, description} = data.weather[0];
        const { temp, humidity} = data.main;
        const { speed } = data.wind;
        // document.querySelector(".search-bar").innerText = "";
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon + "@2x.png"
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed : " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = 'pexels-eberhardgross-534164.jpg';
        
    },
    search: function() {
        this.fetchweather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if(event.key == "Enter"){
        weather.search();
    }
})

weather.fetchweather("");