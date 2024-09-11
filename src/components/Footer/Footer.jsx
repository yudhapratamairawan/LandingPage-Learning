import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-28 bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* First Section */}
          <div className="spacy-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">AirenCode</h1>
            <p className="text-dark2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              praesentium nostrum architecto nam eos, totam similique? Ex
              similique aspernatur dolor?
            </p>
          </div>
          {/* Second Section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="spacey-y-4">
              <h1 className="text-2xl font-bold">Courses</h1>
              <div className="text-dark2">
                <ul className="text-lg spacey-y-2">
                  <li className="duration-200 cursor-pointer hover:text-secondary">
                    Web Development
                  </li>
                  <li className="duration-200 cursor-pointer hover:text-secondary">
                    Software Development
                  </li>
                  <li className="duration-200 cursor-pointer hover:text-secondary">
                    Apps Development
                  </li>
                  <li className="duration-200 cursor-pointer hover:text-secondary">
                    E-Learning
                  </li>
                </ul>
              </div>
            </div>
            <div className="spacey-y-4">
              <h1 className="text-2xl font-bold">Link</h1>
              <div className="text-dark2">
                <ul className="text-lg spacey-y-2">
                  <li className="duration-200 cursor-pointer hover:text-secondary">
                    Home
                  </li>
                  <li className="duration-200 cursor-pointer hover:text-secondary">
                    Services
                  </li>
                  <li className="duration-200 cursor-pointer hover:text-secondary">
                    About
                  </li>
                  <li className="duration-200 cursor-pointer hover:text-secondary">
                    Contact
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Third Section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="w-full p-3 py-4 bg-white rounded-s-xl focus:ring-0 focus:outline-none placeholder:text-dark2"
              />
              <button className="px-6 py-4 font-semibold text-white bg-primary rounded-e-xl">
                Go
              </button>
            </div>
            {/* Sosial Icons */}
            <div className="flex py-3 space-x-6">
              <a href="#">
                <FaWhatsapp className="duration-200 cursor-pointer hover:text-primary hover:scale-125 duration-105" />
              </a>
              <a href="#">
                <FaInstagram className="duration-200 cursor-pointer hover:text-primary hover:scale-125 duration-105" />
              </a>
              <a href="#">
                <FaYoutube className="duration-200 cursor-pointer hover:text-primary hover:scale-125 duration-105" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
