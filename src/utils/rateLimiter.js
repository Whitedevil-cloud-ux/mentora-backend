const rateLimit = require("express-rate-limit");

exports.llmLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 20,
  message: {
    message: "Too many requests, please try again later"
  }
});