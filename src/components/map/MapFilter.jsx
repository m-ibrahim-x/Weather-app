import {
    FaCloudSun,
    FaTemperatureHigh,
    FaCloudRain,
    FaWind,
    FaTint,
    FaGlobe
} from "react-icons/fa";
import LayerButton from "./LayerButton";

const MapFilter = ({ layer , setLayer }) => {
    return (
        <div className="absolute top-5 left-1/2 z-[1000] flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-black/30 p-3 backdrop-blur-xl">
            <LayerButton icon={<FaGlobe />} onClick={() => setLayer("globe")} isActive={layer === "globe"} />
            <LayerButton icon={<FaCloudSun />} onClick={() => setLayer("clouds")} isActive={layer === "clouds"} />
            <LayerButton icon={<FaTemperatureHigh />} onClick={() => setLayer("temperature")} isActive={layer === "temperature"} />
            <LayerButton icon={<FaCloudRain />} onClick={() => setLayer("precipitation")} isActive={layer === "precipitation"} />
            <LayerButton icon={<FaWind />} onClick={() => setLayer("wind")} isActive={layer === "wind"} />
            <LayerButton icon={<FaTint />} onClick={() => setLayer("pressure")} isActive={layer === "pressure"} />
        </div>
    );
};

export default MapFilter;