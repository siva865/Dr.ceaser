import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import office1 from "../assets/Images/six.jpeg";
import office2 from "../assets/Images/seven.jpeg";
import office3 from "../assets/Images/twentyone.jpeg";
import office4 from "../assets/Images/twohundred.jpeg";
import office5 from "../assets/Images/one.jpeg";
import office6 from "../assets/Images/two.jpeg";
import office7 from "../assets/Images/five.jpeg";
import office8 from "../assets/Images/three.jpeg";
import office9 from "../assets/Images/thousand.jpeg";
import office10 from "../assets/Images/twenty.jpeg";
import office11 from "../assets/Images/fifty.jpeg";
import office12 from "../assets/Images/eighteen.jpeg";
import office13 from "../assets/Images/seventeen.jpeg";
import office14 from "../assets/Images/sixteen.jpeg";
import office15 from "../assets/Images/fourteen.jpeg";
import office16 from "../assets/Images/ninety.jpeg";
import office17 from "../assets/Images/thirteen.jpeg";
import office18 from "../assets/Images/ten.jpeg";
import office19 from "../assets/Images/leven.jpeg";
import office20 from "../assets/Images/twel.jpeg";
import office21 from "../assets/Images/nine.jpeg";
import office22 from "../assets/Images/eight.jpeg";

function OurOffice() {
  const sections = [
    { title: "Consultation Room", images: [office1, office2, office7] },
    { title: "Dressing Room", images: [office21, office22] },
    { title: "ECG / Foot Scan", images: [office17, office18, office19, office20] },
    { title: " Reception", images: [office5, office6] },
    { title: "Lab", images: [office10, office11, office12, office13, office14, office15, office16] },
    { title: "Observation Room", images: [office3, office4] },
    { title: "Waiting Hall", images: [office8, office9] },
  ];

  const [currentSection, setCurrentSection] = useState(0);

  return (
    <section className="w-full py-12 bg-gradient-to-r from-[#002248] via-[#D1B48C] to-white">
      {/* Headline */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-6 text-white drop-shadow-lg">
        Gallery
      </h2>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6 px-4">
        {sections.map((section, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSection(idx)}
            className={`px-4 py-2 rounded-full font-semibold shadow-md transition ${
              idx === currentSection
                ? "bg-[#002248] text-white"
                : "bg-white text-[#002248] hover:bg-[#d1b48c] hover:text-black"
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Image Display */}
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-2xl p-4 bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex flex-col"
          >
            {/* Section Title */}
            <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#002248] text-center mb-6">
              {sections[currentSection].title}
            </h3>

            {/* Images Container */}
            <div className="w-full">
              <div
                className={`grid gap-6 w-full ${
                  sections[currentSection].images.length === 1
                    ? "grid-cols-1 max-w-2xl mx-auto"
                    : sections[currentSection].images.length === 2
                    ? "grid-cols-1 sm:grid-cols-2"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {sections[currentSection].images.map((img, i) => (
                  <motion.div
                    key={i}
                    className="relative w-full overflow-hidden rounded-xl shadow-lg bg-gray-100"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    style={{ 
                      aspectRatio: '4/3',
                      minHeight: '250px'
                    }}
                  >
                    <img
                      src={img}
                      alt={`${sections[currentSection].title} ${i + 1}`}
                      className="w-full h-full object-contain p-2"
                      style={{ 
                        width: '100%', 
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default OurOffice;