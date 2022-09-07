import React, { Component } from "react";
import Ridewatch from "./Ridewatch";
import zioheader from "../ridewatch/header-zio.png";
//import buildheader from "./ridewatch/header-build.png";
//import exaidheader from "./ridewatch/header-exaid.png";
//import ghostheader from "./ridewatch/header-ghost.png";
//import driveheader from "./ridewatch/header-drive.png";
//import gaimheader from "./ridewatch/header-gaim.png";
//import wizardheader from "./ridewatch/header-wizard.png";
//import fourzeheader from "./ridewatch/header-fourze.png";
//import oooheader from "./ridewatch/header-ooo.png";
//import wheader from "./ridewatch/header-w.png";
//import decadeheader from "./ridewatch/header-decade.png";
//import kivaheader from "./ridewatch/header-kiva.png";
//import denoheader from "./ridewatch/header-deno.png";
//import kabutoheader from "./ridewatch/header-kabuto.png";
//import hibikiheader from "./ridewatch/header-hibiki.png";
//import bladeheader from "./ridewatch/header-blade.png";
//import faizheader from "./ridewatch/header-faiz.png";
//import ryukiheader from "./ridewatch/header-ryuki.png";
//import agitoheader from "./ridewatch/header-agito.png";
//import kuugaheader from "./ridewatch/header-kuuga.png";
//import anotherheader from "./ridewatch/header-another.png";
//import mischeader from "./ridewatch/header-misc.png";


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
      Checked: "false"
    };
    this.onClick = this.onClick.bind(this);
  }


  onClick() {
    if (this.state.Collapsed === false) {
      this.setState({
        Collapsed: true,
        series: this.props.series + "-closed",
        imgsrc: [".png"]
      });
    } else {
      this.setState({
        Collapsed: false,
        series: this.props.series,
        imgsrc: zioheader
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
    const headerBackground = {
      backgroundImage: "url(" + zioheader + ")"
    };
    if (this.state.Collapsed === true) {
      return (
        <div className={this.state.series + "-div"}>
          <h1 onClick={this.onClick} className={this.state.series}>
            <i id={this.state.series + "-header"} />
            {headerBackground}
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
              <div
              
              />
            </h1>
            <ul className={this.props.series}>{this.ridewatchMaker()}</ul>
          </div>
        </div>
      );
    }
  }
}

export default RidewatchList;
