import axios from "axios";

export const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const WeatherApi = {

    getCurrentWeather: async (city) => {

        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        return response.data;
    },

    getHourlyForecast: async (city) => {

        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        );
            
        return response.data;

    },    
    getWeeklyForecast: async (lat, lon) => {

        const response = await axios.get(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`
        );

        return response.data;

    },

};

export default WeatherApi;