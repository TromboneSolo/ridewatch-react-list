import React, { Component } from "react";
import Ridewatch from "./Ridewatch";

export class RidewatchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: "",
      imgsrc: this.props.imgsrc,
      allChecked: false
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.series}</h1>
        {this.state.imgsrc.map(i => {
        return <ul><li>{<Ridewatch imgsrc={i}/> }</li></ul>
      })}
      </div>
    );
  }
}

export default RidewatchList;
