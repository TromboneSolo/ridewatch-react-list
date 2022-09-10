import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import mainRoutes from "./MainRoutes";
import Sidebar from "./Sidebar.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
//import JapaneseLogo from "/images/icons/header-zio.png";
//import EnglishLogo from "/images/icons/ZioEnglishLogo.png";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      katakana: false,
      language: "English",
      logo: "/images/icons/ZioEnglishLogo.png",
      totalOwned: "",
      invisibleHeaders: [],
    };
    this.languageClick = this.languageClick.bind(this);
    this.headerClick = this.headerClick.bind(this);
  }

  languageClick() {
    if (!this.state.katakana) {
      this.setState({
        katakana: true,
        language: "Japanese",
        logo: "/images/icons/ZioJapaneseLogo.png"
      });
    } else {
      this.setState({
        katakana: false,
        language: "English",
        logo: "/images/icons/ZioEnglishLogo.png"
      });
    }
  }

  headerClick(series) {
    if (!this.state.invisibleHeaders.includes(series)) {
      
        const list = this.state.invisibleHeaders.concat(series);
        this.setState({
          invisibleHeaders: list
        })

        }
  }

  sidebarHeaderClick(series) {
    var newList = this.state.invisibleHeaders;
    if (this.state.invisibleHeaders.includes(series)) {
      // remove from newlist
      // TBD
    }
    else {
      // ADD to new List
      newList.push(series);
    }
    this.setState({invisibleHeaders: newList});
  }

  componentDidMount() {
    
    this.setState({ totalOwned: localStorage.length.toString() });
  }

  ridewatchClick() {
    this.setState({ totalOwned: localStorage.length.toString() });
  }

  render() {
    return (
      <div className="App">
        <Sidebar
          {...this.props}
          katakana={this.state.katakana}
          languageClick={this.languageClick}
          logo={this.state.logo}
          totalOwned={this.state.totalOwned}
          headerClick={this.headerClick}
          invisibleHeaders={this.state.invisibleHeaders}
        />
        <div id="main-panel" className="main-panel" ref="mainPanel">
          <Header {...this.props} />
          <Switch>
            {mainRoutes.map((prop, key) => {
              if (prop.redirect)
                return <Redirect from={prop.path} to={prop.to} key={key} />;
              return (
                <Route
                  path={prop.path}
                  key={key}
                  render={props => (
                    <prop.page
                      {...props}
                      katakana={this.state.katakana}
                      ridewatchClick={this.ridewatchClick.bind(this)}
                      headerClick={this.headerClick}
                      invisibleHeaders={this.state.invisibleHeaders}
                    />
                  )}
                />
              );
            })}
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
