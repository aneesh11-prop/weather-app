const apiKey = "7b7efd11c0604b03fae37c118c9b2edd"; 
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function displayWeather(city) {
    const container = document.querySelector(".box");

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            const icon = data.weather[0].icon;
            const condition = data.weather[0].main;
            const temp = data.main.temp;

            container.innerHTML = `
                <div class="picContainer">
                    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather icon">
                </div>
                <h2 style="text-align:center">${capitalize(city)}</h2>
                <p style="text-align:center">Temperature: ${temp}°C</p>
                <p style="text-align:center">Condition: ${condition}</p>
            `;
        })
        .catch(error => {
            container.innerHTML = `<p style="text-align:center; color: red;">${error.message}</p>`;
        });
}

window.addEventListener("DOMContentLoaded", () => {
    const city = prompt("Enter city name (e.g. Delhi, Mumbai):");
    if (city) {
        displayWeather(city);
    }
});
