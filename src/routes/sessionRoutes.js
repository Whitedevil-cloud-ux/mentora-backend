const express = require("express");
const router = express.Router();

const { createSession, getLessonSessions } = require("../controllers/sessionController");
const { authMiddleware } = require("../middleware/authMiddleware");
const { onlyMentor } = require("../middleware/roleMiddleware");

router.post("/", authMiddleware, onlyMentor, createSession);

router.get("/lessons/:id/sessions", authMiddleware, getLessonSessions);

module.exports = router;