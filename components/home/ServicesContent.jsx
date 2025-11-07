import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ServicesContent = ({ serviceData, serviceName }) => {
  const navigate = useNavigate();

  if (!serviceData) return null;

  const handleGetStarted = () => {
    navigate(`/service/${encodeURIComponent(serviceName)}`);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={serviceData.title}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 text-white border border-white/20 shadow-xl"
      >
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-6 sm:mb-8"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-3 sm:mb-4"
          >
            <div className="w-2 h-2 rounded-full bg-[#fdc835] animate-pulse"></div>
            <span className="text-xs sm:text-sm font-semibold text-[#fdc835] uppercase tracking-wider">
              Featured Service
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent pb-2"
          >
            {serviceData.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-200"
          >
            {serviceData.description}
          </motion.p>
        </motion.div>
        {/* Two Column Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8"
        >
          {/* Features Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-[#fdc835]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#fdc835]/10"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="p-1.5 sm:p-2 bg-[#fdc835]/20 rounded-lg">
                <svg
                  className="w-4 h-4 sm:w-6 sm:h-6 text-[#fdc835]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white">
                What's Included
              </h3>
            </div>
            <ul className="space-y-2 sm:space-y-3">
              {serviceData.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 sm:gap-3 group"
                >
                  <div className="mt-0.5 sm:mt-1 flex-shrink-0">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#fdc835]/20 flex items-center justify-center group-hover:bg-[#fdc835]/30 transition-colors">
                      <span className="text-[#fdc835] text-xs">✓</span>
                    </div>
                  </div>
                  <span className="text-gray-100 text-xs sm:text-sm leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pricing & Details Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-[#fdc835]/20 via-[#fdc835]/10 to-transparent backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#fdc835]/30 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                <div className="p-1.5 sm:p-2 bg-[#fdc835] rounded-lg">
                  <svg
                    className="w-4 h-4 sm:w-6 sm:h-6 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white">
                  Service Details
                </h3>
              </div>

              <div className="space-y-3 sm:space-y-5">
                <div className="p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1 sm:mb-2">
                    Investment
                  </p>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#fdc835]">
                    {serviceData.price}
                  </p>
                </div>

                <div className="p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1 sm:mb-2">
                    Timeline
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl font-semibold text-white">
                    {serviceData.duration}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleGetStarted}
              className="mt-4 sm:mt-6 w-full bg-gradient-to-r from-[#fdc835] to-[#fdb835] text-gray-900 font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl hover:shadow-lg hover:shadow-[#fdc835]/50 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group text-sm sm:text-base"
            >
              <span>Get Started Today</span>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>{" "}
        {/* Info Banner */}
        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="relative bg-gradient-to-r from-[#fdc835]/20 to-[#fdc835]/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-[#fdc835]/40 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#fdc835] rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
          <div className="relative flex items-start gap-2 sm:gap-3">
            <div className="flex-shrink-0 mt-0.5 sm:mt-1">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-[#fdc835]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                <span className="font-bold text-[#fdc835]">
                  Complimentary Consultation:
                </span>{" "}
                All services include a free initial consultation. Contact our
                team for a personalized quote tailored to your specific business
                needs and requirements.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServicesContent;
