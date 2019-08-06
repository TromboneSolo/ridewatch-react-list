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

    this.onClick = this.onClick.bind(this);
  }

  componentWillMount() {
    var tempIdentity = this.props.imgsrc;
    if (localStorage.getItem(tempIdentity)) {
      this.setState({
        Checked: "true-" + this.state.series
      });
    } else {
      this.setState({
        Checked: "false"
      });
    }
  }

  onClick() {
    var tempIdentity = this.props.imgsrc;

    if (localStorage.getItem(tempIdentity)) {
      this.setState({
        Checked: "false"
      });
      localStorage.removeItem(tempIdentity);
    } else {
      localStorage.setItem(tempIdentity, "owned");
      this.setState({
        Checked: "true-" + this.state.series
      });
    }
  }

  render() {
    return (
      <div id="ridewatch">
        <button className={this.state.Checked} onClick={this.onClick}>
          <img src={this.state.imgsrc} alt={this.state.alt} />
        </button>
        <p>{this.state.identity}</p>
      </div>
    );
  }
}

export default Ridewatch;
