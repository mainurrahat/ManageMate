/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // icons
import LwsLogo from "../assets/logo.png"; // logo

const Navber = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-[#191D26] text-white shadow-md fixed w-full top-0 left-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-5">
          <img
            src={LwsLogo}
            alt="ManageMate Logo"
            className="w-12 rounded-3xl "
          />

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold text-white"
          >
            ManageMate
          </motion.h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          {["Home", "Tasks", "About"].map((link, i) => (
            <motion.li
              key={link}
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer text-gray-300 hover:text-white transition"
            >
              {link}
            </motion.li>
          ))}
        </ul>

        {/* Login Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="hidden md:block bg-white text-[#191D26] font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition"
        >
          Login
        </motion.button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        className="md:hidden bg-[#191D26] overflow-hidden"
      >
        <ul className="flex flex-col items-center gap-4 py-4">
          {["Home", "Tasks", "About"].map((link) => (
            <li
              key={link}
              onClick={() => setOpen(false)}
              className="cursor-pointer text-gray-300 hover:text-white transition"
            >
              {link}
            </li>
          ))}
          <button className="bg-white text-[#191D26] font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition">
            Login
          </button>
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navber;
