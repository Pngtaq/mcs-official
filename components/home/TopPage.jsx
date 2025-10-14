import { useState } from "react";
import ArrowRight from "../svg/ArrowRight";
import { serviceData } from "../../data/serviceData";
const TopPage = () => {
  const [activeService, setActiveService] = useState("accounting");

  return (
    <div className="flex flex-col justify-between items-center h-full">
      <h1
        className="text-center px-2 md:px-10 sm:px-5 lg:px-15 2xl:px-40 sm:pb-7 pb-10 pt-4 font-bold"
        style={{ fontSize: "clamp(1rem, 5.3vw, 5.3rem)" }}
      >
        {serviceData[activeService].title}
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 pt-5 justify-center place-items-center ">
        <div className="text-xl leading-relaxed self-center ml-0 mb-5 lg:mb-10 sm:ml-10 lg:order-1 order-3 px-2 flex sm:items-start flex-col lg:pt-20 pt-5">
          <h1
            className="text-5xl font-bold"
            style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
          >
            {activeService.charAt(0).toUpperCase() + activeService.slice(1)}
          </h1>
          <p className="mb-6">{serviceData[activeService].description}</p>
          <button className=" border-gray-800 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors bg-[#fdc835] flex items-center justify-center gap-x-2 text-xl tracking-wider">
            About Us <ArrowRight />
          </button>
        </div>

        <div className="flex justify-center relative lg:order-2 order-1 self-end ">
          <img
            src={serviceData[activeService].image}
            alt="accountant"
            className="relative"
          />
          <div
            className="absolute bottom-0 lg:bottom-2 rounded-full p-1 lg:py-3 border bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 border-gray-400 space-x-2
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
        <div className="leading-relaxed lg:order-3 order-2 text-center flex items-center py-10 lg:py-0 px-2 ">
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
