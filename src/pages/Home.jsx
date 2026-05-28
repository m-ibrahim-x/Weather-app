import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/layout/HeroSection';
import WeatherLayout from '../components/layout/WeatherLayout';
import Footer from '../components/layout/Footer';
import './Home.css';

// API 
import WeatherApi from "../services/WeatherApi";

import { useEffect , useState } from "react";

// StorageData

function Home() {
const [weatherData , setWeatherData] = useState(null);

const [hourlyData , setHourlyData] = useState(null);

// Current City
const [city , setCity] = useState(
    localStorage.getItem("city") || "Cairo"
);

  useEffect(() => {

      const fetchWeather = async () => {

          const data = await WeatherApi.getCurrentWeather(city);

          setWeatherData(data);
          // console.log(weatherData);

      };

      fetchWeather();

  }, [city]);

  useEffect(() => {

      const fetchHourlyForecast = async () => {

          const data = await WeatherApi.getHourlyForecast(city);

          setHourlyData(data);

      };

      fetchHourlyForecast();

  }, [city]);

  return (
    <>  
      <div className="Home">
          <Navbar />
          <HeroSection weatherData={weatherData} setCity={setCity} />
          <WeatherLayout weatherData={weatherData} hourlyData={hourlyData} />
          <Footer />
      </div>
    </>
  );
}

export default Home;
