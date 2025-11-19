import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { servicesData, getServiceNames } from "../../data/servicesData";

const BottomPage = () => {
  const navigate = useNavigate();
  const serviceNames = getServiceNames();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative min-h-screen flex items-center py-8 sm:py-12 lg:py-16"
    >
      <div className="w-full rounded-3xl sm:rounded-[40px] lg:rounded-[60px] p-6 sm:p-8 md:p-10 lg:p-16 border-2 bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl border-white/30 shadow-2xl overflow-hidden">
        {/* Decorative gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-[#fdc835] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        />

        <div className="relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 sm:mb-10 lg:mb-12 text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block mb-3 sm:mb-4"
            >
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#fdc835]/20 backdrop-blur-sm border border-[#fdc835]/40 rounded-full text-[#fdc835] text-xs sm:text-sm font-semibold">
                What We Offer
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-2xl leading-relaxed mx-auto"
            >
              We offer a range of creative and digital services designed to help
              your brand stand out and succeed in today's competitive market.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10"
          >
            {serviceNames.map((serviceName, index) => {
              const service = servicesData[serviceName];
              return (
                <motion.div
                  key={serviceName}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-[#fdc835]/50 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-[#fdc835]/20"
                  onClick={() =>
                    navigate("/services", { state: { serviceName } })
                  }
                >
                  {/* Service Number */}
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl font-bold text-[#fdc835]/30 group-hover:text-[#fdc835]/50 transition-colors">
                      0{index + 1}
                    </span>
                    <div className="p-2 bg-[#fdc835]/20 rounded-lg group-hover:bg-[#fdc835]/30 transition-colors">
                      <svg
                        className="w-5 h-5 text-[#fdc835] transform group-hover:rotate-45 transition-transform duration-300"
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
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#fdc835] transition-colors">
                    {serviceName}
                  </h3>

                  {/* Service Description */}
                  <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* View Details Link */}
                  <div className="flex items-center gap-2 text-[#fdc835] text-sm font-semibold">
                    <span>Learn More</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-2 transition-transform"
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
                </motion.div>
              );
            })}
          </motion.div>

          {/* View All Services Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/services")}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#fdc835] to-[#fdb835] text-gray-900 font-bold py-4 px-8 rounded-xl hover:shadow-2xl hover:shadow-[#fdc835]/50 transition-all duration-300 group"
            >
              <span className="text-base sm:text-lg">View All Services</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-2 transition-transform"
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
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BottomPage;
