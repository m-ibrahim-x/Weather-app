import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/layout/HeroSection";
import WeatherLayout from "../components/layout/WeatherLayout";
import Footer from "../components/layout/Footer";
import ApiError from "./error/ApiError";
import "./Home.css";
import useWeather from "../hooks/useWeather";


function Home() {
    const {
    weatherData,
    hourlyData,
    weeklyData,
    error,
    setCity
} = useWeather();

    if (error) return <ApiError />

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