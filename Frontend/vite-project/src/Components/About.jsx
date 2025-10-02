import React, { useEffect, useRef, useState } from "react";
import doctorImage from "../assets/Images/doctor.jpeg";
import "../index.css"; // Poppins font

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 md:py-20 bg-white font-poppins px-4 sm:px-6 md:px-12 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Doctor Image */}
        <div
          className={`w-full md:w-1/3 flex justify-center transition-all duration-[1500ms] ease-in-out ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-16"
          }`}
        >
          <img
            src={doctorImage}
            alt="Dr. B.R. Ceaser"
            className="rounded-3xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md object-cover transform hover:scale-110 hover:shadow-[#8F501B]/50 transition duration-700"
          />
        </div>

        {/* Doctor Details Paragraph */}
        <div
          className={`w-full md:w-2/3 text-center md:text-left transition-all duration-[1500ms] ease-in-out delay-300 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-16"
          }`}
        >
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#002248] mb-4 relative inline-block leading-snug">
            {/* Mobile → 2 lines */}
            <span className="block sm:hidden">Hello,</span>
            <span className="block sm:hidden">I’m Dr.R. Ceaser</span>

            {/* Tablet & Desktop → Single line */}
            <span className="hidden sm:inline">Hello, I’m Dr.R. Ceaser</span>

            <span className="absolute bottom-[-6px] left-0 w-2/3 h-[3px] bg-[#D1B48C] rounded-full"></span>
          </h2>

          <p className="text-[#002248] text-base sm:text-lg md:text-lg leading-relaxed mb-6">
            I am a Consultant Physician & Diabetologist at Dr. Ceaser's Diabetes
            Specialty Centre  in Tanjore. I
            completed my MBBS from PSG Institute of Medical Sciences and
            Research, Coimbatore, followed by MD in General Medicine from
            Stanley Medical College, Chennai, and PG Dip.Diab from Annamalai
            University, Chidambaram. I have 18 years of experience in diabetes
            care, including 5 years as an Assistant Professor at Tanjore Medical
            College. I also serve as Regional Faculty for CCEBDM for PHFI and
            for the National Diabetes Education Programme, training paramedical
            personnel in diabetes management. Over the years, I have published
            articles in various National & International Journals, presented
            papers at multiple forums, and participated as Principal
            Investigator in Phase III and IV Clinical Trials. My approach
            focuses on compassionate treatment and advanced solutions to help my
            patients manage diabetes effectively and live healthier lives.
          </p>

          {/* Experience Highlight */}
          <div className="bg-[#8F501B] text-white font-extrabold text-lg sm:text-xl md:text-2xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-3xl shadow-2xl text-center inline-block transform hover:scale-110 hover:shadow-lg hover:shadow-[#D1B48C]/50 transition duration-500">
            18 Years Experience
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
