import React, { Component } from "react";

export class Ridewatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Checked: "false"
    };

    this.onClick = this.onClick.bind(this);
  }
/*this function (and the Checked state altogether) is only for changing the background css of ridewatches*/
  componentWillMount() {
    var tempIdentity = this.props.id;
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
/*when you click, grab the id and use it to mark the watch as owned in local storage, and change background*/
  onClick() {
    var tempIdentity = this.props.id;

    if (localStorage.getItem(tempIdentity)) {
      this.setState({
        Checked: "false"
      });
      localStorage.removeItem(tempIdentity);
    } else {
      localStorage.setItem(tempIdentity, tempIdentity);
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
          {this.props.identity}&nbsp;{this.props.soundex}
          <br /> {this.props.year}
        </p>
      </div>
    );
  }
}

export default Ridewatch;
