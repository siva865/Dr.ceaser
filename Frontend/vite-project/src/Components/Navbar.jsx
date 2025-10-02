import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import logo from "../assets/Images/Logo.jpeg";
import axios from "axios";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    reason: "",
  });

  const whatsappNumber = "919787537604"; // your WhatsApp number

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const submitBooking = async () => {
    if (!form.name || !form.email || !form.reason) {
      alert("Please fill name, email and reason");
      return;
    }

    const message = `📅 *Appointment Request*\n\n👤 Name: ${form.name}\n🎂 Age: ${form.age}\n📧 Email: ${form.email}\n💬 Reason: ${form.reason}`;

    try {
      setSaving(true);
      const res = await axios.post(
        "https://dr-ceaser.onrender.com/api/book-appointment",
        form
      );

      // ✅ Only if backend confirms success
      if (res.data?.ok || res.status === 200) {
        const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          message
        )}`;
        window.open(waUrl, "_blank");

        setShowForm(false);
        setForm({ name: "", age: "", email: "", reason: "" });
      } else {
        alert("Booking failed. Please try again.");
      }
    } catch (err) {
      console.error("Save failed:", err?.response || err.message || err);
      alert("Something went wrong. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      {/* 🔔 Pre-Booking Notice Bar */}
      <div className="fixed top-0 left-0 w-full bg-[#002248] text-white text-lg py-3 overflow-hidden z-[60]">
        <div className="whitespace-nowrap animate-marquee px-6">
          🔔 Pre-booking for consultations is <b>OPEN DAILY</b> from{" "}
          <b>4:00 PM to 6:00 PM</b> — Available via <b>Online</b> &{" "}
          <b>Telephone</b>. Kindly reserve your slot in advance. 🙏
        </div>
      </div>

      <nav
        className={`fixed top-[48px] left-0 w-full z-50 transition-all duration-300 ${
          scrollY > 20 ? "bg-white shadow-xl py-2" : "bg-white/90 shadow-md py-3"
        } font-poppins`}
      >
        <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Clinic Logo"
              className="h-14 w-auto transition-transform duration-300 transform hover:scale-110"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10 font-medium items-center">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li key={item} className="relative group">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-[#002248] hover:text-[#D1B48C] transition-colors duration-300"
                >
                  {item}
                </a>
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#D1B48C] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
            {/* Book Appointment Button */}
            <li>
              <button
                onClick={() => setShowForm(true)}
                className="ml-4 px-4 py-2 rounded-lg bg-[#002248] text-white hover:bg-[#D1B48C] hover:text-[#002248] transition"
              >
                Book Appointment
              </button>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-[#002248] focus:outline-none"
            >
              {open ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white shadow-lg rounded-b-xl overflow-hidden transition-all duration-500 ease-in-out transform origin-top ${
            open ? "max-h-96 py-4" : "max-h-0 py-0"
          }`}
        >
          <ul className="flex flex-col space-y-4 px-6 font-medium">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li key={item} className="relative group">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block text-[#002248] hover:text-[#D1B48C] transition-colors duration-300 py-2"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
                <span className="absolute left-0 bottom-1 w-0 h-[2px] bg-[#D1B48C] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  setShowForm(true);
                  setOpen(false);
                }}
                className="w-full px-4 py-2 rounded-lg bg-[#002248] text-white hover:bg-[#D1B48C] hover:text-[#002248] transition"
              >
                Book Appointment
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Appointment Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowForm(false)}
          />
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative z-10">
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-black hover:opacity-70 transition"
            >
              <MdClose size={24} />
            </button>

            <h2 className="text-xl font-semibold mb-4 text-black">
              Book Appointment
            </h2>

            <div className="flex flex-col gap-3">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="p-2 border-b-2 border-black bg-white focus:outline-none"
              />
              <input
                name="age"
                value={form.age}
                onChange={handleChange}
                placeholder="Age"
                className="p-2 border-b-2 border-black bg-white focus:outline-none"
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="p-2 border-b-2 border-black bg-white focus:outline-none"
              />
              <textarea
                name="reason"
                value={form.reason}
                onChange={handleChange}
                placeholder="Reason for booking (in your own words)"
                className="p-2 border-b-2 border-black bg-white focus:outline-none"
              />

              <button
                onClick={submitBooking}
                disabled={saving}
                className="py-2 rounded-lg bg-[#002248] text-white font-medium hover:bg-white hover:text-[#002248] border-2 border-[#002248] transition"
              >
                {saving ? "Saving..." : "Confirm Booking"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
