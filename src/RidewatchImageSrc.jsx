function importAll(r) {
  return r.keys().map(r);
}

const ridewatchArray = importAll(
  require.context("./ridewatch", false, /\.(png|jpe?g|svg)$/)
);

var rLen = ridewatchArray.length;


var zio = [];

for (var a = rLen - 1; a > 127; a--) {
  zio.push(ridewatchArray[a]);
}

var build = [];

for (var b = a; b > 111; b--) {
  build.push(ridewatchArray[b]);
}

var exaid = [];

for (var c = rLen - 34; c > 96; c--) {
  exaid.push(ridewatchArray[c]);
}

var ghost = [];

for (var d = rLen - 49; d > 89; d--) {
  ghost.push(ridewatchArray[d]);
}

var drive = [];

for (var e = rLen - 56; e > 82; e--) {
  drive.push(ridewatchArray[e]);
}

var gaim = [];

for (var f = rLen - 63; f > 75; f--) {
  gaim.push(ridewatchArray[f]);
}

var wizard = [];

for (var g = rLen - 71; g > 69; g--) {
  wizard.push(ridewatchArray[g]);
}

var fourze = [];

for (var h = rLen - 76; h > 65; h--) {
  fourze.push(ridewatchArray[h]);
}

var ooo = [];

for (var i = rLen - 80; i > 61; i--) {
  ooo.push(ridewatchArray[i]);
}

var w = [];

for (var j = rLen - 84; j > 53; j--) {
  w.push(ridewatchArray[j]);
}

var decade = [];

for (var k = rLen - 92; k > 49; k--) {
  decade.push(ridewatchArray[k]);
}

var kiva = [];

for (var l = rLen - 96; l > 45; l--) {
  kiva.push(ridewatchArray[l]);
}

var deno = [];

for (var m = rLen - 100; m > 41; m--) {
  deno.push(ridewatchArray[m]);
}

var kabuto = [];

for (var n = rLen - 104; n > 38; n--) {
  kabuto.push(ridewatchArray[n]);
}

var hibiki = [];

for (var o = rLen - 107; o > 35; o--) {
  hibiki.push(ridewatchArray[o]);
}

var blade = [];

for (var p = rLen - 110; p > 31; p--) {
  blade.push(ridewatchArray[p]);
}

var faiz = [];

for (var q = rLen - 114; q > 26; q--) {
  faiz.push(ridewatchArray[q]);
}

var ryuki = [];

for (var r = rLen - 119; r > 19; r--) {
  ryuki.push(ridewatchArray[r]);
}

var agito = [];

for (var s = rLen - 126; s > 15; s--) {
  agito.push(ridewatchArray[s]);
}

var kuuga = [];

for (var t = rLen - 130; t > 12; t--) {
  kuuga.push(ridewatchArray[t]);
}

var misc = [];

for (var u = rLen - 133; u > 0; u--) {
  misc.push(ridewatchArray[u]);
}

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
