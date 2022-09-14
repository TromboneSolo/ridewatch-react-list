import React, { Component } from "react";
import RidewatchList from "./components/RidewatchList.jsx";
import DataService from "./services/DataService";

class Checklist extends Component {
  constructor(props) {
    super(props);
    this.dataService = new DataService();
    this.state = {};
  }



  render() {

    var allWatches = this.dataService.fetchAll();
    var uniqueSeriesList = this.dataService.fetchUniqueSeries(allWatches);
    var ridewatchLists = uniqueSeriesList.map(series =>
      <RidewatchList
      series={series}
      katakana={this.props.katakana}
      watches={allWatches.filter(w => w.series === series)}
      ridewatchClick={this.props.ridewatchClick}
      headerToggle={this.props.headerToggle}
      invisibleHeaders={this.props.invisibleHeaders}
    /> 
    );

    return (
      <div>

        {ridewatchLists}

      </div>
    );
  }
}

export default Checklist;
