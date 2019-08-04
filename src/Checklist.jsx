import React, { Component } from "react";
import RidewatchList from "./components/RidewatchList.jsx";
import ridewatchJson from "./ridewatchdata.json";

class Checklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <RidewatchList
          series={"zio"}
          watchJson={ridewatchJson.series.zio}
          katakana={this.props.katakana}
          ridewatchClick={this.props.ridewatchClick}
        />
        <RidewatchList
          series={"build"}
          watchJson={ridewatchJson.series.build}
          katakana={this.props.katakana}
          ridewatchClick={this.props.ridewatchClick}
          
        />
        <RidewatchList
          series={"exaid"}
          watchJson={ridewatchJson.series.exaid}
          katakana={this.props.katakana}
          ridewatchClick={this.props.ridewatchClick}
        />
        <RidewatchList
          series={"ghost"}
          watchJson={ridewatchJson.series.ghost}
          katakana={this.props.katakana}
          ridewatchClick={this.props.ridewatchClick}
        />
        <RidewatchList
          series={"drive"}
          watchJson={ridewatchJson.series.drive}
          katakana={this.props.katakana}
          ridewatchClick={this.props.ridewatchClick}
        />
        <RidewatchList
          series={"gaim"}
          watchJson={ridewatchJson.series.gaim}
          katakana={this.props.katakana}
          ridewatchClick={this.props.ridewatchClick}
        />
        <RidewatchList
          series={"wizard"}
          watchJson={ridewatchJson.series.wizard}
          katakana={this.props.katakana}
          ridewatchClick={this.props.ridewatchClick}
        />
        <RidewatchList
          series={"fourze"}
          watchJson={ridewatchJson.series.fourze}
          katakana={this.props.katakana}
          ridewatchClick={this.props.ridewatchClick}
        />
        <RidewatchList
          series={"ooo"}
          watchJson={ridewatchJson.series.ooo}
          katakana={this.props.katakana}
          ridewatchClick={this.props.ridewatchClick}
        />
        <RidewatchList
          series={"w"}
          watchJson={ridewatchJson.series.w}
          katakana={this.props.katakana}
          ridewatchClick={this.props.ridewatchClick}
        />
        <RidewatchList
          series={"decade"}
          watchJson={ridewatchJson.series.decade}
          katakana={this.props.katakana}
          ridewatchClick={this.props.ridewatchClick}
        />
        <RidewatchList
          series={"kiva"}
          watchJson={ridewatchJson.series.kiva}
          katakana={this.props.katakana}
          ridewatchClick={this.props.ridewatchClick}
        />
        <RidewatchList
          series={"deno"}
          watchJson={ridewatchJson.series.deno}
          katakana={this.props.katakana}
          ridewatchClick={this.props.ridewatchClick}
        />
        <RidewatchList
          series={"kabuto"}
          watchJson={ridewatchJson.series.kabuto}
          katakana={this.props.katakana}
          ridewatchClick={this.props.ridewatchClick}
        />
        <RidewatchList
          series={"hibiki"}
          watchJson={ridewatchJson.series.hibiki}
          katakana={this.props.katakana}
          ridewatchClick={this.props.ridewatchClick}
        />
        <RidewatchList
          series={"blade"}
          watchJson={ridewatchJson.series.blade}
          katakana={this.props.katakana}
          ridewatchClick={this.props.ridewatchClick}
        />
        <RidewatchList
          series={"faiz"}
          watchJson={ridewatchJson.series.faiz}
          katakana={this.props.katakana}
          ridewatchClick={this.props.ridewatchClick}
        />
        <RidewatchList
          series={"ryuki"}
          watchJson={ridewatchJson.series.ryuki}
          katakana={this.props.katakana}
          ridewatchClick={this.props.ridewatchClick}
        />
        <RidewatchList
          series={"agito"}
          watchJson={ridewatchJson.series.agito}
          katakana={this.props.katakana}
          ridewatchClick={this.props.ridewatchClick}
        />
        <RidewatchList
          series={"kuuga"}
          watchJson={ridewatchJson.series.kuuga}
          katakana={this.props.katakana}
          ridewatchClick={this.props.ridewatchClick}
        />
        <RidewatchList
          series={"another"}
          watchJson={ridewatchJson.series.another}
          katakana={this.props.katakana}
          ridewatchClick={this.props.ridewatchClick}
        />
        <RidewatchList
          series={"misc"}
          watchJson={ridewatchJson.series.misc}
          katakana={this.props.katakana}
          ridewatchClick={this.props.ridewatchClick}
        />
      </div>
    );
  }
}

export default Checklist;
