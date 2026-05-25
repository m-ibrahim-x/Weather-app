import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";

import { HiOutlineSun } from "react-icons/hi";

import WeatherLogo from "../../assets/icons/weather.png";

function Navbar() {
  return (
    <nav
      className="
        absolute
        top-5
        left-0
        z-50
        w-full
        px-4
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between

          rounded-[28px]

          px-5
          py-4

          md:px-8
        "
      >
        {/* MOBILE MENU */}
        <div
          className="
            order-1
            flex

            md:hidden
          "
        >
          <button className="text-white">
            <GiHamburgerMenu size={28} />
          </button>
        </div>

        {/* LOGO */}
        <div
          className="
            order-2
            flex
            items-center
            gap-2

            md:order-1
          "
        >
          <img
            src={WeatherLogo}
            alt="weather logo"
            className="
              h-7
              w-7
              object-contain
            "
          />

          <h1
            className="
              text-lg
              font-bold
              tracking-tight
              text-white

              md:text-xl
            "
          >
            Weather.
          </h1>
        </div>

        {/* LINKS */}
        <ul
          className="
            order-2
            hidden
            items-center
            gap-8

            md:flex
          "
        >
          <li>
            <Link
              to="/"
              className="
                relative
                text-sm
                font-medium
                text-white
              "
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/forecast"
              className="
                text-sm
                font-medium
                text-white/85
                transition

                hover:text-white
              "
            >
              Forecast
            </Link>
          </li>

          <li>
            <Link
              to="/map"
              className="
                text-sm
                font-medium
                text-white/85
                transition

                hover:text-white
              "
            >
              Map
            </Link>
          </li>
          
          <li>
            <Link
              to="/favorites"
              className="
                text-sm
                font-medium
                text-white/85
                transition

                hover:text-white
              "
            >
              Favorites
            </Link>
          </li>

          <li>
            <Link
              to="/settings"
              className="
                text-sm
                font-medium
                text-white/85
                transition

                hover:text-white
              "
            >
              Settings
            </Link>
          </li>
        </ul>

        {/* RIGHT SIDE */}
        <div
          className="
            order-3
            hidden
            items-center
            gap-4

            md:flex
          "
        >
          <button
            className="
              text-white
              transition

              hover:rotate-12
            "
          >
            <HiOutlineSun size={21} />
          </button>

          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="
              h-9
              w-9
              rounded-full

              border
              border-white/20

              object-cover
            "
          />
        </div>

        {/* MOBILE RIGHT */}
        <div
          className="
            order-3
            flex

            md:hidden
          "
        >
          <button className="text-white">
            ★
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;