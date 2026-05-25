import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/layout/HeroSection';
import WeatherLayout from '../components/layout/WeatherLayout';
import Footer from '../components/layout/Footer';
import './Home.css';

function Home() {
  return (
    <>  
      <div className="Home">
          <Navbar />
          <HeroSection />
          <WeatherLayout />
          <Footer />
      </div>
    </>
  );
}

export default Home;
