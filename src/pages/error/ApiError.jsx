import CustomButton from "../../components/ui/CustomButton";
import apiErrorImage from "../../assets/illustrations/error/SearchError.svg";

const ApiError = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-5">
            <div className="flex flex-col items-center text-center gap-6 max-w-3xl">

                <img
                    src={apiErrorImage}
                    alt="Api Error"
                    className="w-full max-w-md"
                />

                <h1 className="text-3xl font-bold md:text-5xl">
                    Oops! Something Went Wrong
                </h1>
                
                <CustomButton onClick={() => {
                    localStorage.removeItem("city");
                    window.location.reload()
                }}>
                    Back Home
                </CustomButton>

            </div>
        </section>
    );
};

export default ApiError;