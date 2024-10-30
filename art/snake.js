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
let moveDown = true;

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
  if (millis() - startTime > 10000) {
    noLoop();
    return;
  }

  rect(x, y, 100, 100);

  if (moveDown) {
    y += 100 + random(-10, 10);
    if (y > height - 100) {
      y = 100;
      x += 100 + random(-10, 10);
    }
  } else {
    x += 100 + random(-10, 10);
    if (x > width - 100) {
      x = 100;
      y += 100 + random(-10, 10);
    }
  }

  moveDown = !moveDown;
}