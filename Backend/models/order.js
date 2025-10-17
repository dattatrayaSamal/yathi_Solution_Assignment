const mongoose = require("mongoose");

const order = new mongoose.Schema({
  username: { type: String, required: true },
  mealName: { type: String, required: true },
  price: { type: String, required: true },
  status: { type: String, default: "Placed" },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", order);
