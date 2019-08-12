import React, { Component } from "react";

export class Ridewatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Checked: "false"
    };

    this.onClick = this.onClick.bind(this);
  }

  componentWillMount() {
    var tempIdentity = this.props.imgsrc;
    if (localStorage.getItem(tempIdentity)) {
      this.setState({
        Checked: "true-" + this.props.series
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
        Checked: "true-" + this.props.series
      });
    }
    
    this.props.ridewatchClick();
  }

  render() {
    return (
      <div id="ridewatch">
        <button className={this.state.Checked} onClick={this.onClick}>
          <img src={this.props.imgsrc} alt={this.props.alt} />
        </button>
        <p>
          {this.props.identity}
          <br /> {this.props.year}
        </p>
      </div>
    );
  }
}

export default Ridewatch;
