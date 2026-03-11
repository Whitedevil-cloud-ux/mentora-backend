const express = require("express");
const router = express.Router();

const { createStudent, getStudents } = require("../controllers/studentController");
const { authMiddleware } = require("../middleware/authMiddleware");
const { onlyParent } = require("../middleware/roleMiddleware");

router.post("/", authMiddleware, onlyParent, createStudent);
router.get("/", authMiddleware, onlyParent, getStudents);

module.exports = router;