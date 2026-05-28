import { HiOutlineSearch, HiOutlineLocationMarker } from "react-icons/hi";
// import { WiCloudy } from "react-icons/wi";
import { Link } from "react-router-dom";
import { useState } from "react";

// Status Icons Weather
import Cloudy from "../../assets/icons/statusweather/Cloudy.png";
import Fog from "../../assets/icons/statusweather/Fog.png";
import Rain from "../../assets/icons/statusweather/Rain.png";
import Snow from "../../assets/icons/statusweather/Snow.png";
import Sunny from "../../assets/icons/statusweather/Sunny.png";
import Thunder from "../../assets/icons/statusweather/Thunder.png";

function HeroSection({ weatherData, setCity }) {
    // WeatherIcons Daynamic
    const WeatherIcons = {
        Clear: Sunny,
        Snow: Snow,
        Clouds: Cloudy,
        Mist: Fog,
        Rain: Rain,
        Thunderstorm: Thunder,
    };

    const currentWeather = weatherData?.weather?.[0]?.main;

    const currentWeatherIcon = WeatherIcons[currentWeather];

    console.log(currentWeather);
    // City Input
    const [valueInput, setValueInput] = useState("");

    const handleSearch = () => {
        setCity(valueInput);
        localStorage.setItem("city", valueInput);
    };

    // console.log(weatherData);

    return (
        <section className="min-h-screen">
        {/* CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-screen items-center px-4 pt-32 pb-10 sm:px-6 md:px-8 lg:px-10">
            <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* LEFT SIDE */}
            <div className="rounded-[32px] sm:p-7">
                {/* SMALL TITLE */}
                <p className="mb-4 text-[11px] font-medium uppercase tracking-[5px] text-orange-100 sm:text-xs">
                Weather Forecast
                </p>
                {/* MAIN TITLE */}
                <h1 className="mx-auto max-w-[650px] font-bold leading-[1.05] text-white text-5xl md:text-6xl xl:text-7xl lg:mx-0">
                Find the weather in your city
                </h1>
                {/* DESCRIPTION */}
                <p className="mx-auto mt-6 max-w-[540px] hidden leading-7 text-white/75 md:block text-[clamp(0.95rem,2vw,1.1rem)] lg:mx-0">
                Get real-time weather updates, weekly forecasts and detailed
                climate information around the world.
                </p>
                {/* SEARCH BAR */}
                <div className="mx-auto mt-10 flex h-[60px] w-full max-w-[580px] items-center justify-between rounded-full border border-white/10 bg-black/20 pl-5 pr-2 backdrop-blur-md lg:mx-0">
                {/* LEFT */}
                <div className="flex flex-1 items-center gap-3">
                    <HiOutlineSearch className="text-white/60" size={20} />
                    <input
                    type="text"
                    placeholder="Search city..."
                    value={valueInput}
                    onChange={(e) => setValueInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                    className="w-full bg-transparent text-white outline-none placeholder:text-white/50 text-[clamp(0.9rem,2vw,1rem)]"
                    />
                </div>
                {/* BUTTON */}
                <Link
                    to="/map"
                    className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-white/15 text-white transition-all duration-300 hover:bg-white/25"
                >
                    <HiOutlineLocationMarker size={22} />
                </Link>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex justify-center lg:justify-end">
                <div className="w-full rounded-[34px] bg-white/10 p-6 text-center sm:p-8 lg:max-w-none lg:bg-transparent lg:p-0 lg:text-right">
                {/* DATE */}
                <p className="text-center text-white/80 text-[clamp(0.9rem,2vw,1rem)] lg:text-right">
                    {new Date().toLocaleString("en-US", {
                    day: "numeric",
                    month: "long",
                    })}
                </p>
                {/* CITY */}
                <h3 className="mt-3 text-left font-semibold text-white text-[clamp(1.5rem,4vw,2.3rem)] lg:text-right">
                    {weatherData?.name || "Cairo"} ,
                    {weatherData?.sys?.country || "Egypt"}
                </h3>
                {/* TEMP */}
                <div className="mt-5 flex items-center justify-center lg:justify-end">
                    <h1 className="font-bold leading-none text-white text-7xl md:text-8xl xl:text-[140px]">
                    {weatherData?.main?.temp
                        ? `${Math.round(weatherData.main.temp)}°C`
                        : "28°C"}
                    </h1>
                </div>
                {/* STATUS */}
                <div className="mt-3 flex items-center justify-center gap-2 lg:justify-end">
                    <img
                    src={currentWeatherIcon || Cloudy}
                    alt={currentWeather}
                    className="h-7 w-7 object-contain"
                    />
                    <p className="font-medium text-white/85 text-[clamp(1rem,2vw,1.25rem)]">
                    {weatherData?.weather?.[0]?.description || "Partly Cloudy"}
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}

export default HeroSection;
