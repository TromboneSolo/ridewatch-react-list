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
    if(this.state.Checked === "false") {
    this.setState({
      Checked: "true"
    })
  }
  else {
    this.setState({
      Checked: "false"
    })
  }
}

  render() {
    return (
      <div id="ridewatch">
        <button className={this.state.Checked} onClick={this.onClick}>
          <img src={this.state.imgsrc} alt={this.props.alt} />
        </button>
      </div>
    );
  }
}

export default Ridewatch;
