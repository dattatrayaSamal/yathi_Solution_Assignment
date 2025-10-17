const meal = require("../models/meal");

exports.getMeals = async (req, res) => {
  try {
    const meals = await meal.find();
    res.json({ message: "Fetched successfully" });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
