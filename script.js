const weatherData = {
    "delhi": {
        temp: 35,
        condition: "Sunny",
        icon: "01d"
    },
    "mumbai": {
        temp: 30,
        condition: "Cloudy",
        icon: "03d"
    },
    "bangalore": {
        temp: 25,
        condition: "Rainy",
        icon: "09d"
    },
    "kolkata": {
        temp: 32,
        condition: "Hazy",
        icon: "50d"
    }
    // Add more cities if needed
};

function displayWeather(city) {
    const lowerCity = city.toLowerCase();
    const data = weatherData[lowerCity];

    const container = document.querySelector(".box");

    if (!data) {
        container.innerHTML = `<p style="text-align:center;">City not found in local database.</p>`;
        return;
    }

    container.innerHTML = `
        <div class="picContainer">
            <img src="https://openweathermap.org/img/wn/${data.icon}@2x.png" alt="Weather icon">
        </div>
        <h2 style="text-align:center">${city}</h2>
        <p style="text-align:center">Temperature: ${data.temp}°C</p>
        <p style="text-align:center">Condition: ${data.condition}</p>
    `;
}

window.onload = function () {
    const city = prompt("Enter city name (e.g. Delhi, Mumbai):");
    if (city) {
        displayWeather(city);
    }
};
