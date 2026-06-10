import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/layout/HeroSection";
import WeatherLayout from "../components/layout/WeatherLayout";
import Footer from "../components/layout/Footer";
import ApiError from "./error/ApiError";
import "./Home.css";

// API
import WeatherApi from "../services/WeatherApi";

import { useEffect, useState } from "react";

function Home() {
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

    if (error) {
        return <ApiError onRetry={() => window.location.reload()} />;
    }

    return (
        <div className="Home">
            <Navbar />

            <HeroSection
                weatherData={weatherData}
                setCity={setCity}
            />

            <WeatherLayout
                weatherData={weatherData}
                hourlyData={hourlyData}
                weeklyData={weeklyData}
            />

            <Footer />
        </div>
    );
}

export default Home;