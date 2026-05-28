const HourlyForecast = ({ hourlyData }) => {
    console.log(hourlyData)
    return (
        <section className="mt-6 rounded-md bg-transparent px-4 py-4 md:border md:border-white/10 md:bg-black/10 md:backdrop-blur-md">
            {/* Section Header */}
            <div className="mb-5">
                <h2 className="text-lg font-semibold text-white">
                    Hourly Forecast
                </h2>
            </div>
            {/* Forecast Cards */}
            <div className="grid grid-flow-col gap-3 overflow-x-auto md:grid-flow-row md:grid-cols-5 lg:grid-cols-10">
                {
                    hourlyData?.list?.slice(0, 10).map((hour, index) => (
                        <div
                            key={index}
                            className="min-w-[100px] rounded-md bg-black/40 p-3 text-center"
                        >
                            {/* Time */}
                            <p className="text-xs text-white/60">
                                {new Date(hour.dt * 1000).toLocaleTimeString([], {
                                    hour: "numeric",
                                })}
                            </p>
                            {/* Weather Icon */}
                            <img
                                src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
                                alt={hour.weather[0].description}
                                className="mx-auto my-2 h-8 w-8"
                            />
                            {/* Temperature */}
                            <h3 className="text-xl font-bold text-white">
                                {Math.round(hour.main.temp)}°
                            </h3>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default HourlyForecast;