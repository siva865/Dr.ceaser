import React, { useEffect, useRef, useState } from "react";
import {
  FaXRay,
  FaPills,
  FaHeartbeat,
  FaStethoscope,
  FaNotesMedical,
  FaClinicMedical,
} from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import {
  MdScience,
  MdLocalPharmacy,
  MdOutlineMedicalServices,
} from "react-icons/md";

const servicesList = [
  { id: 1, name: "X-Ray", desc: "Digital X-ray services for accurate diagnosis", icon: FaXRay },
  { id: 2, name: "Ultrasound Scan", desc: "High-resolution imaging for better analysis", icon: GiHealthNormal },
  { id: 3, name: "Limb Doppler (Artery / Vein)", desc: "Blood flow assessment with Doppler scan", icon: MdOutlineMedicalServices },
  { id: 4, name: "Stress Scan (Biothesiometry)", desc: "Check nerve health and stress levels", icon: FaHeartbeat },
  { id: 5, name: "ECHO", desc: "Detailed cardiac ultrasound (Echo)", icon: FaStethoscope },
  { id: 6, name: "ECG", desc: "Electrocardiogram for heart rhythm monitoring", icon: FaNotesMedical },
  { id: 7, name: "Pharmacy", desc: "In-house pharmacy with authentic medicines", icon: MdLocalPharmacy },
  { id: 8, name: "Lab (Fully Automated Computerised Lab)", desc: "Comprehensive diagnostic tests", icon: MdScience },
  { id: 9, name: "Podiatrics (Foot Care)", desc: "Specialized care for diabetic foot issues", icon: FaClinicMedical },
  { id: 10, name: "Master Health Checkup", desc: "Full-body checkup packages", icon: FaPills },
  { id: 11, name: "Diet Counseling", desc: "Personalized diet guidance by experts", icon: FaHeartbeat },
];

export default function Service() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen p-6 bg-[#002248] font-poppins"
      id="services"
    >
      {/* Heading */}
      <h1
        className={`text-3xl font-bold mb-10 text-center text-white tracking-wide transition-all duration-[1500ms] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        Our Services
      </h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {servicesList.map((s, index) => {
          const Icon = s.icon;
          return (
            <div
              key={s.id}
              className={`p-6 bg-white rounded-2xl shadow-lg flex flex-col gap-4 items-start 
                         transition-all duration-[1500ms] ease-in-out ${
                           isVisible
                             ? "opacity-100 translate-y-0"
                             : "opacity-0 translate-y-12"
                         }`}
              style={{ transitionDelay: `${index * 150}ms` }} // staggered animation
            >
              <div className="p-4 bg-gradient-to-r from-[#002248] to-[#1a3d66] rounded-full text-white shadow-md">
                <Icon size={32} />
              </div>
              <h2 className="text-lg font-semibold text-[#002248]">{s.name}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}