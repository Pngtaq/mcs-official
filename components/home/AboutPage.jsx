import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const stats = [
    { number: "10+", label: "Years of Excellence" },
    { number: "500+", label: "Clients Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ];

  const values = [
    {
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      title: "Integrity",
      description:
        "We maintain the highest standards of ethics and transparency in all our financial services.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Excellence",
      description:
        "Delivering superior accounting and printing services with precision and attention to detail.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "Client-Focused",
      description:
        "Your success is our priority. We tailor our services to meet your unique business needs.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "Innovation",
      description:
        "Leveraging modern solutions and technology to streamline your financial processes.",
    },
  ];

  return (
    <div
      ref={ref}
      className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40"
    >
      <div className="relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-3 sm:mb-4"
          ></motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            Your Trusted Financial Partner
          </motion.h1>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 text-center hover:border-[#fdc835]/50 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fdc835] mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
            className="space-y-4 sm:space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Our Story
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              <p>
                Founded with a vision to simplify financial management for
                businesses, we've grown from a small practice to a trusted name
                in accounting and printing services throughout Bulacan.
              </p>
              <p>
                Our journey began with a commitment to excellence and a passion
                for helping businesses succeed. Today, we serve hundreds of
                clients, from sole proprietors to established corporations,
                providing comprehensive solutions tailored to their unique
                needs.
              </p>
              <p>
                Led by Ma. Cristina De Jesus-Salvador, CPA, our team brings
                together decades of combined experience in accounting, tax
                compliance, and business consultation. We stay current with
                regulatory changes and industry best practices to ensure our
                clients always receive the most accurate and beneficial
                guidance.
              </p>
            </div>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-[#fdc835]/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#fdc835]/20 rounded-lg">
                  <svg
                    className="w-6 h-6 text-[#fdc835]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Our Vision
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                To be the leading accounting and business solutions provider in
                the region, recognized for our integrity, expertise, and
                commitment to client success.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-[#fdc835]/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#fdc835]/20 rounded-lg">
                  <svg
                    className="w-6 h-6 text-[#fdc835]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Our Mission
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                To empower businesses with accurate financial information,
                strategic guidance, and professional services that enable
                growth, compliance, and long-term success.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 sm:mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{
                  duration: 0.5,
                  delay: 1.0 + index * 0.1,
                  ease: "easeOut",
                }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-[#fdc835]/50 transition-all duration-300 group"
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="text-[#fdc835] mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
      </div>
    </div>
  );
};

export default AboutPage;
