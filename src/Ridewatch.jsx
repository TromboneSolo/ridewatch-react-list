import React, { Component } from "react";

export class Ridewatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Checked: "false",
      imgsrc: this.props.imgsrc,
      alt: this.props.alt,
      identity: this.props.identity,
      series: this.props.series
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (this.state.Checked === "false") {
      switch (this.state.series) {
        default:
          this.setState({
            Checked: "true"
          });
          break;
        case "zio":
          this.setState({
            Checked: "true-zio"
          });
          break;
        case "build":
          this.setState({
            Checked: "true-build"
          });
          break;
        case "exaid":
          this.setState({
            Checked: "true-exaid"
          });
          break;
        case "ghost":
          this.setState({
            Checked: "true-ghost"
          });
          break;
        case "drive":
          this.setState({
            Checked: "true-drive"
          });
          break;
        case "gaim":
          this.setState({
            Checked: "true-gaim"
          });
          break;
        case "wizard":
          this.setState({
            Checked: "true-wizard"
          });
          break;
        case "fourze":
          this.setState({
            Checked: "true-fourze"
          });
          break;
        case "ooo":
          this.setState({
            Checked: "true-ooo"
          });
          break;
        case "w":
          this.setState({
            Checked: "true-w"
          });
          break;
        case "decade":
          this.setState({
            Checked: "true-decade"
          });
          break;
        case "kiva":
          this.setState({
            Checked: "true-kiva"
          });
          break;
        case "deno":
          this.setState({
            Checked: "true-deno"
          });
          break;
        case "kabuto":
          this.setState({
            Checked: "true-kabuto"
          });
          break;
        case "hibiki":
          this.setState({
            Checked: "true-hibiki"
          });
          break;
        case "blade":
          this.setState({
            Checked: "true-blade"
          });
          break;
        case "faiz":
          this.setState({
            Checked: "true-faiz"
          });
          break;
        case "ryuki":
          this.setState({
            Checked: "true-ryuki"
          });
          break;
        case "agito":
          this.setState({
            Checked: "true-agito"
          });
          break;
        case "kuuga":
          this.setState({
            Checked: "true-kuuga"
          });
          break;
        case "another":
          this.setState({
            Checked: "true-another"
          });
          break;
        case "misc":
          this.setState({
            Checked: "true-misc"
          });
          break;
      }
    } else {
      this.setState({
        Checked: "false"
      });
    }
  }

  render() {
    return (
      <div id="ridewatch">
        <button className={this.state.Checked} onClick={this.onClick}>
          <img src={this.state.imgsrc} alt={this.state.alt} />
          {this.state.identity}
        </button>
      </div>
    );
  }
}

export default Ridewatch;
