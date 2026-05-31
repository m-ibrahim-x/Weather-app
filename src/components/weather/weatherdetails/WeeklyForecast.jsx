import Cloudy from "../../../assets/icons/statusweather/Cloudy.png";
import Fog from "../../../assets/icons/statusweather/Fog.png";
import Rain from "../../../assets/icons/statusweather/Rain.png";
import Snow from "../../../assets/icons/statusweather/Snow.png";
import Sunny from "../../../assets/icons/statusweather/Sunny.png";
import Thunder from "../../../assets/icons/statusweather/Thunder.png";

const WeeklyForecast = ({ weeklyData }) => {
    // console.log(weeklyData.daily);

    const weatherCodeMap = {
        0: Sunny,

        1: Cloudy,
        2: Cloudy,
        3: Cloudy,

        45: Fog,
        48: Fog,

        51: Rain,
        53: Rain,
        55: Rain,

        61: Rain,
        63: Rain,
        65: Rain,

        71: Snow,
        73: Snow,
        75: Snow,
        77: Snow,

        95: Thunder,
        96: Thunder,
        99: Thunder,
    };
    return (
        <section className="mt-6 rounded-md bg-transparent p-0 md:border md:border-white/10 md:bg-black/10 md:p-5 md:backdrop-blur-md">
            {/* Section Header */}
            <div className="mb-5">
                <h2 className="text-lg font-semibold text-white">
                    7-Day Forecast
                </h2>
            </div>

            {/* Forecast Cards */}
            <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-3 lg:w-full">
                    {
                        weeklyData?.daily?.time?.map((date, index) => (

                            <div
                                key={date}
                                className="min-w-[100px] flex flex-col justify-center items-center rounded-md bg-black/40 p-4  lg:grow"
                            >

                                <div className="flex gap-2 ">

                                    <p className="text-sm font-medium text-white">
                                        {
                                            new Date(date).toLocaleDateString("en-US", {
                                                weekday: "short",
                                            })
                                        }
                                    </p>

                                    <span className="mt-1 block text-xs text-white/50">
                                        {
                                            new Date(date).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                            })
                                        }
                                    </span>

                                </div>

                                <img
                                    src={
                                        weatherCodeMap[weeklyData.daily.weather_code[index]]
                                        || Sunny
                                    }
                                    alt={`Weather Icon for ${date}`}
                                    className="h-8 w-8 md:my-3 md:h-9 md:w-9"
                                />

                                <div className="flex items-center gap-2">

                                    <h3 className="text-lg font-bold text-white md:text-xl">
                                        {Math.round(weeklyData.daily.temperature_2m_max[index])}°
                                    </h3>

                                    <span className="text-sm text-white/50">
                                        {Math.round(weeklyData.daily.temperature_2m_min[index])}°
                                    </span>

                                </div>

                            </div>
                        

                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default WeeklyForecast