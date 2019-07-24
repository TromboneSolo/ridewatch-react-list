import React, { Component } from "react";
import RidewatchList from "./components/RidewatchList.jsx";
import ridewatchJson from "./ridewatchdata.json";

class Checklist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <RidewatchList
          series={"zio"}
          watchJson={ridewatchJson.series.zio}
          katakana={this.state.katakana}
        />
        <RidewatchList
          series={"build"}
          watchJson={ridewatchJson.series.build}
          katakana={this.state.katakana}
        />
        <RidewatchList
          series={"exaid"}
          watchJson={ridewatchJson.series.exaid}
          katakana={this.state.katakana}
        />
        <RidewatchList
          series={"ghost"}
          watchJson={ridewatchJson.series.ghost}
          katakana={this.state.katakana}
        />
        <RidewatchList
          series={"drive"}
          watchJson={ridewatchJson.series.drive}
          katakana={this.state.katakana}
        />
        <RidewatchList
          series={"gaim"}
          watchJson={ridewatchJson.series.gaim}
          katakana={this.state.katakana}
        />
        <RidewatchList
          series={"wizard"}
          watchJson={ridewatchJson.series.wizard}
          katakana={this.state.katakana}
        />
        <RidewatchList
          series={"fourze"}
          watchJson={ridewatchJson.series.fourze}
          katakana={this.state.katakana}
        />
        <RidewatchList
          series={"ooo"}
          watchJson={ridewatchJson.series.ooo}
          katakana={this.state.katakana}
        />
        <RidewatchList
          series={"w"}
          watchJson={ridewatchJson.series.w}
          katakana={this.state.katakana}
        />
        <RidewatchList
          series={"decade"}
          watchJson={ridewatchJson.series.decade}
          katakana={this.state.katakana}
        />
        <RidewatchList
          series={"kiva"}
          watchJson={ridewatchJson.series.kiva}
          katakana={this.state.katakana}
        />
        <RidewatchList
          series={"deno"}
          watchJson={ridewatchJson.series.deno}
          katakana={this.state.katakana}
        />
        <RidewatchList
          series={"kabuto"}
          watchJson={ridewatchJson.series.kabuto}
          katakana={this.state.katakana}
        />
        <RidewatchList
          series={"hibiki"}
          watchJson={ridewatchJson.series.hibiki}
          katakana={this.state.katakana}
        />
        <RidewatchList
          series={"blade"}
          watchJson={ridewatchJson.series.blade}
          katakana={this.state.katakana}
        />
        <RidewatchList
          series={"faiz"}
          watchJson={ridewatchJson.series.faiz}
          katakana={this.state.katakana}
        />
        <RidewatchList
          series={"ryuki"}
          watchJson={ridewatchJson.series.ryuki}
          katakana={this.state.katakana}
        />
        <RidewatchList
          series={"agito"}
          watchJson={ridewatchJson.series.agito}
          katakana={this.state.katakana}
        />
        <RidewatchList
          series={"kuuga"}
          watchJson={ridewatchJson.series.kuuga}
          katakana={this.state.katakana}
        />
        <RidewatchList
          series={"another"}
          watchJson={ridewatchJson.series.another}
          katakana={this.state.katakana}
        />
        <RidewatchList
          series={"misc"}
          watchJson={ridewatchJson.series.misc}
          katakana={this.state.katakana}
        />
      </div>
    );
  }
}

export default Checklist;
