let maze = [
  [3, 8, 2],
  [4, 1, 7],
  [6, 5, 9]
];
let mazeSize = 3;
let cellSize = 100;
let playerX = 0;
let playerY = 0;
let totalSum = 0;

function setup() {
  createCanvas(mazeSize * cellSize, mazeSize * cellSize);
  totalSum = maze[playerY][playerX]; // Mulai dari angka awal di posisi (0, 0)
}

function draw() {
  background(255);
  drawMaze();
  drawPlayer();
  drawTotalSum();
}

function drawMaze() {
  for (let i = 0; i < mazeSize; i++) {
    for (let j = 0; j < mazeSize; j++) {
      let x = j * cellSize;
      let y = i * cellSize;
      stroke(0);
      noFill();
      rect(x, y, cellSize, cellSize);
      fill(0);
      textAlign(CENTER, CENTER);
      textSize(32);
      text(maze[i][j], x + cellSize / 2, y + cellSize / 2);
    }
  }
}

function drawPlayer() {
  fill(255, 0, 0);
  ellipse(playerX * cellSize + cellSize / 2, playerY * cellSize + cellSize / 2, cellSize / 2);
}

function drawTotalSum() {
  fill(0);
  textSize(24);
  textAlign(LEFT, TOP);
  text("Total Sum: " + totalSum, 10, 10);
}

function keyPressed() {
  let nextX = playerX;
  let nextY = playerY;

  if (keyCode === UP_ARROW && playerY > 0) {
    nextY--;
  } else if (keyCode === DOWN_ARROW && playerY < mazeSize - 1) {
    nextY++;
  } else if (keyCode === LEFT_ARROW && playerX > 0) {
    nextX--;
  } else if (keyCode === RIGHT_ARROW && playerX < mazeSize - 1) {
    nextX++;
  }

  if (nextX !== playerX || nextY !== playerY) {
    let currentNum = maze[playerY][playerX];
    let nextNum = maze[nextY][nextX];
    
    totalSum += nextNum;
    playerX = nextX;
    playerY = nextY;
  }
}