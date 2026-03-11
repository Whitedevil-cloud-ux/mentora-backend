const Student = require("../models/Student");

exports.createStudent = async (req, res) => {

  try {

    const { name } = req.body;

    const student = await Student.create({
      name,
      parentId: req.user.id
    });

    res.status(201).json(student);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};


exports.getStudents = async (req, res) => {

  try {

    const students = await Student.find({
      parentId: req.user.id
    });

    res.json(students);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};