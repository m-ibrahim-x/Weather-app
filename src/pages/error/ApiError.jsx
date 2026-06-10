import CustomButton from "../../components/ui/CustomButton";
import apiErrorImage from "../../assets/illustrations/error/SearchError.svg";

const ApiError = ({onRetry }) => {
    return (
        <section className="min-h-screen flex items-center justify-center px-5">
            <div className="flex flex-col items-center text-center gap-8 max-w-3xl">

                <img
                    src={apiErrorImage}
                    alt="Api Error"
                    className="w-full max-w-md"
                />

                    <p className="text-4xl md:text-5xl font-bold">
                        Oops! Something Went Wrong
                    </p>
                
                <CustomButton onClick={onRetry}>
                    Try Again
                </CustomButton>

            </div>
        </section>
    );
};

export default ApiError;