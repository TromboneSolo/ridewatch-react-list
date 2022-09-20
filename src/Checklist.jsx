import React, { Component } from "react";
import RidewatchList from "./components/RidewatchList.jsx";
import DataService from "./services/DataService";
import confetti from "canvas-confetti";

class Checklist extends Component {
  constructor(props) {
    super(props);
    this.dataService = new DataService();
    this.state = {};
    this.canvasGenerator = this.canvasGenerator.bind(this);
  }

  canvasGenerator()
  {
    var myCanvas = document.createElement('canvas');
    document.body.appendChild(myCanvas);
    var myConfetti = confetti.create(myCanvas, {
      resize: true,
      height: window.innerHeight - 30,
      width: window.innerWidth - 150,
    });

    return(
      myConfetti({
      particleCount: 100,
      spread: 160,
      origin: {
        x: Math.random(),
        // since they fall down, start a bit higher than random
        y: 1000
      }
      // any other options from the global
      // confetti function
    }))
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
      {this.canvasGenerator()}
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
