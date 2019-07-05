import React from "react";
import RidewatchList from "./RidewatchList.jsx";

import ridewatchJson from "./ridewatchdata.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <RidewatchList series={"zio"} watchJson={ridewatchJson.series.zio} />
      <RidewatchList series={"build"} watchJson={ridewatchJson.series.build} />
      <RidewatchList series={"exaid"} watchJson={ridewatchJson.series.exaid} />
      <RidewatchList series={"ghost"} watchJson={ridewatchJson.series.ghost} />
      <RidewatchList series={"drive"} watchJson={ridewatchJson.series.drive} />
    </div>
  );
}

export default App;
