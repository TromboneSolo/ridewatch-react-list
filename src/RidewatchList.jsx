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

  render() {
    var tempWatchUrlArray = [];
    var tempWatchNameArray = [];
    for (var i = 0; i < this.state.watchJson.length; i++) {
      tempWatchUrlArray.push(this.state.watchJson[i].imagesource);
      tempWatchNameArray.push(
        this.state.watchJson[i].name + "\n" + this.state.watchJson[i].katakana
      );
    }
    var tempRidewatches = [];
    for (var t = 0; t < tempWatchUrlArray.length; t++) {
      tempRidewatches.push([tempWatchUrlArray[t], tempWatchNameArray[t]]);
    }

    let ridewatches = tempRidewatches.map(alt => {
      return (
        <li>
          <Ridewatch
            imgsrc={alt[0]}
            alt={alt[1]}
            identity={alt[1]}
            key={alt[1]}
            series={this.state.series}
          />
        </li>
      );
    });

    if (this.state.Collapsed === true) {
      return (
        <div className={this.state.series + "-div"}>
          <h1
            onClick={this.onClick}
            className={this.state.series + "-collapsed"}
          >
            {this.props.series}
          </h1>
        </div>
      );
    } else {
      return (
        <div className={this.state.series + "-div"}>
          <h1 onClick={this.onClick} className={this.state.series}>
            {this.state.series}
          </h1>
          <ul className={this.state.series}>{ridewatches}</ul>
        </div>
      );
    }
  }
}

export default RidewatchList;
