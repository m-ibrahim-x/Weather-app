import { useEffect, useState } from "react";
import MapFilter from "../components/map/MapFilter";
import WeatherMap from "../components/map/WeatherMap";
import WeatherApi from "../services/WeatherApi";

const Map = () => {
    // Layer State
    const [layer, setLayer] = useState("globe");

    // Weather Data State
    const [weatherData, setWeatherData] = useState(null);

    // Current City
    const city = localStorage.getItem("city") || "Cairo";

    useEffect(() => {
        const fetchWeather = async () => {
            const data = await WeatherApi.getCurrentWeather(city);
            setWeatherData(data);
            // console.log(data);
        };
        fetchWeather();
        
    }, [city]);

    
    return (
        <section className="relative h-screen">
            <MapFilter layer={layer} setLayer={setLayer} />

            <WeatherMap
                layer={layer}
                weatherData={weatherData}
            />
        </section>
    );
};

export default Map;