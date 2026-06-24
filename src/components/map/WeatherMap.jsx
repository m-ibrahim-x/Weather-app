import { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

import { API_KEY } from "../../services/WeatherApi";

function ChangeView({ center }) {
    const map = useMap();

    useEffect(() => {
        map.flyTo(center, 8, {
            duration: 1.5,
        });
    }, [center, map]);

    return null;
}

const WeatherMap = ({ layer, weatherData }) => {

    const center = [
        weatherData?.coord?.lat || 30.0444,
        weatherData?.coord?.lon || 31.2357,
    ];

    const layerUrls = {
        clouds: `https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${API_KEY}`,

        temperature: `https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${API_KEY}`,

        precipitation: `https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${API_KEY}`,

        wind: `https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${API_KEY}`,

        humidity: `https://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=${API_KEY}`,
    };

    const currentLayerUrl = layerUrls[layer];

    return (
        <MapContainer
            center={center}
            zoom={7}
            className="h-full w-full"
        >
            {/* Base Map */}
            <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Weather Layer */}
            {currentLayerUrl && (
                <TileLayer url={currentLayerUrl} />
            )}

            <ChangeView center={center} />
        </MapContainer>
    );
};

export default WeatherMap;