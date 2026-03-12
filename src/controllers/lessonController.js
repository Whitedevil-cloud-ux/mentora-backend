const Lesson = require("../models/Lesson");

exports.createLesson = async (req, res) => {
  try {
    const { title } = req.body;
    const lesson = await Lesson.create({
      title,
      mentorId: req.user.id
    });
    res.status(201).json(lesson);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};