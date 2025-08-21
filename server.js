import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // ✅ Load .env file

const app = express();
const PORT = process.env.PORT || 5000; // ✅ fallback to 5000 if not set

// ✅ Middleware
app.use(cors());
app.use(express.json()); // parses JSON body

// ✅ Contact route
app.post("/api/contact", async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // send email here (use nodemailer)

    res.json({ message: "Message sent successfully" });
  } catch (err) {
    console.error("Error in /api/contact:", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
