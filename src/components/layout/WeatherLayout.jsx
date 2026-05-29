import CurrentWeather from "../weather/weatherdetails/CurrentWeather";
import HourlyForecast from "../weather/weatherdetails/HourlyForecast";
import WeeklyForecast from "../weather/weatherdetails/WeeklyForecast";

const WeatherLayout = ({ weatherData , hourlyData , weeklyData }) => {
    return (
        <section className="mt-10  border-white/10 bg-black/50 p-5">
            <CurrentWeather weatherData={weatherData} />
            <HourlyForecast hourlyData={hourlyData} />
            <WeeklyForecast weeklyData={weeklyData} />
        </section>
    )
}

export default WeatherLayout