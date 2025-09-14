import React, { useState } from "react";
import heroImage from "../assets/Images/bg.jpg";
import "../index.css"; 

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden mt-20 font-poppins">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#002248]/40 via-[#D1B48C]/30 to-[#FFFFFF]/30"></div>

      {/* Main text container */}
      <div className="relative z-10 p-6 md:p-12 rounded-3xl shadow-2xl max-w-3xl bg-white/90 animate-fadeInUp">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#002248] leading-snug">
          Manage Diabetes Effectively & Live Healthy
        </h1>
        <p className="mt-4 md:mt-6 text-base md:text-xl text-[#002248] animate-fadeInUp delay-200">
          Compassionate treatment and advanced solutions for effective diabetes management
        </p>

        {/* Buttons */}
        <div className="mt-6 md:mt-8 flex flex-col md:flex-row justify-center gap-4 md:gap-6">
          {/* Learn More Button */}
          <button
            onClick={() => setShowPopup(true)}
            className="px-6 md:px-8 py-3 md:py-4 bg-[#D1B48C] text-[#002248] font-semibold rounded-xl shadow-xl hover:scale-105 hover:bg-[#002248] hover:text-[#D1B48C] transition duration-300"
          >
            Learn More
          </button>

          {/* Our Services Button */}
          <a
            href="#services"
            className="px-6 md:px-8 py-3 md:py-4 bg-[#002248] text-white font-semibold rounded-xl shadow-xl hover:scale-105 hover:bg-[#D1B48C] hover:text-[#002248] transition duration-300"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 md:p-10 max-w-lg w-full relative shadow-2xl transform scale-90 animate-scaleUp">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-[#002248] text-2xl font-bold"
              onClick={() => setShowPopup(false)}
            >
              &times;
            </button>

            <h2 className="text-2xl md:text-3xl font-bold text-[#002248] mb-4">
              Best Advice for Diabetes
            </h2>
            <p className="text-[#002248] text-base md:text-lg">
              1. Maintain a balanced diet with low sugar intake. <br />
              2. Exercise regularly to control blood sugar levels. <br />
              3. Stay hydrated and get enough sleep. <br />
              4. Avoid stress and maintain a healthy lifestyle.
            </p>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes scaleUp {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-scaleUp {
          animation: scaleUp 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
