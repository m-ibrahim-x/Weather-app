const HourlyForecast = () => {
    return (
        <section className="mt-6 rounded-md bg-transparent px-4 py-4 md:border md:border-white/10 md:bg-black/10 md:backdrop-blur-md">
            {/* Section Header */}
            <div className="mb-5">
                <h2 className="text-lg font-semibold text-white">
                    Hourly Forecast
                </h2>
            </div>
            {/* Forecast Cards */}
            <div className="grid grid-cols-4 gap-3 md:grid-cols-6 lg:grid-cols-10 ">
                {/* Now */}
                <div className="rounded-md bg-black/40 p-3 text-center">
                    <p className="text-xs text-white/60">
                        Now
                    </p>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
                        alt="Sunny"
                        className="mx-auto my-2 h-8 w-8"
                    />
                    <h3 className="text-xl font-bold text-white">
                        28°
                    </h3>
                </div>

                {/* 9 AM */}
                <div className="rounded-md bg-black/40 p-3 text-center">
                    <p className="text-xs text-white/60">
                        9 AM
                    </p>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
                        alt="Sunny"
                        className="mx-auto my-2 h-8 w-8"
                    />
                    <h3 className="text-xl font-bold text-white">
                        29°
                    </h3>
                </div>

                {/* 10 AM */}
                <div className="rounded-md bg-black/40 p-3 text-center">
                    <p className="text-xs text-white/60">
                        10 AM
                    </p>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
                        alt="Sunny"
                        className="mx-auto my-2 h-8 w-8"
                    />
                    <h3 className="text-xl font-bold text-white">
                        31°
                    </h3>
                </div>

                {/* 11 AM */}
                <div className="rounded-md bg-black/40 p-3 text-center">
                    <p className="text-xs text-white/60">
                        11 AM
                    </p>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/414/414825.png"
                        alt="Cloudy"
                        className="mx-auto my-2 h-8 w-8"
                    />
                    <h3 className="text-xl font-bold text-white">
                        32°
                    </h3>
                </div>

                {/* 12 PM */}
                <div className="hidden rounded-md bg-black/40 p-3 text-center md:block">
                    <p className="text-xs text-white/60">
                        12 PM
                    </p>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
                        alt="Sunny"
                        className="mx-auto my-2 h-8 w-8"
                    />
                    <h3 className="text-xl font-bold text-white">
                        33°
                    </h3>
                </div>

                {/* 1 PM */}
                <div className="hidden rounded-md bg-black/40 p-3 text-center md:block">
                    <p className="text-xs text-white/60">
                        1 PM
                    </p>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/414/414825.png"
                        alt="Cloudy"
                        className="mx-auto my-2 h-8 w-8"
                    />
                    <h3 className="text-xl font-bold text-white">
                        34°
                    </h3>
                </div>

                {/* 2 PM */}
                <div className="hidden rounded-md bg-black/40 p-3 text-center lg:block">
                    <p className="text-xs text-white/60">
                        2 PM
                    </p>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
                        alt="Rain"
                        className="mx-auto my-2 h-8 w-8"
                    />
                    <h3 className="text-xl font-bold text-white">
                        33°
                    </h3>
                </div>

                {/* 3 PM */}
                <div className="hidden rounded-md bg-black/40 p-3 text-center lg:block">
                    <p className="text-xs text-white/60">
                        3 PM
                    </p>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
                        alt="Rain"
                        className="mx-auto my-2 h-8 w-8"
                    />
                    <h3 className="text-xl font-bold text-white">
                        32°
                    </h3>
                </div>

                {/* 4 PM */}
                <div className="hidden rounded-md bg-black/40 p-3 text-center lg:block">
                    <p className="text-xs text-white/60">
                        4 PM
                    </p>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
                        alt="Rain"
                        className="mx-auto my-2 h-8 w-8"
                    />
                    <h3 className="text-xl font-bold text-white">
                        30°
                    </h3>
                </div>

                {/* 5 PM */}
                <div className="hidden rounded-md bg-black/40 p-3 text-center lg:block">
                    <p className="text-xs text-white/60">
                        5 PM
                    </p>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/414/414825.png"
                        alt="Cloudy"
                        className="mx-auto my-2 h-8 w-8"
                    />
                    <h3 className="text-xl font-bold text-white">
                        29°
                    </h3>
                </div>
            </div>
        </section>
    )
}

export default HourlyForecast