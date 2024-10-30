let config;
let startTime;

function preload() {
    config = loadJSON('config.json');
}

function keyPressed() {
  if (key.toLowerCase() == 's') {
    saveCanvas('snake', 'png');
  }
}

let x = 700;
let y = 1100;

function setup() {
  // Frame 50x70 cm
  createCanvas(5906, 8268);
  background(config.color.white);
  stroke(config.color.black);

  // Border around the background. To be deleted later
  strokeWeight(10);
  noFill();
  rect(1, 1, width, height);
  
  startTime = millis();
}

function draw() {
  // 5000 is 5 seconds 10000 is 10 seconds etc
  if (millis() - startTime > 3000) {
    noLoop();
    return;
  }

  rect(x, y, 100, 100);
  x += random(-100, 100);
  y += random(-100, 100);
}