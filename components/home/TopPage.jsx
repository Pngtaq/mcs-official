import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ArrowRight from "../svg/ArrowRight";
import { serviceData } from "../../data/serviceData";

const TopPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleAboutUsClick = () => {
    const aboutSection = document.getElementById('about-us');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      ref={ref}
      className="flex flex-col justify-between items-center h-full"
    >
      <div className="text-center px-2 md:px-10 sm:px-5 lg:px-15 2xl:px-40 sm:pb-7 pb-10 pt-4">
        <motion.h1
          className="font-bold"
          style={{ fontSize: "clamp(1rem, 5.3vw, 5.3rem)" }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {serviceData.accounting.title}
        </motion.h1>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 pt-5 justify-center place-items-center ">
        <motion.div
          className="text-xl leading-relaxed self-center ml-0 mb-5 lg:mb-10 sm:ml-10 lg:order-1 order-3 px-2 flex sm:items-start flex-col lg:pt-20 pt-5"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <div>
            <h1
              className="text-5xl font-bold"
              style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
            >
              Accounting
            </h1>
            <p className="mb-6">{serviceData.accounting.description}</p>
          </div>
          <motion.button
            onClick={handleAboutUsClick}
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
          <motion.img
            src={serviceData.accounting.image}
            alt="accountant"
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </motion.div>
        <motion.div
          className="leading-relaxed lg:order-3 order-2 text-center flex items-center py-10 lg:py-0 px-2"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <img src="/award.png" className="w-15" loading="lazy" style={{ contentVisibility: 'auto' }} />
          <div>
            <h3 className=" text-[#fdc835] text-2xl tracking-[5px]">★★★★★</h3>
            <p className="text-4xl tracking-[3px] font-bold">
              {serviceData.accounting.years}
            </p>
            <p className="">{serviceData.accounting.achievement}</p>
          </div>
          <img src="/award.png" className="w-15 scale-x-[-1]" loading="lazy" style={{ contentVisibility: 'auto' }} />
        </motion.div>
      </div>
    </div>
  );
};

export default TopPage;
