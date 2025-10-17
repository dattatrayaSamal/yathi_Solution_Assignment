import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import MealCard from "../components/MealCard";

const Dashboard = () => {
  const [meals, setMeal] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/meals")
      .then((res) => res.json())
      .then((data) => setMeal(data))
      .catch((err) => console.log(err));
  }, []);

  const addToCart = (meal) => {
    setCart([...cart, meal]);
  };
  const placeOrder = async () => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const response = await fetch("http://localhost:8000/orders", {
      method: "POST",
    });
  };
  return (
    <div>
      <Navbar />
      <div>
        {meals.map((meal) => (
          <MealCard key={meal._id} meal={meal} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};
