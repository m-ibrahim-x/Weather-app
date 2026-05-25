import Humidity from "../../../assets/icons/Humidity.png";
import WindSpeed from "../../../assets/icons/WindSpeed.png";
import Pressure from "../../../assets/icons/Pressure.png";
import Visibility from "../../../assets/icons/Visibility.png";
import UV from "../../../assets/icons/UV.png";
import AirQuality from "../../../assets/icons/AirQuality.png";

const CurrentWeather = () => {
    return (
        <section className=" px-4 sm:px-6 md:px-8 lg:px-10 py-4">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                {/* First Box */}
                <div className="flex rounded-lg border border-white/10 bg-black/20 backdrop-blur-md md:block">
                    {/* First Card */}
                    <div className="flex flex-1 flex-col items-center justify-center gap-2 p-4 text-center md:flex-row md:text-left">
                        <img
                            src={Humidity}
                            alt="Humidity"
                            className="h-7 w-7 object-contain"
                        />
                        <div>
                            <h3 className="text-xs font-medium text-white/60">
                                Humidity
                            </h3>
                            <p className="mt-1 text-lg font-bold text-white">
                                65%
                            </p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-[1px] bg-white/10 md:hidden"></div>

                    {/* Second Card */}
                    <div className="flex flex-1 flex-col items-center justify-center gap-2 p-4 text-center md:hidden">
                        <img
                            src={WindSpeed}
                            alt="Wind Speed"
                            className="h-7 w-7 object-contain"
                        />
                        <div>
                            <h3 className="text-xs font-medium text-white/60">
                                Wind Speed
                            </h3>
                            <p className="mt-1 text-lg font-bold text-white">
                                18 km/h
                            </p>
                        </div>
                    </div>
                </div>

                {/* Wind Card For md+ */}
                <div className="hidden rounded-lg border border-white/10 bg-black/20 p-4 backdrop-blur-md md:flex md:flex-row md:items-center md:justify-center md:gap-3">
                    <img
                        src={WindSpeed}
                        alt="Wind Speed"
                        className="h-7 w-7 object-contain"
                    />
                    <div>
                        <h3 className="text-xs font-medium text-white/60">
                            Wind Speed
                        </h3>
                        <p className="mt-1 text-lg font-bold text-white">
                            18 km/h
                        </p>
                    </div>
                </div>

                {/* Second Box */}
                <div className="flex rounded-lg border border-white/10 bg-black/20 backdrop-blur-md md:block">
                    {/* Third Card */}
                    <div className="flex flex-1 flex-col items-center justify-center gap-2 p-4 text-center md:flex-row md:text-left">
                        <img
                            src={Pressure}
                            alt="Pressure"
                            className="h-7 w-7 object-contain"
                        />
                        <div>
                            <h3 className="text-xs font-medium text-white/60">
                                Pressure
                            </h3>
                            <p className="mt-1 text-lg font-bold text-white">
                                1012 hPa
                            </p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-[1px] bg-white/10 md:hidden"></div>

                    {/* Fourth Card */}
                    <div className="flex flex-1 flex-col items-center justify-center gap-2 p-4 text-center md:hidden">
                        <img
                            src={Visibility}
                            alt="Visibility"
                            className="h-7 w-7 object-contain"
                        />
                        <div>
                            <h3 className="text-xs font-medium text-white/60">
                                Visibility
                            </h3>
                            <p className="mt-1 text-lg font-bold text-white">
                                10 km
                            </p>
                        </div>
                    </div>
                </div>

                {/* Visibility Card For md+ */}
                <div className="hidden rounded-lg border border-white/10 bg-black/20 p-4 backdrop-blur-md md:flex md:flex-row md:items-center md:justify-center md:gap-3">
                    <img
                        src={Visibility}
                        alt="Visibility"
                        className="h-7 w-7 object-contain"
                    />
                    <div>
                        <h3 className="text-xs font-medium text-white/60">
                            Visibility
                        </h3>
                        <p className="mt-1 text-lg font-bold text-white">
                            10 km
                        </p>
                    </div>
                </div>

                {/* Fifth Card */}
                <div className="hidden rounded-lg border border-white/10 bg-black/20 p-4 backdrop-blur-md md:flex md:flex-row md:items-center md:justify-center md:gap-3">
                    <img
                        src={UV}
                        alt="UV Index"
                        className="h-7 w-7 object-contain"
                    />
                    <div>
                        <h3 className="text-xs font-medium text-white/60">
                            UV Index
                        </h3>
                        <p className="mt-1 text-lg font-bold text-white">
                            Moderate
                        </p>
                    </div>
                </div>

                {/* Sixth Card */}
                <div className="hidden rounded-lg border border-white/10 bg-black/20 p-4 backdrop-blur-md md:flex md:flex-row md:items-center md:justify-center md:gap-3">
                    <img
                        src={AirQuality}
                        alt="Air Quality"
                        className="h-7 w-7 object-contain"
                    />
                    <div>
                        <h3 className="text-xs font-medium text-white/60">
                            Air Quality
                        </h3>
                        <p className="mt-1 text-lg font-bold text-white">
                            Good
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CurrentWeather;