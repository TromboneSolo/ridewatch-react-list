import React, { Component } from "react";
import Ridewatch from "./components/Ridewatch";
import DataService from "./services/DataService";

const tryRequire = (path) => {
  try {
    return require(`${path}`);
  } catch (err) {
    return null;
  }
};

// Search is the filter/search page.
// It lets users filter the watch catalog by name, color, DX/GP type, and owned status,
// then displays matching watches as a list of Ridewatch buttons.
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Checked: "false",
      searchResult: [],       // raw result array (unused — results go into displayWatches)
      displayWatches: null,   // rendered list of Ridewatch components to display
      primaryColorSearch: "all",
      secondaryColorSearch: "all",
      DX: null,               // null = both DX and GP; true = DX only; false = GP only
      nameSearch: "",
      ownedSearch: "all",
    };

    this.dataService = new DataService();
    this.ridewatchSearcher = this.ridewatchSearcher.bind(this);
    this.searchClick = this.searchClick.bind(this);
  }

  // Updates state when the primary color dropdown changes.
  handlePrimaryChange(event) {
    let value = event.target.value;
    this.setState({
      primaryColorSearch: value,
    });
  }

  // Updates state when the secondary color dropdown changes.
  handleSecondaryChange(event) {
    let value = event.target.value;
    this.setState({
      secondaryColorSearch: value,
    });
  }

  // Updates state when the owned status dropdown changes.
  handleOwnedChange(event) {
    let value = event.target.value;
    this.setState({
      ownedSearch: value,
    });
  }

  // Updates state when the DX/GP dropdown changes.
  // Converts the string value from the select element into the correct boolean/null.
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

  // Updates state as the user types in the name search box.
  handleNamedChange(event) {
    let value = event.target.value;
    this.setState({
      nameSearch: value,
    });
  }

  // Builds a search criteria object from current state and passes it to DataService.
  // Maps the filtered results to Ridewatch components and stores them in displayWatches.
  searchClick() {
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
              process.env.PUBLIC_URL + "/images/watches/" + watch.id + ".png"
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

  // Triggers a search when the user presses Enter in the name search box.
  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      event.preventDefault();
      this.searchClick();
    }
  }

  // Returns the raw search result array from state (currently unused in render).
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
