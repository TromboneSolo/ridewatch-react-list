import React, { Component } from "react";
import RidewatchList from "./components/RidewatchList.jsx";
import DataService from "./services/DataService";
import Canvas from "./components/Canvas";
// Checklist is the main page of the app.
// It displays all watches grouped by series, each in a collapsible RidewatchList section.
class Checklist extends Component {
  constructor(props) {
    super(props);
    this.dataService = new DataService();
    this.state = {};
    this.canvasGenerator = this.canvasGenerator.bind(this);
  }

  // Placeholder — not currently used.
  canvasGenerator() {
    return "shit";
  }

  // Fetches all watches and groups them into per-series RidewatchList components.
  // If all 22 series are hidden, renders the easter egg Canvas instead of the list.
  render() {
    var allWatches = this.dataService.fetchAll();
    var uniqueSeriesList = this.dataService.fetchUniqueSeries(allWatches);
    var ridewatchLists = uniqueSeriesList.map((series) => (
      <RidewatchList
        series={series}
        katakana={this.props.katakana}
        watches={allWatches.filter((w) => w.series === series)}
        totalOwnedUpdate={this.props.totalOwnedUpdate}
        headerToggle={this.props.headerToggle}
        invisibleHeaders={this.props.invisibleHeaders}
      />
    ));

    // Easter egg: triggered when every series section has been minimized
    if (this.props.invisibleHeaders.length === 22) {
      return (
        <div>
          Congratutions! You have wasted even more money than me.
          <Canvas
            id="myCanvas"
            height="320"
            width="640"
            canvasText="God Will Not Forgive Bandai"
          />
        </div>
      );
    } else {
      return <div>{ridewatchLists}</div>;
    }
  }
}

export default Checklist;
