let city;
let lvl;
let ppMax;
let ppMin;
let covid;
let nCovid;

$.get(
  "https://datacook.org/api/open/dishes?id=4388&token=SK6250UN3SUWvTEWKwOb81225",
  function (data, status) {
    let json = data;
    console.log(json);
    let obj = JSON.parse(json);
    city = obj.city;
    lvl = obj.lvl;
    ppMax = obj.ppMax;
    ppMin = obj.ppMin;
    covid = obj.covid;
    nCovid = obj.nCovid;
  }
);

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);
  let fontSize = 20;
  let lineHeight = 10;
  textSize(fontSize);
  fill(0, 102, 153, 255);
  text(" 도시 : " + city, lineHeight, fontSize + lineHeight);
  fill(0, 102, 153, 200);
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
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
