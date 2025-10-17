import React from "react";

const MealCard = ({ meal, addToCart }) => {
  return (
    <div>
      <img src={meal} alt="meal" />
      <h2>{meal.name}</h2>
      <p>{meal.price}</p>
      <button onClick={() => addToCart(meal)}>Add To Cart</button>
    </div>
  );
};
export default MealCard;
