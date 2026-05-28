import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const WeatherApi = {

    getCurrentWeather: async (city) => {

        try {

            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );

            return response.data;

        } catch (error) {

            console.error(
                "Error fetching current weather:",
                error
            );

        }

    },

    getHourlyForecast: async (city) => {

        try {

            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
            );

            return response.data;

        } catch (error) {

            console.error(
                "Error fetching hourly forecast:",
                error
            );

        }

    },

};

export default WeatherApi;