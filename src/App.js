import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import mainRoutes from "./routes/MainRoutes.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      katakana: false,
      language: "English"
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (this.state.katakana === false) {
      this.setState({
        katakana: true,
        language: "Japanese"
      });
    } else {
      this.setState({
        katakana: false,
        language: "English"
      });
    }
  }

  componentWillMount() {
    if (typeof Storage !== "undefined") {
      var ownedJson = JSON.parse(localStorage.getItem("ownedJson"));

      console.log(ownedJson);
    } else {
      alert("Sorry, your browser does not support web storage...");
    }
  }
  render() {
    return (
      <div className="App">
        <button id="japaneseSwitch" onClick={this.onClick}>
          {this.state.language}
        </button>
        <div id="main-panel" className="main-panel" ref="mainPanel">
          <Header {...this.props} />
          <Switch>
            {mainRoutes.map((prop, key) => {
              if (prop.redirect)
                return <Redirect from={prop.path} to={prop.to} key={key} />;
              return (
                <Route path={prop.path} component={prop.component} key={key} />
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
