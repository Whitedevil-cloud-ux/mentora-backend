const express = require("express");
const router = express.Router();

const { createLesson, getLessons } = require("../controllers/lessonController");
const { authMiddleware } = require("../middleware/authMiddleware");
const { onlyMentor } = require("../middleware/roleMiddleware");

router.post("/", authMiddleware, onlyMentor, createLesson);
router.get("/", authMiddleware, getLessons);

module.exports = router;