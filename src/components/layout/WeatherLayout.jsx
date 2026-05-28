import CurrentWeather from "../weather/weatherdetails/CurrentWeather";
import HourlyForecast from "../weather/weatherdetails/HourlyForecast";
import WeatherHighlights from "../weather/weatherdetails/WeatherHighlights";

const WeatherLayout = ({ weatherData, hourlyData }) => {
    return (
        <section className="mt-10  border-white/10 bg-black/50 p-5">
            <CurrentWeather weatherData={weatherData} />
            <HourlyForecast hourlyData={hourlyData} />
            <WeatherHighlights weatherData={weatherData} />
        </section>
    )
}

export default WeatherLayout