import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getServiceData } from "../../data/servicesData";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import { useState } from "react";

const ServiceDetails = () => {
  const { serviceName } = useParams();
  const navigate = useNavigate();
  const [showContactForm, setShowContactForm] = useState(false);
  
  // Decode the service name from URL
  const decodedServiceName = decodeURIComponent(serviceName);
  const serviceData = getServiceData(decodedServiceName);

  if (!serviceData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-[#fdc835] text-gray-900 rounded-lg font-semibold hover:bg-[#fdb835] transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative pt-24 pb-16 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 overflow-hidden"
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#fdc835] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <button
              onClick={() => navigate("/")}
              className="text-gray-400 hover:text-[#fdc835] transition-colors flex items-center gap-2 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Services
            </button>
          </motion.div>

          {/* Service Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-[#fdc835]/20 backdrop-blur-sm border border-[#fdc835]/40 rounded-full text-[#fdc835] text-sm font-semibold">
              {decodedServiceName}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
          >
            {serviceData.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-300 max-w-4xl leading-relaxed mb-8"
          >
            {serviceData.description}
          </motion.p>

          {/* Quick Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-[#fdc835]/20 rounded-lg">
                  <svg className="w-6 h-6 text-[#fdc835]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">Investment</span>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-[#fdc835]">{serviceData.price}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-[#fdc835]/20 rounded-lg">
                  <svg className="w-6 h-6 text-[#fdc835]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">Timeline</span>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-white">{serviceData.duration}</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 py-16"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">What's Included</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceData.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-[#fdc835]/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-[#fdc835]/20 flex items-center justify-center group-hover:bg-[#fdc835]/30 transition-colors">
                      <svg className="w-5 h-5 text-[#fdc835]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-200 text-lg leading-relaxed">{feature}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 py-16"
      >
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#fdc835]/20 via-[#fdc835]/10 to-transparent backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-[#fdc835]/40 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8">
            All services include a complimentary consultation. Contact our team for a personalized quote tailored to your specific business needs.
          </p>
          <button
            onClick={() => setShowContactForm(true)}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#fdc835] to-[#fdb835] text-gray-900 font-bold rounded-xl hover:shadow-lg hover:shadow-[#fdc835]/50 transition-all duration-300 hover:scale-105 active:scale-95 group"
          >
            <span className="text-lg">Contact Us Now</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <ContactForm
          serviceName={decodedServiceName}
          onClose={() => setShowContactForm(false)}
        />
      )}

      <Footer />
    </div>
  );
};

export default ServiceDetails;
