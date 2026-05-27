import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/layout/HeroSection';
import WeatherLayout from '../components/layout/WeatherLayout';
import Footer from '../components/layout/Footer';
import './Home.css';

// API 
import { useEffect , useState } from "react";
import WeatherApi from "../services/WeatherApi";

// StorageData

function Home() {
const [weatherData, setWeatherData] = useState(null);

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

  return (
    <>  
      <div className="Home">
          <Navbar />
          <HeroSection weatherData={weatherData} setCity={setCity} />
          <WeatherLayout weatherData={weatherData} />
          <Footer />
      </div>
    </>
  );
}

export default Home;
