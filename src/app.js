require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const { connectDB } = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");
const lessonRoutes = require("./routes/lessonRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const sessionRoutes = require("./routes/sessionRoutes");
const llmRoutes = require("./routes/llmRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

connectDB();

app.get("/", (req, res) => {
  res.send("Mentora Backend Running");
});

app.use("/auth", authRoutes);
app.use("/students/", studentRoutes);
app.use("/lessons", lessonRoutes);
app.use("/bookings", bookingRoutes);
app.use("/sessions", sessionRoutes);
app.use("/llm", llmRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});