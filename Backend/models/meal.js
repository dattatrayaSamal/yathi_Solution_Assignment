const mongoose = require("mongoose");

const Meal = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  category: { type: String },
});
module.exports = mongoose.model("Meal", Meal);
