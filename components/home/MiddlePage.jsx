import React from "react";

const MiddlePage = () => {
  return (
    <div className="text-white grid grid-cols-1 md:grid-cols-2 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 gap-6 md:gap-8 lg:gap-12 py-12 sm:py-16 md:py-20 lg:py-12">
      {/* Left Column */}
      <div className="flex flex-col space-y-6 md:space-y-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
          Turning Ideas Into Masterpieces
        </h1>
        <img
          src="/team.jpg"
          alt="team image"
          className="grayscale hover:grayscale-0 transition-all duration-300 rounded-xl object-cover w-full h-auto aspect-video shadow-lg"
        />
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight pt-2 md:pt-4">
          Turn Your Dream Into Big And Reality
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-300">
          With our comprehensive accounting services, we help businesses of all
          sizes maintain financial clarity and compliance. Our expert team
          provides meticulous bookkeeping, tax preparation, and financial
          consulting to ensure your business stays on track and maximizes
          profitability. Trust us to handle your numbers while you focus on
          growing your business.
        </p>
      </div>

      {/* Right Column */}
      <div className="flex flex-col justify-center">
        <img
          src="/solo.jpg"
          alt="team image"
          className="grayscale hover:grayscale-0 transition-all duration-300 rounded-2xl w-full h-auto object-cover aspect-square md:aspect-auto shadow-lg"
        />
        <div className="pt-6 md:pt-8 lg:pt-10">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-center md:text-left mb-4 md:mb-6">
            Handle Your Accounting Efficiently
          </h3>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 text-center md:text-left">
            Streamline your financial operations with our expert accounting
            solutions. From real-time reporting to strategic tax planning, we
            deliver precision and insights that drive informed business
            decisions and sustainable growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiddlePage;
