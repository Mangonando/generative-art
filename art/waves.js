let grid = [];
let cols = 15;
let rows = 15; 
let loc = 100;
function setup() {
  createCanvas(1000, 1000);
  let rowSize = height/rows;
  let colSize = width/cols; 
  
  for (let i=0; i<cols; i++){
    grid[i] = []
    for (let j=0; j<rows; j++){
      grid[i][j] = new Cell(colSize/2+j*colSize, rowSize/2+i*rowSize, rowSize/2, j*loc+i*loc);
    }
  }
}

function draw() {
  background(225);
  for (let i=0; i<cols; i++){
    for (let j=0; j<rows; j++){
      grid[i][j].update();
      grid[i][j].display();
    }
  }
}