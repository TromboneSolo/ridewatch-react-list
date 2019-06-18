import React from "react";
import logo from "./logo.svg";
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

function importAll(r) {
  let images = [];
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', false, '/\.png/'));


function App() {
  return (
    <div className="App">
      <RidewatchList imgsrc={images} />
      <RidewatchList imgsrc={build} />
      <RidewatchList imgsrc={exaid} />
      <RidewatchList imgsrc={ghost} />
      <RidewatchList imgsrc={drive} />
      <RidewatchList imgsrc={gaim} />
      <RidewatchList imgsrc={wizard} />
      <RidewatchList imgsrc={fourze} />
      <RidewatchList imgsrc={ooo} />
      <RidewatchList imgsrc={w} />
      <RidewatchList imgsrc={decade} />
      <RidewatchList imgsrc={kiva} />
      <RidewatchList imgsrc={deno} />
      <RidewatchList imgsrc={kabuto} />
      <RidewatchList imgsrc={hibiki} />
      <RidewatchList imgsrc={blade} />
      <RidewatchList imgsrc={faiz} />
      <RidewatchList imgsrc={ryuki} />
      <RidewatchList imgsrc={agito} />
      <RidewatchList imgsrc={kuuga} />
      <RidewatchList imgsrc={misc} />
    </div>
  );
}

export default App;
