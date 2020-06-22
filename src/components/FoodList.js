import React from "react";
import FoodCard from "./FoodCard";

function FoodList(props) {
  const foods = props.foods.map((food, index) => {
    return <FoodCard key={index} food={food} />;
  });
  return <div> {foods} </div>;
}

export default FoodList;
