let config;
let startTime;

function preload() {
    config = loadJSON('config.json');
}

function keyPressed() {
  if (key.toLowerCase() == 's') {
    saveCanvas('circles', 'png');
  }
}

let x = 700;
let y = 1100;

function setup() {
  // Frame 13x18 cm
  createCanvas(1536, 2127);
  background(config.color.beige.cream);

  startTime = millis();

    // Red circle
    let x4 = x + random(-700, 700);
    let y4 = y + random(-1100, 1100);
    
    fill(config.color.red.dareDevil);
    stroke(config.color.red.dareDevil);
    ellipse(x4, y4, 900, 900);
}

function draw() {
  // 5000 is 5 seconds 10000 is 10 seconds etc
  if (millis() - startTime > 3000) {
    noLoop();
    return;
  }

  // Blue circle
  x += random(-100, 100);
  y += random(-1000, 1000);
  fill(config.color.blue.arctic);
  stroke(config.color.blue.arctic);
  ellipse(x, y, 280, 280);


  // Purple circle
  let x2 = x + random(-100, 100);
  let y2 = y + random(-1000, 1000);
  
  fill(config.color.purple.electric);
  stroke(config.color.purple.electric);
  ellipse(x2, y2, 320, 320);

  // Pink circle
  let x3 = x + random(-100, 100);
  let y3 = y + random(-1000, 1000);
  
  fill(config.color.pink.royal);
  stroke(config.color.pink.royal);
  ellipse(x3, y3, 220, 220);

  // Pink circle
  let x6 = x + random(-100, 100);
  let y6 = y + random(-1000, 1000);
  
  fill(config.color.pink.royal);
  stroke(config.color.pink.royal);
  ellipse(x6, y6, 120, 120);

  // Yellow circle
  let x7 = x + random(-100, 100);
  let y7 = y + random(-1000, 1000);
  
  fill(config.color.yellow.gold);
  stroke(config.color.yellow.gold);
  ellipse(x7, y7, 80, 80);

  // Yellow circle
  let x5 = x + random(-100, 100);
  let y5 = y + random(-1000, 1000);
  
  fill(config.color.yellow.gold);
  stroke(config.color.yellow.gold);
  ellipse(x5, y5, 120, 120);

  // Red circle
  let x4 = x + random(-100, 100);
  let y4 = y + random(-1000, 1000);
      
  fill(config.color.red.dareDevil);
  stroke(config.color.red.dareDevil);
  ellipse(x4, y4, 40, 40);

  // Red circle
  let x9 = x + random(-100, 100);
  let y9 = y + random(-1000, 1000);
      
  fill(config.color.red.dareDevil);
  stroke(config.color.red.dareDevil);
  ellipse(x9, y9, 20, 20);

  // Blue circle
  let x8 = x + random(-100, 100);
  let y8 = y + random(-1000, 1000);
  fill(config.color.blue.arctic);
  stroke(config.color.blue.arctic);
  ellipse(x8, y8, 20, 20);
}