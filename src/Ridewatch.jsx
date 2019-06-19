import React, { Component } from "react";

export class Ridewatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Checked: "false",
      imgsrc: this.props.imgsrc
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      Checked: "true"
    })
  }

  render() {
    return (
      <div>
        <button className={this.state.Checked} onClick={this.onClick}>
          <img src={this.state.imgsrc} alt={this.props.alt} />
        </button>
      </div>
    );
  }
}

export default Ridewatch;
