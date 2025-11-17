import { motion } from "framer-motion";

const NavigationServices = ({
  serviceName,
  index,
  isActive,
  onSelect,
  delay = 0,
}) => {
  const handleClick = () => {
    onSelect(serviceName);
  };

  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: delay + 0.8 }}
      whileHover={{ scale: 1.02, x: 5 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className={`group relative text-left py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl transition-all duration-500 border overflow-hidden w-full ${
        isActive
          ? "bg-gradient-to-r from-[#fdc835] to-[#fdb835] text-gray-900 font-bold border-[#fdc835] shadow-lg shadow-[#fdc835]/50 scale-105"
          : "bg-white/5 backdrop-blur-md text-white border-white/20 hover:bg-white/10 hover:border-[#fdc835]/50 hover:scale-102"
      }`}
      aria-pressed={isActive}
      aria-label={`Select ${serviceName} service`}
    >
      {/* Shine effect on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 ${
          isActive
            ? ""
            : "translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"
        }`}
      ></div>

      <div className="relative flex items-center gap-2 sm:gap-3">
        <span
          className={`text-sm sm:text-base lg:text-lg font-bold ${
            isActive ? "text-gray-800" : "text-[#fdc835]"
          }`}
        >
          0{index}
        </span>
        <span className="flex-1 text-xs sm:text-sm lg:text-base">
          {serviceName}
        </span>
        <svg
          className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 flex-shrink-0 ${
            isActive ? "rotate-0" : "-rotate-45 group-hover:rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </motion.button>
  );
};

export default NavigationServices;
