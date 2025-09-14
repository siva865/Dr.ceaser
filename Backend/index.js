// server.js
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

// Allow React frontend to access
app.use(cors());
app.use(express.json()); // parse JSON body

// -------------------- MongoDB Connection --------------------
mongoose
  .connect(
    "mongodb+srv://Ceaser_db:WK1WTN2RKMya1rTz@cluster0.xg46wlb.mongodb.net/appointment?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Schema & Model (bookings collection inside appointment DB)
const appointmentSchema = new mongoose.Schema({
  name: String,
  age: String,
  email: String,
  reason: String,
  createdAt: { type: Date, default: Date.now },
});
const Appointment = mongoose.model("bookings", appointmentSchema);

// -------------------- Google Sheets Contact API --------------------
const GAS_URL =
  "https://script.google.com/macros/s/AKfycbzYNAuxHPk9LivLWm7jvSpYSaPCgBRMuZd97zJ1TJUKDzjz_26tl8ivzIoTVM4794yH/exec";

// API endpoint for frontend → Save contact form to Google Sheets
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: "Missing fields" });
    }

    // Forward data → GAS
    const response = await axios.post(
      GAS_URL,
      { name, email, message },
      { headers: { "Content-Type": "application/json" } }
    );

    // Send GAS response back to frontend
    return res.json(response.data);
  } catch (err) {
    console.error("Proxy Error:", err.response?.data || err.message);
    return res.status(500).json({
      ok: false,
      error: "Proxy failed",
      details: err.response?.data || err.message,
    });
  }
});

// -------------------- Appointment Booking API --------------------
app.post("/api/book-appointment", async (req, res) => {
  try {
    const { name, age, email, reason } = req.body;

    if (!name || !email || !reason) {
      return res.status(400).json({ ok: false, error: "Missing fields" });
    }

    const newBooking = new Appointment({ name, age, email, reason });
    await newBooking.save();

    return res.json({ ok: true, message: "Appointment saved successfully" });
  } catch (err) {
    console.error("Save failed:", err.message);
    return res.status(500).json({ ok: false, error: "Server error" });
  }
});

// -------------------- Start Server --------------------
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
