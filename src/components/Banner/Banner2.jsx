import React from "react";
import BannerPng from "../../assets/banner.png";
import { motion } from "framer-motion";

const Banner2 = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 gap-8 space-y-6 py-14 md:py-24 md:grid-cols-2 md:space-y-0">
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <h1 className="text-4xl font-bold !leading-snug">
              Join Our Community to start your Journey
            </h1>
            <p className="text-dark2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              mollitia doloribus!
            </p>
            <a href="https://wa.link/l8qjq0" className="primary-btn !mt-8">
              Join Now
            </a>
          </div>
        </motion.div>

        {/* Banner Image */}
        <div className="flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={BannerPng}
            alt=""
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
