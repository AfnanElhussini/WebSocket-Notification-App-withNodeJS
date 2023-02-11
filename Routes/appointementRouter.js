const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const controller = require("../Contoller/appointmentController");

router.get("/appointment", controller.getAllAppointments);

router.post("/appointment",controller.createAppointment);

module.exports = router;
