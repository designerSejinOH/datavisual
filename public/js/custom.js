let cor;
let ncor;
let care;

$.get(
  "https://datacook.org/api/open/dishes?id=4384&token=SK6250UN3SUWvTEWKwOb81225",
  function (data, status) {
    let json = data;
    let obj = JSON.parse(json);
    cor = obj.seo_cor;
    ncor = obj.seo_ncor;
    care = obj.seo_care;
  }
);

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);
  textSize(32);
  fill(0);
  text("서울시코로나 " + cor, 10, 30);
  fill(0, 102, 153);
  text("추가확진자 " + ncor, 10, 60);
  fill(0, 102, 153, 51);
  text("현재 치료중 " + care, 10, 90);
  console.log(cor, ncor, care);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
