import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/layout/HeroSection';
import WeatherLayout from '../components/layout/WeatherLayout';
import './Home.css';

function Home() {
  return (
    <>  
    <div className="header">
        <Navbar />
        <HeroSection />
        <WeatherLayout />
    </div>
    </>
  );
}

export default Home;
