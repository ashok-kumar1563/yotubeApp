import React from "react";
import "semantic-ui-css/semantic.min.css";

class SearchBar extends React.Component {
  state = {
    term: "",
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment ">
        <form onSubmit={this.onFormSubmit} className=" ui form">
          <div className="field">
            <label>Search video</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
