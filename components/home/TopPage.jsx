import React, { useState } from "react";

const TopPage = () => {
  const [activeService, setActiveService] = useState("accounting");

  const serviceData = {
    accounting: {
      image: "/accounting.png",
      description:
        "With years of experience and a commitment to accuracy, we ensure your financial records are precise and compliant. Trust us to handle your accounting so you can focus on growing your business.",
      title: "Empowering Business Through Financial Excellence",
      years: "10 Years",
      achievement: "Top Performing Accounting Firm in Bulacan",
    },
    printing: {
      image: "/printing.png",
      description:
        "Professional printing services for all your business needs. From business cards to large format prints, we deliver high-quality results with fast turnaround times to support your marketing and operational requirements.",
      title: "Empowering Brands Through Printing Excellence",
      years: "3 Years",
      achievement: "In Printing Industry",
    },
  };

  return (
    <div>
      <h1
        className="text-center px-0 sm:px-40 pb-18 pt-4"
        style={{ fontSize: "clamp(2rem, 6vw, 6rem)" }}
      >
        {serviceData[activeService].title}
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 pt-3 justify-center place-items-center">
        <div className="text-xl leading-relaxed self-center ml-0 sm:ml-20 lg:order-1 order-3 px-2 flex sm:items-start flex-col">
          <h1 className="text-5xl font-bold">
            {activeService.charAt(0).toUpperCase() + activeService.slice(1)}
          </h1>
          <p className="mb-6">{serviceData[activeService].description}</p>
          <button className=" border-gray-800 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors bg-[#fdc835]">
            Get in touch
          </button>
        </div>

        <div className="flex justify-center relative lg:order-2 order-1">
          <img
            src={serviceData[activeService].image}
            alt="accountant"
            className="relative"
          />
          <div
            className="absolute bottom-0 rounded-full p-1 lg:py-3 border bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 border-gray-400 mb-0 md:mb-4 space-x-2
"
          >
            <button
              className={`px-5 py-2 border-gray-800 rounded-full ${
                activeService === "accounting"
                  ? "bg-[#fdc835]"
                  : "text-white  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 "
              }`}
              onClick={() => setActiveService("accounting")}
            >
              Accounting
            </button>
            <button
              className={`bottom-0 rounded-full px-5 py-2 ${
                activeService === "printing"
                  ? "bg-[#fdc835] text-black"
                  : "text-white  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 "
              }`}
              onClick={() => setActiveService("printing")}
            >
              Printing
            </button>
          </div>
        </div>
        <div className="leading-relaxed lg:order-3 order-2 text-center flex items-center py-10 lg:py-0">
          <img src="/award.png" className="w-15" />
          <div>
            <h3 className=" text-[#fdc835] text-2xl tracking-[5px]">★★★★★</h3>
            <p className="text-4xl tracking-[3px] font-bold">
              {serviceData[activeService].years}
            </p>
            <p className="">{serviceData[activeService].achievement}</p>
          </div>
          <img src="/award.png" className="w-15 scale-x-[-1]" />
        </div>
      </div>
    </div>
  );
};

export default TopPage;
