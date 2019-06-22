
function importAll(r) {
  return r.keys().map(r);
}

const ridewatchArray = importAll(require.context('./ridewatch', false, /\.(png|jpe?g|svg)$/));

var rLen = ridewatchArray.length;


var zio = [];

for (var i = rLen-1; i > 127; i--) {
  console.log(ridewatchArray)
  zio.push(ridewatchArray[i]);
}


var build = [];

for (var b = rLen-18; b > 115; b--) {
  build.push(ridewatchArray[b]);
}

var exaid = [];

for (var h = rLen-101; h > 1; h--) {
  exaid.push(ridewatchArray[h]);
}

var ghost = [];

var drive = [];

var gaim = [];

var wizard = [];

var fourze = [];

var ooo = [];

var w = [];

var decade = [];

var kiva = [];

var deno = [];

var kabuto = [];

var hibiki = [];

var blade = [];

var faiz = [];

var ryuki = [];

var agito = [];

var kuuga = [];

var misc = [];

module.exports = {
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
};
