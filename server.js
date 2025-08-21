import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
const PORT = 5000;

// ✅ Middleware
app.use(cors());
app.use(express.json()); // important! parses JSON body

// ✅ Contact route
app.post("/api/contact", async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // send email here

    res.json({ message: "Message sent successfully" });
  } catch (err) {
    console.error("Error in /api/contact:", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
