import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import mainRoutes from "./MainRoutes";
import Sidebar from "./Sidebar.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
import Checklist from "./Checklist";
import JapaneseLogo from "./ridewatch/Japanese-logo.png";
import EnglishLogo from "./ridewatch/English-logo.png";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      katakana: false,
      language: "English",
      logo: EnglishLogo
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (this.state.katakana === false) {
      this.setState({
        katakana: true,
        language: "Japanese",
        logo: JapaneseLogo
      });
    } else {
      this.setState({
        katakana: false,
        language: "English",
        logo: EnglishLogo
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Sidebar
          {...this.props}
          katakana={this.state.katakana}
          languageClick={this.onClick}
          logo={this.state.logo}
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
                    <Checklist
                      {...props}
                      katakana={this.state.katakana}
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
