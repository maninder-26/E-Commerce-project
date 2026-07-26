import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-white mt-12 border-t">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col items-center">

        {/* Logo */}
        <h1 className="text-3xl md:text-4xl font-bold">
          <span className="text-red-600 font-serif">Z</span>epto
        </h1>

        {/* Links */}
        <ul className="flex flex-wrap justify-center gap-4 md:gap-10 mt-6 font-semibold text-gray-700 text-sm md:text-base">
          <li className="cursor-pointer hover:text-red-500">About</li>
          <li className="cursor-pointer hover:text-red-500">Contact</li>
          <li className="cursor-pointer hover:text-red-500">Products</li>
          <li className="cursor-pointer hover:text-red-500">Offices</li>
          <li className="cursor-pointer hover:text-red-500">Company</li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-6 mt-8">
          <FaInstagram className="text-3xl cursor-pointer hover:text-pink-600 transition" />
          <FaFacebook className="text-3xl cursor-pointer hover:text-blue-600 transition" />
          <IoLogoWhatsapp className="text-3xl cursor-pointer hover:text-green-600 transition" />
        </div>

        {/* Copyright */}
        <div className="w-full mt-8">
          <hr className="border-gray-300" />
          <p className="text-center mt-5 text-sm md:text-base font-medium text-gray-600">
            © 2026 Zepto. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;