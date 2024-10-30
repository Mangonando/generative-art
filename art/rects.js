let config;
let startTime;

let colors = [];
let currentColor;
let isBlurred = false;

function preload() {
    config = loadJSON('config.json');
}

function keyPressed() {
  if (key.toLowerCase() == 's') {
    saveCanvas('rects', 'png');
  }
}

let x = 2000;
let y = 3000;

function setup() {
  // Frame 40x50 cm
  createCanvas(4724, 5906);
  background(config.color.pink.panther);

  startTime = millis();

  colors = [
    config.color.blue.rey,
    config.color.pink.panther,
    config.color.green.dark,
    config.color.yellow.sun,
  ];

  currentColor = random(colors);
  noStroke();
}

function draw() {
//   5000 is 5 seconds 10000 is 10 seconds etc
  if (millis() - startTime > 12000) {
    noLoop();
    return;
  }

  let rectWidth = random(200, 1400);
  let rectHeight = random(200, 1400);

  x += random(-1000, 1000);
  y += random(-1000, 1000);
  x = constrain(x, 0, width - rectWidth);
  y = constrain(y, 0, height - rectHeight);

  currentColor = random(colors);
  fill(currentColor);
  rect(x, y, rectWidth, rectHeight);
  // strokeWeight(20);

  //To make the rects look like they are blending together and creates some transparency
  blendMode(EXCLUSION);
}