import React, { Component } from "react";
import Ridewatch from "./Ridewatch";

export class RidewatchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: this.props.series,
      imgsrc: this.props.imgsrc,
      allChecked: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {}

  render() {
    return (
      <div className={this.props.series}>
        <h1 onClick={this.onClick}>{this.state.series}</h1>
        <ul>
          {this.state.imgsrc.map(i => {
            return <li>{<Ridewatch imgsrc={i} alt={i.toString()} />}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default RidewatchList;
