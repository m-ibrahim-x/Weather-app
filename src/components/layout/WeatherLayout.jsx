import CurrentWeather from "../weather/weatherdetails/CurrentWeather";
import HourlyForecast from "../weather/weatherdetails/HourlyForecast";
import WeatherHighlights from "../weather/weatherdetails/WeatherHighlights";

const WeatherLayout = () => {
    return (
        <section className="mt-10  border-white/10 bg-black/50 p-5">
            <CurrentWeather />
            <HourlyForecast />
            <WeatherHighlights />
        </section>
    )
}

export default WeatherLayout