import React, { Component } from "react";
import Ridewatch from "./Ridewatch";

const tryRequire = (path) => {
  try {
    return require(`${path}`);
  } catch (err) {
    return null;
  }
};

function soundex(name) {
  let s = [];
  let si = 1;
  let c;

  //              ABCDEFGHIJKLMNOPQRSTUVWXYZ
  let mappings = "01230120022455012623010202";

  s[0] = name[0].toUpperCase();

  for (let i = 1, l = name.length; i < l; i++) {
    c = name[i].toUpperCase().charCodeAt(0) - 65;

    if (c >= 0 && c <= 25) {
      if (mappings[c] !== "0") {
        if (mappings[c] !== s[si - 1]) {
          s[si] = mappings[c];
          si++;
        }

        if (si > 3) {
          break;
        }
      }
    }
  }

  if (si <= 3) {
    while (si <= 3) {
      s[si] = "0";
      si++;
    }
  }

  return s.join("");
}

export class RidewatchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgsrc: this.props.imgsrc,
      allChecked: false,
      Collapsed: false,
      Checked: "false",
      invisibleHeaders: this.props.invisibleHeaders,
    };
    //this.checkAll = this.checkAll.bind(this);
  }

  headerUrlGet() {
    var headerUrl =
      process.env.PUBLIC_URL +
      "/images/icons/" +
      "header-" +
      this.props.series +
      ".png";
    return headerUrl;
  }

  ridewatchMaker() {
    let ridewatches = this.props.watches.map((watch) => {
      if (watch.series === this.props.series) {
        return (
          <li>
            <Ridewatch
              //imgsrc={this.localImageUrl(watch)}
              imgsrc={
                process.env.PUBLIC_URL + "/images/watches/" + watch.id + ".png"
              }
              alt={watch.name}
              soundex={soundex(watch.name)}
              identity={this.props.katakana ? watch.katakana : watch.name}
              year={watch.year}
              id={watch.id}
              key={watch.id}
              series={watch.series}
              checked={this.state.Checked}
              totalOwnedUpdate={this.props.totalOwnedUpdate}
              allChecked={this.state.allChecked}
            />
          </li>
        );
      }
    });
    return ridewatches;
  }

 /*checkAll() {
    if (this.state.allChecked == false) {
      this.setState({
        allChecked: true,
      });
    } else {
      this.setState({
        allChecked: false,
      });
    }
    this.props.totalOwnedUpdate();
  }
  <button
  className={"sidebarHeaderButton"}
  onClick={() => this.checkAll()}
></button>*/

  render() {
    if (this.props.invisibleHeaders.includes(this.props.series)) {
      return <div className={this.props.series + "-div"}></div>;
    } else {
      return (
        <div className={this.props.series + "-background"}>
          <div className={this.props.series + "-div"}>
            <h1
              id={this.props.series + "-header"}
              className={this.props.series + "-open"}
            >
              <i id={this.props.series + "-header"} />
              <div>
                <img
                  className={"listHeaderImage"}
                  src={this.headerUrlGet()}
                  onClick={() => this.props.headerToggle(this.props.series)}
                ></img>
              </div>
            </h1>
            <ul className={this.props.series}>{this.ridewatchMaker()}</ul>
          </div>
        </div>
      );
    }
  }
}

export default RidewatchList;
