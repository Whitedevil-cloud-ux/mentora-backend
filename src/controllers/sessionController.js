const mongoose = require("mongoose");
const Session = require("../models/Session");
const Lesson = require("../models/Lesson");

exports.createSession = async (req, res) => {

  try {

    const { lessonId, topic, summary } = req.body;

    if(!mongoose.Types.ObjectId.isValid(lessonId)){
        return res.status(400).json({
            message: "Invalid lesson ID"
        });
    }

    const lesson = await Lesson.findById(lessonId);

    if (!lesson) {
      return res.status(404).json({
        message: "Lesson not found"
      });
    }

    const session = await Session.create({
      lessonId,
      topic,
      summary,
      date: new Date() // auto-generate date
    });

    res.status(201).json(session);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: error.message
    });

  }

};

exports.getLessonSessions = async (req, res) => {

  try {

    const lessonId = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(lessonId)){
        return res.status(400).json({
            message: "Invalid lesson ID"
        });
    }

    const sessions = await Session.find({
      lessonId
    }).sort({ date: -1 });

    res.json(sessions);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};