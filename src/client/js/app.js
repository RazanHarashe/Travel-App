import axios from 'axios';

const weatherAPI = '899918337179137';

export async function getWeather(event) {
  event.preventDefault();
  
  const location = document.getElementById('location').value;
  if (!location) return alert('Please enter a location');
  
  try {
    const response = await axios.get(`https://api.weatherbit.io/v2.0/current?city=${location}&key=${weatherAPI}`);
    document.getElementById('result').innerHTML = `
      <h3>Weather in ${response.data.data[0].city_name}</h3>
      <p>Temperature: ${response.data.data[0].temp}°C</p>
    `;
  } catch (error) {
    alert('Unable to fetch weather data.');
    console.error(error);
  }
}
