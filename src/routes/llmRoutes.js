const express = require("express");
const router = express.Router();

const { summarize } = require("../controllers/llmController");
const { llmLimiter } = require("../utils/rateLimiter");

router.post("/summarize", llmLimiter, summarize);

module.exports = router;