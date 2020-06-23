import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <h1>Calorie Finder</h1>
      <h5>The Easiest Way to Find How Many Calories Something Has!</h5>
      <img
        className="logo"
        src={require("../images/Nutritionix.png")}
        alt="Powered by Nutritionix API"
      />
    </div>
  );
}

export default Header;
