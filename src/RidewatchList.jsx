import React, { Component } from "react";
import Ridewatch from "./Ridewatch";

export class RidewatchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: this.props.series,
      imgsrc: this.props.imgsrc,
      watchJson: this.props.watchJson,
      allChecked: false,
      Collapsed: false,
      katakana: this.props.katakana
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    if (this.state.Collapsed === false) {
      this.setState({
        Collapsed: true,
        series: this.props.series + "-closed",
        imgsrc: [".png"]
      });
    } else {
      this.setState({
        Collapsed: false,
        series: this.props.series,
        watchJson: this.props.watchJson,
        imgsrc: this.props.imgsrc
      });
    }
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
          />
        </li>
      );
    });
    return ridewatches;
  }

  render() {
    if (this.state.Collapsed === true) {
      return (
        <div className={this.state.series + "-div"}>
          <h1 onClick={this.onClick} className={this.state.series}>
            {this.props.series}
          </h1>
        </div>
      );
    } else {
      return (
        <div className={this.state.series + "-div"}>
          <h1 onClick={this.onClick} className={this.state.series + "-open"}>
            {this.state.series}
          </h1>
          <ul className={this.state.series}>{this.ridewatchMaker()}</ul>
        </div>
      );
    }
  }
}

export default RidewatchList;
