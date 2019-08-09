import React, { Component } from "react";
import ridewatchJson from "./ridewatchdata.json";
import Ridewatch from "./components/Ridewatch";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      katakana: this.props.katakana,
      displayWatches: []
    };

    this.ridewatchSearcher = this.ridewatchSearcher.bind(this);
  }

  ridewatchSearcher() {
    var primaryColor = document.getElementById("primaryColorSelect");
    var i = null;
    var tempWatchUrlArray = [];
    var tempWatchNameArray = [];
    for (i = 0; ridewatchJson.length > i; i += 1) {
      if (ridewatchJson[i].primaryColor === primaryColor) {
        return true;
      }
    }


    if (this.props.katakana === true) {
      for (i = 0; i < this.state.watchJson.length; i++) {
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
        <div className="parameters-container">
          <textarea id="searchBar" placeholder="Rider Time" />
          <select
            name="primary"
            id="primaryColorSelect"
            className="colorSelector"
          >
            <option value="red">red</option>
            <option value="pink">pink</option>
            <option value="yellow">yellow</option>
            <option value="blue">blue</option>
            <option value="dark blue">dark blue</option>
            <option value="green">green</option>
            <option value="gold">gold</option>
            <option value="silver">silver</option>
            <option value="purple">purple</option>
            <option value="orange">orange</option>
            <option value="black">black</option>
            <option value="aurora">aurora</option>
            <option value="white">white</option>
            <option value="grey">grey</option>
            <option value="clear">clear</option>
            <option value="mustard">mustard</option>
          </select>
          <select
            name="secondary"
            id="secondaryColorSelect"
            className="colorSelector"
          >
            <option value="red">red</option>
            <option value="yellow">yellow</option>
            <option value="purple">purple</option>
            <option value="pink">pink</option>
            <option value="blue">blue</option>
            <option value="orange">orange</option>
            <option value="green">green</option>
            <option value="black">black</option>
            <option value="gold">gold</option>
            <option value="silver">silver</option>
            <option value="white">white</option>
            <option value="grey">grey</option>
            <option value="mustard">mustard</option>
            <option value="magenta">magenta</option>
            <option value="cyan">cyan</option>
            <option value="maroon">maroon</option>
            <option value="brown">brown</option>
          </select>
          DX
          <input type="checkbox" name="DX" value="false" id="searchCheckbox" />
          <button id="submitButton" >
            Search
          </button>
        </div>
        <div className={this.state.series + "-background"}>
          <div className={this.state.series + "-div"}>
            <h1
              id={this.state.series + "-header"}
              onClick={this.onClick}
              className={this.state.series + "-open"}
            >
              <i id={this.state.series + "-header"} />
              {this.state.series}
            </h1>
            <ul className={"searchList"}>{this.displayWatches}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
