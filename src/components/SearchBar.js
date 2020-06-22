import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Food/Drink Search</label>
            <input
              placeholder="Enter food here"
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
          <div
            onClick={this.onFormSubmit}
            className="ui vertical animated button"
            tabIndex="0"
          >
            <div className="hidden content">Search</div>
            <div className="visible content">Hit Enter or Click Here</div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
