const Lesson = require("../models/Lesson");

exports.createLesson = async (req, res) => {

  try {

    const { title, description } = req.body;

    const lesson = await Lesson.create({
      title,
      description,
      mentorId: req.user.id
    });

    res.status(201).json(lesson);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};