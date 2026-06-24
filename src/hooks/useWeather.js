import { useState, useEffect } from 'react'
import WeatherApi from '../services/WeatherApi'

const useWeather = () => {
        const [weatherData, setWeatherData] = useState(null);

    const [hourlyData, setHourlyData] = useState(null);

    const [weeklyData, setWeeklyData] = useState(null);

    const [error, setError] = useState(null);

    // Current City
    const [city, setCity] = useState(
        localStorage.getItem("city") || "Cairo"
    );
        useEffect(() => {
        const fetchWeather = async () => {
            try {
                const data = await WeatherApi.getCurrentWeather(city);

                setWeatherData(data);

                setError(null);
            } catch (error) {
                setError(error);
            }
        };

        fetchWeather();
    }, [city]);

    useEffect(() => {
        const fetchHourlyForecast = async () => {
            try {
                const data = await WeatherApi.getHourlyForecast(city);

                setHourlyData(data);
            } catch (error) {
                setError(error);
            }
        };

        fetchHourlyForecast();
    }, [city]);

    useEffect(() => {
        const fetchWeeklyForecast = async () => {
            try {
                if (weatherData) {
                    const { lat, lon } = weatherData.coord;

                    const data = await WeatherApi.getWeeklyForecast(
                        lat,
                        lon
                    );

                    setWeeklyData(data);
                }
            } catch (error) {
                setError(error);
            }
        };

        fetchWeeklyForecast();
    }, [weatherData]);



    return {
        weatherData,
        hourlyData,
        weeklyData,
        city,
        setCity,
        error

    };
}

export default useWeather