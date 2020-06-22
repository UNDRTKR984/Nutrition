import "./FoodList.css";
import React from "react";

class FoodCard extends React.Component {
  render() {
    return (
      <div className="food-item">
        <h4>{this.props.food.item_name}</h4>
        <p>{Math.floor(this.props.food.nutrient_value)} Calories</p>
      </div>
    );
  }
}

export default FoodCard;
