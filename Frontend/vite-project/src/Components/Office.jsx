import React, { useState, useEffect } from "react";

// Local photos import pannunga
import office1 from "../assets/Images/office5.jpeg";
import office2 from "../assets/Images/office2.jpeg";
import office3 from "../assets/Images/office3.jpeg";
import office4 from "../assets/Images/office4.jpeg";
import office5 from "../assets/Images/office5.jpeg";

function OurOffice() {
  const photos = [office5, office2, office3, office4, office5];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <section className="w-full py-12 bg-gradient-to-r from-[#002248] via-[#D1B48C] to-white text-center">
      <h2 className="text-3xl font-bold mb-6 text-[#002248] drop-shadow-md">
        Our Office
      </h2>

      <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl border-4 border-[#D1B48C]">
        {/* Carousel container */}
        <div
          className="flex transition-transform duration-[2000ms] ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {photos.map((photo, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] bg-white"
            >
              <img
                src={photo}
                alt={`Office ${index + 1}`}
                className="w-full h-full object-contain object-center transition-opacity duration-1000"
              />
            </div>
          ))}
        </div>

        {/* Dots navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {photos.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full cursor-pointer transition-all ${
                index === currentIndex
                  ? "bg-[#002248] scale-125"
                  : "bg-[#D1B48C]"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurOffice;
