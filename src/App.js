import React from "react";
import RidewatchList from "./RidewatchList.jsx";
import {
  zio,
  build,
  exaid,
  ghost,
  drive,
  gaim,
  wizard,
  fourze,
  ooo,
  w,
  decade,
  kiva,
  deno,
  kabuto,
  hibiki,
  blade,
  faiz,
  ryuki,
  agito,
  kuuga,
  misc
} from "./RidewatchImageSrc.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <RidewatchList series={"zio"} imgsrc={zio} />
      <RidewatchList series={"build"} imgsrc={build} />
      <RidewatchList series={"exaid"} imgsrc={exaid} />
      <RidewatchList series={"ghost"} imgsrc={ghost} />
      <RidewatchList series={"drive"} imgsrc={drive} />
      <RidewatchList series={"gaim"} imgsrc={gaim} />
      <RidewatchList series={"wizard"} imgsrc={wizard} />
      <RidewatchList series={"fourze"} imgsrc={fourze} />
      <RidewatchList series={"ooo"} imgsrc={ooo} />
      <RidewatchList series={"w"} imgsrc={w} />
      <RidewatchList series={"decade"} imgsrc={decade} />
      <RidewatchList series={"kiva"} imgsrc={kiva} />
      <RidewatchList series={"deno"} imgsrc={deno} />
      <RidewatchList series={"kabuto"} imgsrc={kabuto} />
      <RidewatchList series={"hibiki"} imgsrc={hibiki} />
      <RidewatchList series={"blade"} imgsrc={blade} />
      <RidewatchList series={"faiz"} imgsrc={faiz} />
      <RidewatchList series={"ryuki"} imgsrc={ryuki} />
      <RidewatchList series={"agito"} imgsrc={agito} />
      <RidewatchList series={"kuuga"} imgsrc={kuuga} />
      <RidewatchList series={"misc"} imgsrc={misc} />
    </div>
  );
}

export default App;
