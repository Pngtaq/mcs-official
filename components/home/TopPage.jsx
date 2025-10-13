import React from "react";

const topPage = () => {
  return (
    <div>
      <h1 className="text-8xl text-center mx-auto px-40 pb-18 pt-22">
        Empowering Business Through Financial Excellence
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 pt-10 justify-center">
        <div className="text-xl leading-relaxed max-w-1/2 self-center ml-70 md:order-1 order-3">
          <p className="mb-6">
            With years of experience and a commitment to accuracy, we ensure
            your financial records are precise and compliant. Trust us to handle
            your accounting so you can focus on growing your business.
          </p>
          <button className="border border-gray-800 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
            Get in touch
          </button>
        </div>

        <div className="flex justify-center relative md:order-2 order-1">
          <img src="/image.png" alt="accountant" className="relative" />
          <div
            className="absolute bottom-0 rounded-full p-3 border bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 border-gray-400 ml-12 mb-4 space-x-2
"
          >
            <button className="px-5 py-2  border-gray-800  rounded-full bg-[#fdc835]">
              Accounting
            </button>
            <button className="text-white bottom-0 rounded-full px-5 py-2 border bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 border-gray-400 ">
              Printing
            </button>
          </div>
        </div>
        <div className="leading-relaxed mt-30 mx-auto ml-40 md:order-3 order-3">
          <h3 className=" text-[#fdc835] text-2xl tracking-[5px]">★★★★★</h3>
          <p className="text-4xl tracking-[5px]">10 Years</p>
          <p className="w-1/2 tracking-[3px]">
            Top Performing Accounting Firm in Bulacan
          </p>
        </div>
      </div>
    </div>
  );
};

export default topPage;
