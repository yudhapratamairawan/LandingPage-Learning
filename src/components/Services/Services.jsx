import { motion } from "framer-motion";
import React from "react";
import { BiSupport } from "react-icons/bi";
import { CiMobile3 } from "react-icons/ci";
import { IoMdHappy } from "react-icons/io";
import { IoPulseOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { TbWorldWww } from "react-icons/tb";

const ServicesData = [
  {
    id: 1,
    title: "Web Development",
    link: "#",
    icon: <TbWorldWww />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Mobile Development",
    link: "#",
    icon: <CiMobile3 />,
    delay: 0.2,
  },
  {
    id: 3,
    title: "Software Development",
    link: "#",
    icon: <RiComputerLine />,
    delay: 0.2,
  },
  {
    id: 4,
    title: "Web Development",
    link: "#",
    icon: <IoMdHappy />,
    delay: 0.2,
  },
  {
    id: 5,
    title: "Seo optimization",
    link: "#",
    icon: <IoPulseOutline />,
    delay: 0.2,
  },
  {
    id: 6,
    title: "24/7 Seo",
    link: "#",
    icon: <BiSupport />,
    delay: 0.2,
  },
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Services = () => {
  return (
    <section className="bg-white">
      <div className="container pt-16 pb-14">
        <h1 className="pb-10 text-4xl font-bold text-left">
          Services we provide
        </h1>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
          {ServicesData.map((service) => (
            <motion.div
              key={service.id} // Tambahkan key di sini
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#f4f4f4] rounded-2xl flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
            >
              <div className="mb-4 text-4xl">{service.icon}</div>
              <h1 className="px-3 text-lg font-semibold text-center">
                {service.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
