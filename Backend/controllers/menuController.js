const Meal = require("../models/meal");

exports.getMenu = async (req, res) => {
  try {
    const meals = await Meal.find();
    res.json({ message: "Menu loaded successfully", data: meals });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
