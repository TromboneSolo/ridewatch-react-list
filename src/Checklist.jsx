import React, { Component } from "react";
import RidewatchList from "./components/RidewatchList.jsx";
import DataService from "./services/DataService";
import confetti from "canvas-confetti";
import Canvas from "./components/Canvas";
class Checklist extends Component {
  constructor(props) {
    super(props);
    this.dataService = new DataService();
    this.state = {};
    this.canvasGenerator = this.canvasGenerator.bind(this);
  }

  canvasGenerator()
  {
    return("shit")
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

if(this.props.invisibleHeaders.length === 22) {
  return (
    <div>
      Congratutions!
      <Canvas 
          id="myCanvas"
          height = "320"
          width = "640"
          canvasText = "I am Canvas. Here me roar!" 
        />
    </div>
    
  )}
  else{

    return (
      <div>
        
        {ridewatchLists}

      </div>
    );
}
  }
}

export default Checklist;
