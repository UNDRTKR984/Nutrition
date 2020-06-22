import React from "react";
import SearchBar from "./SearchBar";
import nutritionix from "../api/nutritionix";
import FoodList from "./FoodList";
import Header from "./Header";
import "./App.css";

class App extends React.Component {
  state = { foods: [] };
  onSearchSubmit = async (term) => {
    const response = await nutritionix.get("/v2/search", {
      params: {
        q: term,
        search_type: "usda",
      },
    });
    console.log(response.data.results);
    this.setState({ foods: response.data.results });
  };

  render() {
    return (
      <div className="main">
        <Header />
        <SearchBar onSubmit={this.onSearchSubmit} />
        <FoodList foods={this.state.foods} />
      </div>
    );
  }
}

export default App;
