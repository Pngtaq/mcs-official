import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import ArrowRight from "../svg/ArrowRight";
import { serviceData } from "../../data/serviceData";
const TopPage = () => {
  const [activeService, setActiveService] = useState("accounting");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div
      ref={ref}
      className="flex flex-col justify-between items-center h-full"
    >
      <div className="text-center px-2 md:px-10 sm:px-5 lg:px-15 2xl:px-40 sm:pb-7 pb-10 pt-4">
        <AnimatePresence mode="wait">
          <motion.h1
            key={activeService}
            className="font-bold"
            style={{ fontSize: "clamp(1rem, 5.3vw, 5.3rem)" }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {serviceData[activeService].title}
          </motion.h1>
        </AnimatePresence>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 pt-5 justify-center place-items-center ">
        <motion.div
          className="text-xl leading-relaxed self-center ml-0 mb-5 lg:mb-10 sm:ml-10 lg:order-1 order-3 px-2 flex sm:items-start flex-col lg:pt-20 pt-5"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h1
                className="text-5xl font-bold"
                style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
              >
                {activeService.charAt(0).toUpperCase() + activeService.slice(1)}
              </h1>
              <p className="mb-6">{serviceData[activeService].description}</p>
            </motion.div>
          </AnimatePresence>
          <motion.button
            className=" border-gray-800 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors bg-[#fdc835] flex items-center justify-center gap-x-2 text-xl tracking-wider"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About Us <ArrowRight />
          </motion.button>
        </motion.div>

        <motion.div
          className="flex justify-center relative lg:order-2 order-1 self-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={activeService}
              src={serviceData[activeService].image}
              alt="accountant"
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </AnimatePresence>
          <div
            className="absolute bottom-0 lg:bottom-2 rounded-full p-1 lg:py-3 border bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 border-gray-400 space-x-2
"
          >
            <motion.button
              className={`px-5 py-2 border-gray-800 rounded-full transition-colors duration-300 ${
                activeService === "accounting"
                  ? "bg-[#fdc835]"
                  : "text-white  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 "
              }`}
              onClick={() => setActiveService("accounting")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={
                activeService === "accounting" ? { scale: [1, 1.1, 1] } : {}
              }
              transition={{ duration: 0.3 }}
            >
              Accounting
            </motion.button>
            <motion.button
              className={`bottom-0 rounded-full px-5 py-2 transition-colors duration-300 ${
                activeService === "printing"
                  ? "bg-[#fdc835] text-black"
                  : "text-white  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 "
              }`}
              onClick={() => setActiveService("printing")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={
                activeService === "printing" ? { scale: [1, 1.1, 1] } : {}
              }
              transition={{ duration: 0.3 }}
            >
              Printing
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          className="leading-relaxed lg:order-3 order-2 text-center flex items-center py-10 lg:py-0 px-2"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <img src="/award.png" className="w-15" loading="lazy" />
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h3 className=" text-[#fdc835] text-2xl tracking-[5px]">★★★★★</h3>
              <p className="text-4xl tracking-[3px] font-bold">
                {serviceData[activeService].years}
              </p>
              <p className="">{serviceData[activeService].achievement}</p>
            </motion.div>
          </AnimatePresence>
          <img src="/award.png" className="w-15 scale-x-[-1]" loading="lazy" />
        </motion.div>
      </div>
    </div>
  );
};

export default TopPage;
