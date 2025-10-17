const express = require("express");
const { getMeals } = require("../controllers/mealController");

const router = express.Router();

router.get("/", getMeals);

module.exports = router;
