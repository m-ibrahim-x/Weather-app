import Cloudy from "../../../assets/icons/statusweather/Cloudy.png";
import Fog from "../../../assets/icons/statusweather/Fog.png";
import Rain from "../../../assets/icons/statusweather/Rain.png";
import Snow from "../../../assets/icons/statusweather/Snow.png";
import Sunny from "../../../assets/icons/statusweather/Sunny.png";
import Thunder from "../../../assets/icons/statusweather/Thunder.png";
import "../../../pages/Home.css";

const HourlyForecast = ({ hourlyData }) => {
    const weatherIcons = {
        Clear: Sunny,
        Clouds: Cloudy,
        Rain: Rain,
        Snow: Snow,
        Thunderstorm: Thunder,
        Mist: Fog,
    };

    return (
        <section className="mt-6 rounded-md bg-transparent px-4 py-4 md:border md:border-white/10 md:bg-black/10 md:backdrop-blur-md">
        {/* Section Header */}
        <div className="mb-5">
            <h2 className="text-lg font-semibold text-white">
            Hourly Forecast
            </h2>
        </div>

        {/* Forecast Cards */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-10">
            {hourlyData?.list?.slice(0, 10).map((hour, index) => (
            <div
                key={index}
                className="rounded-md bg-black/40 p-3 text-center"
            >
                {/* Time */}
                <p className="text-xs text-white/60">
                {new Date(hour.dt * 1000).toLocaleTimeString([], {
                    hour: "numeric",
                })}
                </p>

                {/* Weather Icon */}
                <img
                src={weatherIcons[hour.weather[0].main] || Sunny}
                alt={hour.weather[0].description}
                className="mx-auto my-2 h-8 w-8 object-contain"
                />

                {/* Temperature */}
                <h3 className="text-xl font-bold text-white">
                {Math.round(hour.main.temp)}°
                </h3>
            </div>
            ))}
        </div>
        </section>
    );
};

export default HourlyForecast;