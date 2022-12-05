let city;
let lvl;
let ppMax;
let ppMin;
let covid;
let nCovid;
let pp;
let inpp;

$.get(
  "https://datacook.org/api/open/dishes?id=4388&token=SK6250UN3SUWvTEWKwOb81225",
  function (data, status) {
    let json = data;
    let obj = JSON.parse(json);
    city = obj.city;
    lvl = obj.lvl;
    pp = obj.pp;
    inpp = obj.inpp;
    ppMax = obj.ppMax;
    ppMin = obj.ppMin;
    covid = obj.covid;
    nCovid = obj.nCovid;
  }
);

let myFont;

function preload() {
  myFont = loadFont("js/Galmuri9.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textFont(myFont);
  createEasyCam();
  document.oncontextmenu = () => false;
}

function draw() {
  let w = width;
  let h = height;

  background(200);
  push();
  translate(-w / 7, -h / 7, 0);
  let fontSize = w / 50;
  let lineHeight = h / 50;
  textSize(fontSize);
  fill(0);
  text(" 도시 : " + city, lineHeight, fontSize + lineHeight);
  fill(0, 102, 153, 255);
  text(" 인구밀집 : " + lvl, lineHeight, (fontSize + lineHeight) * 2);
  fill(0, 102, 153, 180);
  text(" 실시간인구최대 : " + ppMax, lineHeight, (fontSize + lineHeight) * 3);
  fill(0, 102, 153, 150);
  text(" 실시간인구최소 : " + ppMin, lineHeight, (fontSize + lineHeight) * 4);
  fill(0, 102, 153, 120);
  text(" 코로나확진자 : " + covid, lineHeight, (fontSize + lineHeight) * 5);
  fill(0, 102, 153, 90);
  text(
    " 코로나추가확진자 : " + nCovid,
    lineHeight,
    (fontSize + lineHeight) * 6
  );
  text(" 총 생활인구 : " + pp, lineHeight, (fontSize + lineHeight) * 7);
  text(" 내국인 생활인구 : " + inpp, lineHeight, (fontSize + lineHeight) * 8);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
