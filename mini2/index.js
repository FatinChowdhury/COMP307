const weatherUrl = 'https://api.open-meteo.com/v1/forecast?latitude=45.4657&longitude=-73.7455&hourly=temperature_2m&timezone=America/New_York';


async function fetchWeather() {
    try {
        const response = await fetch(weatherUrl);
        
        if (!response.ok) {
            throw new Error('Bad response');
        } // used AI bot for this !response.ok part

        const data = await response.json();
        const now = new Date();
        const currHour = now.getHours();

        const temperature = data.hourly.temperature_2m[currHour];
        document.getElementById("temperature").textContent = "It is now " + temperature + "°C in Montreal, Canada.";
        

    }
    catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        document.getElementById("temperature").textContent = "Loading...";
    }

} 
fetchWeather();
