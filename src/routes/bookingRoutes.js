const express = require("express");

const router = express.Router();

const { createBooking } =
require("../controllers/bookingController");

const { authMiddleware } =
require("../middleware/authMiddleware");

const { onlyParent } =
require("../middleware/roleMiddleware");

router.post("/", authMiddleware, onlyParent, createBooking);

module.exports = router;