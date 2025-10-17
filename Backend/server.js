const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const mealRoutes = require("./routes/mealRoutes");
const orderRoutes = require("./routes/orderRoute");

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.mongoURI)
  .then(() => console.log("Mongodb Connected"))
  .catch((err) => console.log("Disconnected", err));

app.use("/meals", mealRoutes);
app.use("/orders", orderRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
