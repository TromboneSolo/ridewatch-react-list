import React, { Component } from "react";

export class Ridewatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Checked: this.props.checked,
      imgsrc: this.props.imgsrc,
      alt: this.props.alt,
      identity: this.props.identity,
      series: this.props.series
    };
  }

  

  render() {
    return (
      <div id="ridewatch">
        <button className={this.state.Checked} onClick={this.props.onClick}>
          <img src={this.state.imgsrc} alt={this.state.alt}/>
        </button>
        <p>{this.state.identity}</p>
      </div>
    );
  }
}

export default Ridewatch;
