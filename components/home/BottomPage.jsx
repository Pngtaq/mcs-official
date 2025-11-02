import { useState } from "react";
import NavigationServices from "./NavigationServices";
import ServicesContent from "./ServicesContent";
import { servicesData, getServiceNames } from "../../data/servicesData";

const BottomPage = () => {
  const serviceNames = getServiceNames();
  const [activeService, setActiveService] = useState(serviceNames[0]);

  const handleServiceChange = (serviceName) => {
    setActiveService(serviceName);
  };

  return (
    <div className="relative min-h-screen flex items-center py-8 sm:py-12 lg:py-16">
      <div className="w-full rounded-3xl sm:rounded-[40px] lg:rounded-[60px] p-6 sm:p-8 md:p-10 lg:p-16 border-2 bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl border-white/30 shadow-2xl overflow-hidden">
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-[#fdc835] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

        <div className="relative z-10">
          {/* Header Section */}
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <div className="inline-block mb-3 sm:mb-4">
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#fdc835]/20 backdrop-blur-sm border border-[#fdc835]/40 rounded-full text-[#fdc835] text-xs sm:text-sm font-semibold">
                What We Offer
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-2xl leading-relaxed">
              We offer a range of creative and digital services designed to help
              your brand stand out and succeed in today's competitive market.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] xl:grid-cols-[400px_1fr] gap-6 sm:gap-8">
            {/* Navigation Sidebar */}
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-xs sm:text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3 sm:mb-4 px-2">
                Select Service
              </h3>
              {serviceNames.map((serviceName, index) => (
                <NavigationServices
                  key={serviceName}
                  serviceName={serviceName}
                  index={index + 1}
                  isActive={activeService === serviceName}
                  onSelect={handleServiceChange}
                />
              ))}
            </div>

            {/* Content Area */}
            <ServicesContent serviceData={servicesData[activeService]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomPage;
