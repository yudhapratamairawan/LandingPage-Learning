import React from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";

const NavbarMenu = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Services",
    path: "#",
  },
  {
    id: 3,
    name: "About Us",
    path: "#",
  },
  {
    id: 4,
    name: "Our Team",
    path: "#",
  },
  {
    id: 5,
    name: "Contact Us",
    path: "#",
  },
];

const Navbar = () => {
  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 px-20  flex justify-between items-center"
      >
        {/* Logo Section */}
        <div>
          <h1 className="font-bold text-2xl">AirenCode</h1>
        </div>
        {/* Menu Section */}
        <div className="hidden lg:block">
          <ul className="flex gap-3 items-center">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 absolute bg-secondary mr-2 left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden rounded-full"></div>
                  {menu.name}
                </a>
              </li>
            ))}
            <button className="primary-btn">Sign In</button>
          </ul>
        </div>
        {/* Mobile Hamburger Menu Section */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
