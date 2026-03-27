import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import mainRoutes from "./MainRoutes";
import Sidebar from "./Sidebar.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
//import JapaneseLogo from "/images/icons/header-zio.png";
//import EnglishLogo from "/images/icons/ZioEnglishLogo.png";

// App is the root component. It holds all global state and passes it down
// to the Sidebar and page components via props.
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      katakana: false,                 // true = display Japanese (katakana) watch names
      language: "English",            // current display language label
      logo: process.env.PUBLIC_URL + "/images/icons/ZioEnglishLogo.png", // sidebar logo image
      totalOwned: "",                 // count of owned watches, read from localStorage
      invisibleHeaders: [],           // list of series names whose sections are currently hidden
      resetKey: 0,                    // incremented on reset to force Ridewatch components to remount
    };
    this.languageClick = this.languageClick.bind(this);
    this.headerToggle = this.headerToggle.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }

  // Toggles the display language between English and Japanese (katakana).
  // Also swaps the sidebar logo image to match the selected language.
  languageClick() {
    if (!this.state.katakana) {
      this.setState({
        katakana: true,
        language: "Japanese",
        logo: process.env.PUBLIC_URL + "/images/icons/ZioJapaneseLogo.png"
      });
    } else {
      this.setState({
        katakana: false,
        language: "English",
        logo: process.env.PUBLIC_URL + "/images/icons/ZioEnglishLogo.png"
      });
    }
  }

  // Adds or removes a series from the invisibleHeaders list.
  // If the series is not hidden, it gets added (hidden).
  // If the series is already hidden, it gets removed (shown again).
  // Called when a series header image is clicked.
  headerToggle(series) {
    if (!this.state.invisibleHeaders.includes(series)) {
      
        const removedHeaders = this.state.invisibleHeaders;
        removedHeaders.push(series);

        this.setState({
          invisibleHeaders: removedHeaders

        });
  }
  else{
  const restoredHeaders = this.state.invisibleHeaders.filter(w => w !== series);
      this.setState({
        invisibleHeaders: restoredHeaders
      });
    }
}

// A simple function for resetting the website completely. It maximizes every header,
// clears local storage, and implements a resetkey so that every ridewatch button is reset.

resetCount(){
  localStorage.clear();
  this.setState({ invisibleHeaders: [], totalOwned: "0", resetKey: this.state.resetKey + 1 });
}

  /*headerSummon(series) {
    if (this.state.invisibleHeaders.includes(series)) {
      
      const list = this.state.invisibleHeaders.filter(w => w !== series);

        this.setState({
          invisibleHeaders: list

        });
      }
      else {this.setState({
        invisibleHeaders: this.state.invisibleHeaders
      })}
    }*/

  // On mount, reads the number of owned watches from localStorage
  // and stores it in state so the sidebar can display the correct total.
  componentDidMount() {
    this.setState({ totalOwned: localStorage.length.toString() });
  }

  // Re-reads the owned watch count from localStorage and updates state.
  // Called as a callback by Ridewatch whenever a watch is toggled.
  totalOwnedUpdate() {
    this.setState({ totalOwned: localStorage.length.toString() });
  }

  // Renders the app shell: Sidebar on the left, and the active page on the right.
  // Global state (language, logo, owned count, hidden series) is passed down as props.
  render() {
    return (
      <div className="App">
        <Sidebar
          {...this.props}
          katakana={this.state.katakana}
          languageClick={this.languageClick}
          logo={this.state.logo}
          totalOwned={this.state.totalOwned}
          headerToggle={this.headerToggle}
          invisibleHeaders={this.state.invisibleHeaders}
          reset={this.resetCount}
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
                      key={this.state.resetKey}
                      katakana={this.state.katakana}
                      totalOwnedUpdate={this.totalOwnedUpdate.bind(this)}
                      headerToggle={this.headerToggle}
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
