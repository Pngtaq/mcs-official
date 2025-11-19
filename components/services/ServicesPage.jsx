import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Navigation from "../Navigation";
import Footer from "../Footer";
import NavigationServices from "./NavigationServices";
import ServicesContent from "./ServicesContent";
import { servicesData, getServiceNames } from "../../data/servicesData";

const ServicesPage = () => {
  const serviceNames = getServiceNames();
  const location = useLocation();
  const [activeService, setActiveService] = useState(() => {
    // Initialize with service from location state if available
    if (
      location.state?.serviceName &&
      serviceNames.includes(location.state.serviceName)
    ) {
      return location.state.serviceName;
    }
    return serviceNames[0];
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleServiceChange = (serviceName) => {
    setActiveService(serviceName);
  };

  return (
    <div className="min-h-screen bg-gray">
      <Navigation />

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
              className="mb-8 sm:mb-10 lg:mb-12"
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
                className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-2xl leading-relaxed"
              >
                We offer a range of creative and digital services designed to
                help your brand stand out and succeed in today's competitive
                market.
              </motion.p>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-[340px_1fr] xl:grid-cols-[400px_1fr] gap-6 sm:gap-8"
            >
              {/* Navigation Sidebar */}
              <div className="space-y-2 sm:space-y-3">
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="text-xs sm:text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3 sm:mb-4 px-2"
                >
                  Select Service
                </motion.h3>
                {serviceNames.map((serviceName, index) => (
                  <NavigationServices
                    key={serviceName}
                    serviceName={serviceName}
                    index={index + 1}
                    isActive={activeService === serviceName}
                    onSelect={handleServiceChange}
                    delay={0.1 * index}
                  />
                ))}
              </div>

              {/* Content Area */}
              <ServicesContent
                serviceData={servicesData[activeService]}
                serviceName={activeService}
                key={activeService}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default ServicesPage;
