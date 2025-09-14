import React from "react";
import { FaInstagram, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#002248] text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left side - Logo or Text */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-[#D1B48C]">
            Dr. Ceaser’s Diabetes Speciality Centre
          </h2>
          <p className="mt-2 text-gray-300">
            Providing care with compassion and expertise.
          </p>
        </div>

        {/* Right side - Social Links */}
        <div className="flex space-x-6 text-2xl">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/csr_79?igsh=bjA3cTZqdzM0Z3Z0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D1B48C] transition duration-300"
          >
            <FaInstagram />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919787537604"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D1B48C] transition duration-300"
          >
            <FaWhatsapp />
          </a>

          {/* Phone Call */}
          <a
            href="tel:04362228422"
            className="hover:text-[#D1B48C] transition duration-300"
          >
            <FaPhoneAlt />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 border-t border-[#D1B48C]/40 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Dr. Ceaser’s Diabetes Speciality Centre. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
