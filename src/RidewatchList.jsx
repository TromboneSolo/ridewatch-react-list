import React, { Component } from "react";
import Ridewatch from "./Ridewatch";

export class RidewatchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: this.props.series,
      imgsrc: this.props.imgsrc,
      allChecked: false,
      Collapsed: false
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.setState({});
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
          <h1 onClick={this.onClick} className={this.state.series}>
            {this.state.series}
          </h1>
          <ul className = {this.state.series + "-list"}>
            {this.state.imgsrc.map(i => {
              return <li>{<Ridewatch imgsrc={i} alt={i.toString()} />}</li>;
            })}
          </ul>
        </div>
      );
    }
  }
}

export default RidewatchList;
