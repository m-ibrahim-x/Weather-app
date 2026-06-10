import { Link } from "react-router-dom";
import CustomButton from "../../components/ui/CustomButton";
import notFoundImage from "../../../src/assets/illustrations/error/NotFound.gif";

const NotFound = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-5">
        <div className="flex flex-col items-center text-center gap-8 max-w-3xl">
            <img src={notFoundImage} alt="404 page not found" className="w-full max-w-md" />

            <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Oops! Page Not Found</h1>

            <p className="text-gray-500 max-w-lg">
                The page you're looking for doesn't exist or may have been moved.
            </p>
            </div>

            <Link to="/">
            <CustomButton>
                Back Home
            </CustomButton>
            </Link>
        </div>
        </section>
    );
};

export default NotFound;