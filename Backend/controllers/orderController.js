const meal = require("../models/meal");
const Order = require("../models/order");

exports.placeOrder = async (req, res) => {
  try {
    const { username, mealName } = req.body;

    const meal = await meal.findOne({ name: mealName });
    if (!meal) {
      res.status(404).json({ message: "Meal not found" });
    }
    const order = new Order({
      username,
      mealName: meal.name,
      price: meal.price,
    });
    await order.save();
    res.json({ message: "Order Placed", order });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
