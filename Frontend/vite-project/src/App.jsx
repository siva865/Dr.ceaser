import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Service from "./Components/Service";
import OurOffice from "./Components/Office";
import Footer from "./Components/Footer";
import ContactForm from "./Components/Contact";



function App() {
  return (
    <div className="font-sans bg-[#F3F4F6] text-[#1D2846]">
      <Navbar />
      <Hero/>
      <About/>
      <Service/>
      <OurOffice/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
