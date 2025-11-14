/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-[#191D26] text-gray-300 py-10 mt-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo / Brand */}
          <h2 className="text-2xl font-bold text-white tracking-wide">
            ManageMate
          </h2>

          {/* Footer Links */}
          <ul className="flex gap-6">
            {["Home", "Tasks", "About", "Contact"].map((item, idx) => (
              <motion.li
                key={idx}
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer hover:text-white transition"
              >
                {item}
              </motion.li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex gap-5 text-gray-300">
            {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.2 }}
                className="cursor-pointer hover:text-white transition"
              >
                <Icon size={22} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-8 text-sm text-gray-400 border-t border-gray-700 pt-5">
          © {new Date().getFullYear()} ManageMate — All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
