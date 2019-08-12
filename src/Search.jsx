import React, { Component } from "react";
import ridewatchJson from "./ridewatchdata.json";
import Ridewatch from "./components/Ridewatch";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Checked: "false",
      searchResult: [],
      displayWatches: null,
      primaryColorSearch: "all",
      secondaryColorSearch: "all",
      DX: "both",
      nameSearch: ""
    };

    this.ridewatchSearcher = this.ridewatchSearcher.bind(this);

    this.searchClick = this.searchClick.bind(this);
  }

  handlePrimaryChange(event) {
    let value = event.target.value;
    this.setState({
      primaryColorSearch: value
    });
  }

  handleSecondaryChange(event) {
    let value = event.target.value;
    this.setState({
      secondaryColorSearch: value
    });
  }

  handleDXChange(event) {
    let value = event.target.value;
    this.setState({
      DX: value
    });
  }

  handleNamedChange(event) {
    let value = event.target.value;
    this.setState({
      nameSearch: value
    });
  }

  searchClick() {
    var filteredList = ridewatchJson.watch;
    if (this.state.nameSearch !== "") {
      filteredList = filteredList.filter(this.state.nameSearch);
    }
    if (this.state.primaryColorSearch !== "all") {
      filteredList = filteredList.filter(watch => {
        return watch.primaryColor === this.state.primaryColorSearch;
      });
    }
    if (this.state.secondaryColorSearch !== "all") {
      filteredList = filteredList.filter(watch => {
        return watch.secondaryColor === this.state.secondaryColorSearch;
      });
    }
    if (this.state.DX !== "both") {
      filteredList = filteredList.filter(watch => {
        return watch.DX === this.state.DX;
      });
    }

    /*let tempWatchArray = [];

    if (this.state.nameSearch !== "") {
      ridewatchJson.watch.map(watch => {
        if (watch.name === this.state.nameSearch) {
          tempWatchArray.push(watch);
        }
      });
    }
    if (tempWatchArray[1]) {
      if (this.state.primaryColorSearch !== "all") {
        tempWatchArray.map(watch => {
          if (watch.primaryColor !== this.state.primaryColorSearch) {
            tempWatchArray.pop(watch);
          }
        });
      }
    }*/
    let finalWatchArray = filteredList.map(watch => {
      return (
        <li>
          <Ridewatch
            imgsrc={watch.imagesource}
            alt={watch.name}
            identity={this.props.katakana ? watch.katakana : watch.name}
            year={watch.year}
            key={watch.id}
            series={watch.series}
            checked={this.state.Checked}
            ridewatchClick={this.props.ridewatchClick}
          />
        </li>
      );
    });
    this.setState({ displayWatches: finalWatchArray });
  }

  ridewatchSearcher() {
    let ridewatches = this.state.searchResult;
    return ridewatches;
  }

  render() {
    return (
      <div className={this.state.series + "-div"}>
        <h1 onClick={this.onClick} className={"search-header"}>
          Search
        </h1>
        <div className="parameters-container">
          <textarea
            id="searchBar"
            placeholder="Rider Time"
            onChange={this.handleNamedChange.bind(this)}
          />
          Primary Color:
          <select
            name="primary"
            id="primaryColorSelect"
            className="colorSelector"
            onChange={this.handlePrimaryChange.bind(this)}
          >
            <option value="all">all</option>
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
          Secondary Color:
          <select
            name="secondary"
            id="secondaryColorSelect"
            className="colorSelector"
            onChange={this.handleSecondaryChange.bind(this)}
          >
            <option value="all">all</option>
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
          <select
            name="DX"
            id="dxSelect"
            className="colorSelector"
            onChange={this.handleDXChange.bind(this)}
          >
            <option value="both">both</option>
            <option value={true}>DX</option>
            <option value={false}>GP</option>
          </select>
          <button id="submitButton" onClick={this.searchClick.bind(this)}>
            Search
          </button>
        </div>
        <div className={"search-background"}>
          <div className={this.state.series + "-div"}>
            <ul className="searchList">{this.state.displayWatches}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
