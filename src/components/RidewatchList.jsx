import React, { Component } from "react";
import Ridewatch from "./Ridewatch";

const tryRequire = (path) => {
  try {
   return require(`${path}`);
  } catch (err) {
   return null;
  }
}

function soundex(name)
{
    let s = [];
    let si = 1;
    let c;

    //              ABCDEFGHIJKLMNOPQRSTUVWXYZ
    let mappings = "01230120022455012623010202";

    s[0] = name[0].toUpperCase();

    for(let i = 1, l = name.length; i < l; i++)
    {
        c = (name[i].toUpperCase()).charCodeAt(0) - 65;

        if(c >= 0 && c <= 25)
        {
            if(mappings[c] !== '0')
            {
                if(mappings[c] !== s[si-1])
                {
                    s[si] = mappings[c];
                    si++;
                }

                if(si > 3)
                {
                    break;
                }
            }
        }
    }

    if(si <= 3)
    {
        while(si <= 3)
        {
            s[si] = '0';
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
    };
    this.onClick = this.onClick.bind(this);
  }

  headerUrlGet(){
    var headerUrl = (process.env.PUBLIC_URL + "/images/icons/" + "header-" + this.props.series + ".png");
    return headerUrl;
  }

  onClick() {
    if (this.state.Collapsed === false) {
      this.setState({
        Collapsed: true,
        imgsrc: [process.env.PUBLIC_URL + "/images/icons/" + "header-" + this.state.series + ".png"]
      });
      this.props.headerClick(this.props.series);
    } else {
      this.setState({
        Collapsed: false,
        imgsrc: [process.env.PUBLIC_URL + "/images/icons/" + "header-" + this.state.series + ".png"]
      });
    }
  }

  ridewatchMaker() {
    let ridewatches = this.props.watches.map(watch => {
      if (watch.series === this.props.series) {
        return (
          <li>
            <Ridewatch
              //imgsrc={this.localImageUrl(watch)}
              imgsrc = {process.env.PUBLIC_URL + "/images/watches/" + watch.id + ".png"}
              alt={watch.name}
              soundex={soundex(watch.name)}
              identity={this.props.katakana ? watch.katakana : watch.name}
              year={watch.year}
              id={watch.id}
              key={watch.id}
              series={watch.series}
              checked={this.state.Checked}
              ridewatchClick={this.props.ridewatchClick}
            />
          </li>
        );
      }
    });
    return ridewatches;
  }

  render() {
    if (this.state.Collapsed === true) {
      return (
        <div className={this.props.series + "-div"}>
          <h1 onClick={this.onClick} className={this.state.series}>
            <i id={this.props.series + "-header"} />
            <img
            className = {"listHeaderImage"}
             src={this.headerUrlGet()} />
          </h1>
        </div>
      );
    } else {
      return (
        <div className={this.props.series + "-background"}>
          <div className={this.props.series + "-div"}>
            <h1
              id={this.props.series + "-header"}
              onClick={this.onClick}
              className={this.props.series + "-open"}
            >
              <i id={this.props.series + "-header"} />
              <div>
                <img
                className = {"listHeaderImage"}
                 src={this.headerUrlGet()}></img>
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
