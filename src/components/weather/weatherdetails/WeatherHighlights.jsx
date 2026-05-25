const WeeklyForecast = () => {
    return (
        <section className="mt-6 rounded-md bg-transparent p-0 md:border md:border-white/10 md:bg-black/10 md:p-5 md:backdrop-blur-md">
            {/* Section Header */}
            <div className="mb-5">
                <h2 className="text-lg font-semibold text-white">
                    7-Day Forecast
                </h2>
            </div>

            {/* Forecast Cards */}
            <div className="grid grid-cols-1 gap-3 md:grid-cols-5 lg:grid-cols-7">
                {/* Sunday */}
                <div className="flex items-center justify-between rounded-md bg-black/40 p-4 md:flex-col md:justify-center md:text-center">
                    <div className="flex gap-2  md:flex-col">
                        <p className="text-sm font-medium text-white">
                            Sun
                        </p>
                        <span className="mt-1 block text-xs text-white/50">
                            May 21
                        </span>
                    </div>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
                        alt="Rain"
                        className="h-8 w-8 md:my-3 md:h-9 md:w-9"
                    />
                    <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-white md:text-xl">
                            34°
                        </h3>
                        <span className="text-sm text-white/50">
                            24°
                        </span>
                    </div>
                </div>

                {/* Monday */}
                <div className="flex items-center justify-between rounded-md bg-black/40 p-4 md:flex-col md:justify-center md:text-center">
                    <div className="flex gap-2  md:flex-col">
                        <p className="text-sm font-medium text-white">
                            Mon
                        </p>
                        <span className="mt-1 block text-xs text-white/50">
                            May 22
                        </span>
                    </div>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
                        alt="Sunny"
                        className="h-8 w-8 md:my-3 md:h-9 md:w-9"
                    />
                    <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-white md:text-xl">
                            35°
                        </h3>
                        <span className="text-sm text-white/50">
                            23°
                        </span>
                    </div>
                </div>

                {/* Tuesday */}
                <div className="flex items-center justify-between rounded-md bg-black/40 p-4 md:flex-col md:justify-center md:text-center">
                    <div className="flex gap-2  md:flex-col">
                        <p className="text-sm font-medium text-white">
                            Tue
                        </p>
                        <span className="mt-1 block text-xs text-white/50">
                            May 23
                        </span>
                    </div>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
                        alt="Sunny"
                        className="h-8 w-8 md:my-3 md:h-9 md:w-9"
                    />
                    <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-white md:text-xl">
                            36°
                        </h3>
                        <span className="text-sm text-white/50">
                            24°
                        </span>
                    </div>
                </div>

                {/* Wednesday */}
                <div className="flex items-center justify-between rounded-md bg-black/40 p-4 md:flex-col md:justify-center md:text-center">
                    
                    <div className="flex gap-2  md:flex-col">
                        <p className="text-sm font-medium text-white">
                            Wed
                        </p>
                        <span className="mt-1 block text-xs text-white/50">
                            May 24
                        </span>
                    </div>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/414/414825.png"
                        alt="Cloudy"
                        className="h-8 w-8 md:my-3 md:h-9 md:w-9"
                    />
                    <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-white md:text-xl">
                            33°
                        </h3>
                        <span className="text-sm text-white/50">
                            22°
                        </span>
                    </div>
                </div>

                {/* Thursday */}
                <div className="hidden items-center justify-between rounded-md bg-black/40 p-4 md:flex md:flex-col md:justify-center md:text-center">
                    <div>
                        <p className="text-sm font-medium text-white">
                            Thu
                        </p>
                        <span className="mt-1 block text-xs text-white/50">
                            May 25
                        </span>
                    </div>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
                        alt="Rain"
                        className="h-8 w-8 md:my-3 md:h-9 md:w-9"
                    />
                    <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-white md:text-xl">
                            28°
                        </h3>
                        <span className="text-sm text-white/50">
                            20°
                        </span>
                    </div>
                </div>

                {/* Friday */}
                <div className="hidden items-center justify-between rounded-md bg-black/40 p-4 lg:flex lg:flex-col lg:justify-center lg:text-center">
                    <div>
                        <p className="text-sm font-medium text-white">
                            Fri
                        </p>
                        <span className="mt-1 block text-xs text-white/50">
                            May 26
                        </span>
                    </div>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
                        alt="Rain"
                        className="h-8 w-8 lg:my-3 lg:h-9 lg:w-9"
                    />
                    <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-white md:text-xl">
                            27°
                        </h3>
                        <span className="text-sm text-white/50">
                            19°
                        </span>
                    </div>
                </div>

                {/* Saturday */}
                <div className="hidden items-center justify-between rounded-md bg-black/40 p-4 lg:flex lg:flex-col lg:justify-center lg:text-center">
                    <div>
                        <p className="text-sm font-medium text-white">
                            Sat
                        </p>
                        <span className="mt-1 block text-xs text-white/50">
                            May 27
                        </span>
                    </div>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
                        alt="Sunny"
                        className="h-8 w-8 lg:my-3 lg:h-9 lg:w-9"
                    />
                    <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-white md:text-xl">
                            30°
                        </h3>
                        <span className="text-sm text-white/50">
                            21°
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WeeklyForecast