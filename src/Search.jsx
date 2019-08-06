import React, { Component } from "react";
import ridewatchJson from "./ridewatchdata.json";
import Ridewatch from "./components/Ridewatch";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      katakana: this.props.katakana,
      watchJson: ridewatchJson
    };
  }

  ridewatchMaker() {
    var tempWatchUrlArray = [];
    var tempWatchNameArray = [];
    if (this.props.katakana === true) {
      for (var i = 0; i < this.state.watchJson.length; i++) {
        tempWatchUrlArray.push(this.state.watchJson[i].imagesource);
        tempWatchNameArray.push(this.state.watchJson[i].katakana);
      }
    } else {
      for (var n = 0; n < this.state.watchJson.length; n++) {
        tempWatchUrlArray.push(this.state.watchJson[n].imagesource);
        tempWatchNameArray.push(this.state.watchJson[n].name);
      }
    }
    var tempRidewatches = [];
    for (var t = 0; t < tempWatchUrlArray.length; t++) {
      tempRidewatches.push([tempWatchUrlArray[t], tempWatchNameArray[t]]);
    }

    let ridewatches = tempRidewatches.map(watch => {
      return (
        <li>
          <Ridewatch
            imgsrc={watch[0]}
            alt={watch[1]}
            identity={watch[1]}
            key={watch[1]}
            series={this.state.series}
            onClick={this.props.ridewatchClick}
            checked={this.state.Checked}
          />
        </li>
      );
    });
    return ridewatches;
  }

  render() {
    return (
      <div className={this.state.series + "-div"}>
        <h1 onClick={this.onClick} className={"search-header"}>
          Search
        </h1>
        <ul className={this.state.series}>{this.ridewatchMaker()}</ul>
      </div>
    );
  }
}

export default Search;
