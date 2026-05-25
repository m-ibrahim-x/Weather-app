import { Link } from "react-router-dom";
import { House, Map, Star, Settings } from "lucide-react";

const Footer = () => {
    return (
        <nav className="w-full border-t border-white/10 bg-black/70 px-6 py-3 backdrop-blur-md md:hidden">
            <div className="flex items-center justify-between">

                {/* Home */}
                <Link
                    to="/"
                    className="flex flex-col items-center gap-1 text-violet-400 transition-all duration-300 hover:text-violet-300 focus:text-violet-300"
                >
                    <House size={20} />
                    <span className="text-xs font-medium">
                        Home
                    </span>
                </Link>

                {/* Map */}
                <Link
                    to="/map"
                    className="flex flex-col items-center gap-1 text-white/60 transition-all duration-300 hover:text-cyan-300 focus:text-cyan-300"
                >
                    <Map size={20} />
                    <span className="text-xs font-medium">
                        Map
                    </span>
                </Link>

                {/* Favorites */}
                <Link
                    to="/favorites"
                    className="flex flex-col items-center gap-1 text-white/60 transition-all duration-300 hover:text-yellow-300 focus:text-yellow-300"
                >
                    <Star size={20} />
                    <span className="text-xs font-medium">
                        Favorites
                    </span>
                </Link>

                {/* Settings */}
                <Link
                    to="/settings"
                    className="flex flex-col items-center gap-1 text-white/60 transition-all duration-300 hover:text-pink-300 focus:text-pink-300"
                >
                    <Settings size={20} />
                    <span className="text-xs font-medium">
                        Settings
                    </span>
                </Link>
            </div>
        </nav>
    )
}

export default Footer