import React, { Component } from "react";
import Ridewatch from "./Ridewatch";

export class RidewatchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgsrc: this.props.imgsrc,
      allChecked: false,
      Collapsed: false,
      Checked: "false"
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
        imgsrc: this.props.imgsrc
      });
    }
  }

  ridewatchMaker() {
    let ridewatches = this.props.watchJson.watch.map(watch => {
      if (watch.series === this.props.series) {
        return (
          <li>
            <Ridewatch
              imgsrc={watch.imagesource}
              alt={watch.name}
              identity={this.props.katakana ? watch.katakana : watch.name}
              year={watch.year}
              id={watch.id}
              key={watch.id}
              series={watch.series}
              checked={this.state.Checked}
              ridewatchClick={this.props.ridewatchClick}
            />
          </li>
        );
      }
    });
    return ridewatches;
  }

  render() {
    if (this.state.Collapsed === true) {
      return (
        <div className={this.state.series + "-div"}>
          <h1 onClick={this.onClick} className={this.state.series}>
            <i id={this.state.series + "-header"} />
            {this.state.series}
          </h1>
        </div>
      );
    } else {
      return (
        <div className={this.props.series + "-background"}>
          <div className={this.props.series + "-div"}>
            <h1
              id={this.props.series + "-header"}
              onClick={this.onClick}
              className={this.props.series + "-open"}
            >
              <i id={this.props.series + "-header"} />
              {this.props.series}
            </h1>
            <ul className={this.props.series}>{this.ridewatchMaker()}</ul>
          </div>
        </div>
      );
    }
  }
}

export default RidewatchList;
