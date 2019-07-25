import React, { Component } from "react";
import logo from "./ridewatch/ridewatch-2018-zio.png";
import imagine from "./ridewatch/anotherwatch-2000-anotherkuuga.png";
import mainRoutes from "./MainRoutes";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      width: window.innerWidth
    };
  }
  render() {
    const sidebarBackground = {
      backgroundImage: "url(" + imagine + ")"
    };
    return (
      <div
        id="sidebar"
        className="sidebar"
        data-color="black"
        data-image={imagine}
      >
        <div className="sidebar-background" style={sidebarBackground} />
        <div style={{ height: 105 }} className="logo">
          <a href="http://www.glassbit.com">
            <div>
              <img src={logo} height={90} alt="logo_image" />
            </div>
          </a>
        </div>
        <div>
          <div className="sidebar-wrapper">
            <ul className="nav">
              <button id="japaneseSwitch" onClick={this.props.languageClick}>
                {this.props.language}
              </button>
              {mainRoutes.map((prop, key) => {
                if (!prop.redirect)
                  return (
                    <li key={key}>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
