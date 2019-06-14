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
        <img src="C:\DATA\local\DEVEL\ridewatch-react-list\ridewatch-react\ridewatch\anotherwatch-2000-anotherkuuga.png"></img>
      </div>
    );
  }
}

export default RidewatchList;
