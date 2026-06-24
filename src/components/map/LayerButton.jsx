const LayerButton = ({ icon, onClick, isActive }) => {
    return (
        <button
        onClick={onClick}
        className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/10 shadow-lg backdrop-blur-lg transition-all duration-300 hover:scale-105 ${
            isActive
            ? "bg-blue-500 text-white"
            : "bg-black/20 text-white/80 hover:bg-white/10"
        }`}
        >
        {icon}
        </button>
    );
};

export default LayerButton;