const express = require("express");
const router = express.Router();

const { createLesson } = require("../controllers/lessonController");
const { authMiddleware } = require("../middleware/authMiddleware");
const { onlyMentor } = require("../middleware/roleMiddleware");

router.post("/", authMiddleware, onlyMentor, createLesson);

module.exports = router;