import React, { useRef } from "react";
import { delay, motion, useInView } from "framer-motion";
import image7 from "../assets/images/comm.jpeg";
import image8 from "../assets/images/DRAWING-ROOM-10.jpg";

const slideLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 0.7 } },
};

const slideRight = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 0.7 } },
};

const MissionVission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref}>
      {/* Mission Section */}
      <div className="px-10 py-8 lg:px-32 lg:py-16 flex flex-col lg:flex-row gap-10  items-center justify-center">
        <motion.div
          className="w-full lg:w-3/4 flex justify-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={slideLeft}
        >
          <img
            src={image7}
            alt="Interior design 1"
            className="transform transition-all duration-500 ease-in-out hover:scale-110 border-8 border-amber-50 w-full lg:w-[85%] xl:w-[75%] h-auto max-h-[480px] rounded-lg shadow-lg object-cover"
          />
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 flex flex-col gap-4 items-start "
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={slideLeft}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Mission
          </h1>
          <p className="text-base md:text-lg text-gray-700 min-h-[200px] sm:min-h-[250px] md:min-h-[300px]">
            At Vakshana Interior Pvt. Ltd., our vision is to become the foremost
            innovators in interior design, setting new standards of excellence
            in creativity, functionality, and sustainability. We aspire to
            transform spaces into inspiring environments that enhance the lives
            of our clients and leave a lasting impact on the communities we
            serve.
          </p>
        </motion.div>
      </div>

      {/* Vision Section */}
      <div className="px-10 py-8 lg:px-32 lg:py-16flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 items-center justify-center">
        <motion.div
          className="w-full lg:w-1/2 flex flex-col gap-4 items-start"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={slideRight}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Vision
          </h1>
          <p className="text-base md:text-lg text-gray-700 min-h-[200px] sm:min-h-[250px] md:min-h-[300px]">
            Our mission at Vakshana Interior Pvt. Ltd. is to deliver exceptional
            interior design solutions tailored to meet the unique needs and
            preferences of each client. By leveraging our expertise, creativity,
            and attention to detail, we aim to exceed expectations in every
            project we undertake. We are committed to fostering long-term
            relationships with our clients, suppliers, and partners built on
            trust, integrity, and mutual respect. Through continuous innovation,
            craftsmanship, and sustainable practices, we strive to enhance the
            beauty, functionality, and value of every space we touch.
          </p>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={slideRight}
        >
          <img
            src={image8}
            alt="Interior design 2"
            className="transform transition-all duration-500 ease-in-out hover:scale-110 border-8 border-amber-50 w-full lg:w-[85%] xl:w-[75%] h-auto max-h-[480px] rounded-lg shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default MissionVission;
