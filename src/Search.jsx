import React, { Component } from "react";
import Ridewatch from "./components/Ridewatch";
import DataService from "./services/DataService";
import ConfigService from "./config.jsx";

const tryRequire = (path) => {
  try {
    return require(`${path}`);
  } catch (err) {
    return null;
  }
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Checked: "false",
      searchResult: [],
      displayWatches: null,
      primaryColorSearch: "all",
      secondaryColorSearch: "all",
      DX: null,
      nameSearch: "",
      ownedSearch: "all",
    };

    this.dataService = new DataService();
    this.configService = new ConfigService();
    this.ridewatchSearcher = this.ridewatchSearcher.bind(this);

    this.searchClick = this.searchClick.bind(this);
  }

  handlePrimaryChange(event) {
    let value = event.target.value;
    this.setState({
      primaryColorSearch: value,
    });
  }

  handleSecondaryChange(event) {
    let value = event.target.value;
    this.setState({
      secondaryColorSearch: value,
    });
  }

  handleOwnedChange(event) {
    let value = event.target.value;
    this.setState({
      ownedSearch: value,
    });
  }

  handleDXChange(event) {
    let value = event.target.value;
    if (value === "both") {
      this.setState({
        DX: null,
      });
    } else if (value === "true") {
      this.setState({
        DX: true,
      });
    } else if (value === "false") {
      this.setState({
        DX: false,
      });
    }
  }

  handleNamedChange(event) {
    let value = event.target.value;
    this.setState({
      nameSearch: value,
    });
  }

  searchClick() {
    //var filteredList = ridewatchJson.watch;
    //var filteredList = this.dataService.fetchAll();
    var search = {
      displayWatches: this.state.displayWatches,
      primaryColorSearch: this.state.primaryColorSearch,
      secondaryColorSearch: this.state.secondaryColorSearch,
      DX: this.state.DX,
      nameSearch: this.state.nameSearch,
      ownedSearch: this.state.ownedSearch,
    };
    var filteredList = this.dataService.fetch(search);
    let finalWatchArray = filteredList.map((watch) => {
      return (
        <li>
          <Ridewatch
            imgsrc={
              this.configService.watchDirectory() + watch.id + ".png"
            }
            alt={watch.name}
            identity={this.props.katakana ? watch.katakana : watch.name}
            year={watch.year}
            id={watch.id}
            key={watch.id}
            series={watch.series}
            checked={this.state.Checked}
            totalOwnedUpdate={this.props.totalOwnedUpdate}
          />
        </li>
      );
    });
    this.setState({ displayWatches: finalWatchArray });
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      event.preventDefault();
      this.searchClick();
    }
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
          Owned
          <select
            name="Owned"
            id="ownedSelect"
            className="colorSelector"
            onChange={this.handleOwnedChange.bind(this)}
          >
            <option value="all">both</option>
            <option value="owned">Owned</option>
            <option value="notOwned">Not Owned</option>
          </select>
          <textarea
            id="searchBar"
            placeholder="Rider Time"
            onChange={this.handleNamedChange.bind(this)}
            onKeyDown={this.handleKeyPress.bind(this)}
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
            <option value={null}>both</option>
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
