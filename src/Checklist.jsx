import React, { Component } from "react";
import RidewatchList from "./components/RidewatchList.jsx";
import DataService from "./services/DataService";
import Canvas from "./components/Canvas";
class Checklist extends Component {
  constructor(props) {
    super(props);
    this.dataService = new DataService();
    this.state = {};
    this.canvasGenerator = this.canvasGenerator.bind(this);
  }

  canvasGenerator() {
    return "shit";
  }

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

    if (this.props.invisibleHeaders.length === 22) {
      return (
        <div>
          Congratutions! You have wasted as much money as me.
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
