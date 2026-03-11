const Booking = require("../models/Booking");
const Student = require("../models/Student");
const Lesson = require("../models/Lesson");

exports.createBooking = async (req, res) => {

  try {

    const { studentId, lessonId } = req.body;

    const student = await Student.findById(studentId);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    if (student.parentId.toString() !== req.user.id) {
      return res.status(403).json({
        message: "You can only book lessons for your own students"
      });
    }

    const lesson = await Lesson.findById(lessonId);

    if (!lesson) {
      return res.status(404).json({
        message: "Lesson not found"
      });
    }

    const booking = await Booking.create({
      studentId,
      lessonId
    });

    res.status(201).json(booking);

  } catch (error) {

    if (error.code === 11000) {
      return res.status(400).json({
        message: "Student already booked this lesson"
      });
    }

    res.status(500).json({ error: error.message });

  }

};