import React, { Component } from "react";
import RidewatchList from "./components/RidewatchList.jsx";
import ridewatchJson from "./ridewatchdata.json";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      katakana: this.props.katakana
    };
  }
  render() {
    return (
      <div>
        <div>
          <RidewatchList
            series={"Search"}
            watchJson={ridewatchJson}
            katakana={this.state.katakana}
          />
        </div>
      </div>
    );
  }
}

export default Search;
