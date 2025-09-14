import React from "react";
import doctorImage from "../assets/Images/doctor.jpeg"; // Replace with actual photo
import "../index.css"; // Poppins font

const About = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-20 bg-white font-poppins px-4 sm:px-6 md:px-12"
    >
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Doctor Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={doctorImage}
            alt="Dr. B.R. Ceaser"
            className="rounded-3xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md object-cover transform hover:scale-105 transition duration-500"
          />
        </div>

        {/* Doctor Details Paragraph */}
        <div className="w-full md:w-2/3 animate-fadeInRight text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#002248] mb-4">
            Hello, I’m Dr. B.R. Ceaser
          </h2>

          <p className="text-[#002248] text-base sm:text-lg md:text-lg leading-relaxed mb-6">
            I am a Consultant Physician & Diabetologist at Dr. Ceaser's Diabetes Specialty Centre & Yazh CT Scans & Diagnostics in Tanjore. I completed my MBBS from PSG Institute of Medical Sciences and Research, Coimbatore, followed by MD in General Medicine from Stanley Medical College, Chennai, and PG Dip.Diab from Annamalai University, Chidambaram. I have 18 years of experience in diabetes care, including 5 years as an Assistant Professor at Tanjore Medical College. I also serve as Regional Faculty for CCEBDM for PHFI and for the National Diabetes Education Programme, training paramedical personnel in diabetes management. Over the years, I have published articles in various National & International Journals, presented papers at multiple forums, and participated as Principal Investigator in Phase III and IV Clinical Trials. My approach focuses on compassionate treatment and advanced solutions to help my patients manage diabetes effectively and live healthier lives.
          </p>

          {/* Experience Highlight */}
          <div className="bg-[#8F501B] text-white font-extrabold text-lg sm:text-xl md:text-2xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-3xl shadow-2xl text-center inline-block transform hover:scale-105 transition duration-300">
            18 Years Experience
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInRight {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInRight {
          animation: fadeInRight 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default About;
