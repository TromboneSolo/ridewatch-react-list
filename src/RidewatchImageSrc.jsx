
function importAll(r) {
  return r.keys().map(r);
}

const ridewatchArray = importAll(require.context('./ridewatch', false, /\.(png|jpe?g|svg)$/));

var rLen = ridewatchArray.length;


var zio = [];

for (var i = rLen-1; i > 0; i--) {
  zio.push(ridewatchArray[i]);
}


var build = [];

var exaid = [];

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
