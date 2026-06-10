const CustomButton = ({ children, type = "button", onClick, className = "" }) => {
    return (
        <button type={type} onClick={onClick} className={`px-6 py-3 rounded-2xl font-semibold bg-yellow-400 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-500 active:scale-95 cursor-pointer ${className}`}>
        {children}
        </button>
    );
};

export default CustomButton;