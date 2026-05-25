import Humidity from "../../../assets/icons/Humidity.png";
import WindSpeed from "../../../assets/icons/WindSpeed.png";
import Pressure from "../../../assets/icons/Pressure.png";
import Visibility from "../../../assets/icons/Visibility.png";
import UV from "../../../assets/icons/UV.png";
import AirQuality from "../../../assets/icons/AirQuality.png";

const CurrentWeather = () => {
    return (
        <section
        className="
            mt-10

            rounded-[36px]

            border
            border-white/5

            bg-black/5

            p-4

            backdrop-blur-sm

            sm:p-5

            lg:p-6
        "
        >
        {/* GRID */}
        <div
            className="
            grid
            grid-cols-2
            gap-4

            md:grid-cols-3

            xl:grid-cols-6
            "
        >
            {/* CARD 1 */}
            <div
            className="
                flex
                items-center
                gap-4

                rounded-[28px]

                border
                border-white/10

                bg-black/25

                p-5

                backdrop-blur-sm

                transition

                hover:bg-black/35
            "
            >
            <img
                src={Humidity}
                alt="Humidity"
                className="
                h-11
                w-11
                shrink-0
                object-contain
                "
            />

            <div>
                <h3
                className="
                    text-sm
                    font-medium
                    text-white/70
                "
                >
                Humidity
                </h3>

                <p
                className="
                    mt-1

                    text-2xl
                    font-bold
                    text-white
                "
                >
                65%
                </p>
            </div>
            </div>

            {/* CARD 2 */}
            <div
            className="
                flex
                items-center
                gap-4

                rounded-[28px]

                border
                border-white/10

                bg-black/25

                p-5

                backdrop-blur-sm

                transition

                hover:bg-black/35
            "
            >
            <img
                src={WindSpeed}
                alt="Wind Speed"
                className="
                h-11
                w-11
                shrink-0
                object-contain
                "
            />

            <div>
                <h3
                className="
                    text-sm
                    font-medium
                    text-white/70
                "
                >
                Wind Speed
                </h3>

                <p
                className="
                    mt-1

                    text-2xl
                    font-bold
                    text-white
                "
                >
                18 km/h
                </p>
            </div>
            </div>

            {/* CARD 3 */}
            <div
            className="
                flex
                items-center
                gap-4

                rounded-[28px]

                border
                border-white/10

                bg-black/25

                p-5

                backdrop-blur-sm

                transition

                hover:bg-black/35
            "
            >
            <img
                src={Pressure}
                alt="Pressure"
                className="
                h-11
                w-11
                shrink-0
                object-contain
                "
            />

            <div>
                <h3
                className="
                    text-sm
                    font-medium
                    text-white/70
                "
                >
                Pressure
                </h3>

                <p
                className="
                    mt-1

                    text-2xl
                    font-bold
                    text-white
                "
                >
                1012 hPa
                </p>
            </div>
            </div>

            {/* CARD 4 */}
            <div
            className="
                flex
                items-center
                gap-4

                rounded-[28px]

                border
                border-white/10

                bg-black/25

                p-5

                backdrop-blur-sm

                transition

                hover:bg-black/35
            "
            >
            <img
                src={Visibility}
                alt="Visibility"
                className="
                h-11
                w-11
                shrink-0
                object-contain
                "
            />

            <div>
                <h3
                className="
                    text-sm
                    font-medium
                    text-white/70
                "
                >
                Visibility
                </h3>

                <p
                className="
                    mt-1

                    text-2xl
                    font-bold
                    text-white
                "
                >
                10 km
                </p>
            </div>
            </div>

            {/* CARD 5 */}
            <div
            className="
                hidden

                items-center
                gap-4

                rounded-[28px]

                border
                border-white/10

                bg-black/25

                p-5

                backdrop-blur-sm

                transition

                hover:bg-black/35

                md:flex
            "
            >
            <img
                src={UV}
                alt="UV Index"
                className="
                h-11
                w-11
                shrink-0
                object-contain
                "
            />

            <div>
                <h3
                className="
                    text-sm
                    font-medium
                    text-white/70
                "
                >
                UV Index
                </h3>

                <p
                className="
                    mt-1

                    text-2xl
                    font-bold
                    text-white
                "
                >
                Moderate
                </p>
            </div>
            </div>

            {/* CARD 6 */}
            <div
            className="
                hidden

                items-center
                gap-4

                rounded-[28px]

                border
                border-white/10

                bg-black/25

                p-5

                backdrop-blur-sm

                transition

                hover:bg-black/35

                md:flex
            "
            >
            <img
                src={AirQuality}
                alt="Air Quality"
                className="
                h-11
                w-11
                shrink-0
                object-contain
                "
            />

            <div>
                <h3
                className="
                    text-sm
                    font-medium
                    text-white/70
                "
                >
                Air Quality
                </h3>

                <p
                className="
                    mt-1

                    text-2xl
                    font-bold
                    text-white
                "
                >
                Good
                </p>
            </div>
            </div>
        </div>
        </section>
    );
};

export default CurrentWeather;