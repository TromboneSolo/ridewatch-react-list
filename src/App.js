import React, { Component } from "react";
import RidewatchList from "./RidewatchList.jsx";

import ridewatchJson from "./ridewatchdata.json";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      katakana: false
    };
  }
  render() {
    return (
      <div className="App">
        <RidewatchList series={"zio"} watchJson={ridewatchJson.series.zio} />
        <RidewatchList
          series={"build"}
          watchJson={ridewatchJson.series.build}
        />
        <RidewatchList
          series={"exaid"}
          watchJson={ridewatchJson.series.exaid}
        />
        <RidewatchList
          series={"ghost"}
          watchJson={ridewatchJson.series.ghost}
        />
        <RidewatchList
          series={"drive"}
          watchJson={ridewatchJson.series.drive}
        />
        <RidewatchList series={"gaim"} watchJson={ridewatchJson.series.gaim} />
        <RidewatchList
          series={"wizard"}
          watchJson={ridewatchJson.series.wizard}
        />
        <RidewatchList
          series={"fourze"}
          watchJson={ridewatchJson.series.fourze}
        />
        <RidewatchList series={"ooo"} watchJson={ridewatchJson.series.ooo} />
        <RidewatchList series={"w"} watchJson={ridewatchJson.series.w} />
        <RidewatchList
          series={"decade"}
          watchJson={ridewatchJson.series.decade}
        />
        <RidewatchList series={"kiva"} watchJson={ridewatchJson.series.kiva} />
        <RidewatchList series={"deno"} watchJson={ridewatchJson.series.deno} />
        <RidewatchList
          series={"kabuto"}
          watchJson={ridewatchJson.series.kabuto}
        />
        <RidewatchList
          series={"hibiki"}
          watchJson={ridewatchJson.series.hibiki}
        />
        <RidewatchList
          series={"blade"}
          watchJson={ridewatchJson.series.blade}
        />
        <RidewatchList series={"faiz"} watchJson={ridewatchJson.series.faiz} />
        <RidewatchList
          series={"ryuki"}
          watchJson={ridewatchJson.series.ryuki}
        />
        <RidewatchList
          series={"agito"}
          watchJson={ridewatchJson.series.agito}
        />
        <RidewatchList
          series={"kuuga"}
          watchJson={ridewatchJson.series.kuuga}
        />
        <RidewatchList
          series={"another"}
          watchJson={ridewatchJson.series.another}
        />
        <RidewatchList series={"misc"} watchJson={ridewatchJson.series.misc} />
      </div>
    );
  }
}

export default App;
