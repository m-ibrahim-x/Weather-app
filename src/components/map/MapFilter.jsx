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
        <div className="absolute top-5 right-5 z-[1000] flex flex-col gap-3">
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