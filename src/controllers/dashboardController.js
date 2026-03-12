const Student = require("../models/Student");
const Lesson = require("../models/Lesson");
const Session = require("../models/Session");

exports.getDashboardStats = async (req, res) => {
  try {
    const students = await Student.countDocuments();
    const lessons = await Lesson.countDocuments();
    const sessions = await Session.countDocuments();

    res.json({
      students,
      lessons,
      sessions
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};