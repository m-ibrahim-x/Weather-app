const LayerButton = ({ icon , onClick , isActive }) => {
    return (
        <button
        onClick={onClick}
        className={`flex h-12 w-12 items-center justify-center rounded-full backdrop-blur-lg shadow-lg transition cursor-pointer
        ${
            isActive ? "bg-blue-500 text-white"  : "text-white"
        }`} >
        {icon}
        </button>
    );
};

export default LayerButton;