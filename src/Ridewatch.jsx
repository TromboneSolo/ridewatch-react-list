import React, { Component } from "react";

export class Ridewatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Checked: false,
      imgsrc: this.props.imgsrc
    };
  }

  render() {
    return (
      <div>
        <button>
          <img src={this.state.imgsrc} />
        </button>
      </div>
    );
  }
}

export default Ridewatch;
