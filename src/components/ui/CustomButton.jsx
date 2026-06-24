const CustomButton = ({
    children,
    type = "button",
    onClick,
    className = "",
    disabled = false,
    variant = "primary",
    }) => {
    const variants = {
        primary:
        "bg-yellow-400 text-white hover:-translate-y-1 hover:bg-yellow-500",
    };

    return (
        <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`cursor-pointer rounded-2xl px-6 py-3 font-semibold shadow-md transition-all duration-300 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
        >
        {children}
        </button>
    );
};

export default CustomButton;