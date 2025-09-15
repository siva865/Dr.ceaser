import React, { useState, useEffect, useRef } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Make sure this matches your backend route
  const BACKEND_URL = "https://dr-ceaser.onrender.com/contact";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const json = await res.json();
      if (json.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setSuccess(false);
      }
    } catch (err) {
      console.error("Frontend Error:", err);
      setSuccess(false);
    }
    setLoading(false);
  };

  // Scroll visibility observer
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
    <section
      ref={sectionRef}
      id="contact"
      className={`min-h-screen flex items-center justify-center bg-gradient-to-r from-[#D3C6B6] via-[#8F501B] to-[#C4A380] p-6 
      transition-opacity duration-[2000ms] ease-in-out
      ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-[#8F501B] mb-6">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C4A380] outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C4A380] outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C4A380] outline-none"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#8F501B] hover:bg-[#C4A380] text-white font-semibold py-3 rounded-lg transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        {success === true && (
          <p className="mt-4 text-green-600 text-center">
            ✅ Message sent successfully!
          </p>
        )}
        {success === false && (
          <p className="mt-4 text-red-600 text-center">
            ❌ Something went wrong. Try again.
          </p>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
