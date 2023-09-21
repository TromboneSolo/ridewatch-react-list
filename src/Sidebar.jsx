import React, { Component } from "react";
//import imagine from "../images/icons/test.png";
import mainRoutes from "./MainRoutes";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import DataService from "./services/DataService";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.dataService = new DataService();
    this.state = {
      width: window.innerWidth,
    };
    this.easterEgg = this.easterEgg.bind(this);
  }

  easterEgg() {
    if (this.props.invisibleHeaders[0] === "exaid") {
      return (
        <img
          src={process.env.PUBLIC_URL + "/images/icons/dankuroto.png"}
          alt="dan"
        />
      );
    } else {
      return;
    }
  }

  render() {
    var imagine = process.env.PUBLIC_URL + "/images/icons/test.png";
    var allWatches = this.dataService.fetchAll();
    const sidebarBackground = {
      backgroundImage: "url(" + imagine + ")",
    };

    return (
      <div
        id="sidebar"
        className="sidebar"
        data-color="black"
        data-image={imagine}
      >
        <div className="sidebar-background" style={sidebarBackground} />
        <div style={{ height: 90 }} className="logo">
          <div>
            <img
              src={this.props.logo}
              height={90}
              alt="logo_image"
              onClick={this.props.languageClick}
            />
          </div>
        </div>
        <div>
          <div className="sidebar-wrapper">
            <ul className="nav">
              {mainRoutes.map((prop, key) => {
                if (!prop.redirect)
                  return (
                    <li className={"sidebar-list-item"} key={key}>
                      <NavLink
                        to={prop.path}
                        className="nav-link"
                        activeClassName="active"
                      >
                        <i className={prop.icon} />
                        <p>{prop.name}</p>
                      </NavLink>
                    </li>
                  );
                return null;
              })}
            </ul>
            <div>
              <p id="totalText">
                Total Owned: {this.props.totalOwned}/{allWatches.length}
              </p>
            </div>
            <div id="minimizedLists">
              <ul className="sidebarHeader">
                {this.props.invisibleHeaders.map((series) => {
                  return (
                    <li>
                      <button
                        className={"sidebarHeaderButton"}
                        onClick={() => this.props.headerToggle(series)}
                        height={"20px"}
                        width={"20px"}
                      >
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icons/" +
                            "icon-" +
                            series +
                            ".png"
                          }
                          alt={series}
                          height={"30px"}
                          width={"30px"}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
              {this.easterEgg()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
