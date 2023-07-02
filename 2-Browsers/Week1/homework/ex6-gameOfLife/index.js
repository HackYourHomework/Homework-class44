'use strict';

const CELL_SIZE = 10;
const NUM_COLUMNS = 75;
const NUM_ROWS = 40;

function createCell(x, y) {
  const alive = Math.random() > 0.5;
  return {
    x,
    y,
    alive,
  };
}

function createGame(context, numRows, numColumns) {
  const grid = [];

  function createGrid() {
    for (let y = 0; y < numRows; y++) {
      const row = [];
      for (let x = 0; x < numColumns; x++) {
        const cell = createCell(x, y);
        row.push(cell);
      }
      grid.push(row);
    }
  }

  function forEachCell(callback) {
    grid.forEach((row) => {
      row.forEach((cell) => callback(cell));
    });
  }

  function drawCell(cell) {
    context.fillStyle = '#303030';
    context.fillRect(
      cell.x * CELL_SIZE,
      cell.y * CELL_SIZE,
      CELL_SIZE,
      CELL_SIZE
    );

    if (cell.alive) {
      // Draw flower shape
      const centerX = cell.x * CELL_SIZE + CELL_SIZE / 2;
      const centerY = cell.y * CELL_SIZE + CELL_SIZE / 2;
      const radius = CELL_SIZE / 2 - 2;

      // Draw petals
      for (let angle = 0; angle < 360; angle += 45) {
        const radians = (angle * Math.PI) / 180;
        const petalX = centerX + radius * Math.cos(radians);
        const petalY = centerY + radius * Math.sin(radians);

        context.beginPath();
        context.moveTo(centerX, centerY);
        context.lineTo(petalX, petalY);
        context.strokeStyle = `rgb(24, 215, 236)`;
        context.lineWidth = 2;
        context.stroke();
      }

      // Draw center
      context.beginPath();
      context.arc(centerX, centerY, radius / 3, 0, 2 * Math.PI);
      context.fillStyle = `rgb(24, 215, 236)`;
      context.fill();
    }
  }

  function isAlive(x, y) {
    if (x < 0 || x >= numColumns || y < 0 || y >= numRows) {
      return 0;
    }

    return grid[y][x].alive ? 1 : 0;
  }

  function countLivingNeighbors(cell) {
    const { x, y } = cell;
    return (
      isAlive(x - 1, y - 1) +
      isAlive(x, y - 1) +
      isAlive(x + 1, y - 1) +
      isAlive(x - 1, y) +
      isAlive(x + 1, y) +
      isAlive(x - 1, y + 1) +
      isAlive(x, y + 1) +
      isAlive(x + 1, y + 1)
    );
  }

  function updateGrid() {
    forEachCell((cell) => {
      const numAlive = countLivingNeighbors(cell);

      if (numAlive === 2) {
        cell.nextAlive = cell.alive;
      } else if (numAlive === 3) {
        cell.nextAlive = true;
      } else {
        cell.nextAlive = false;
      }
    });

    forEachCell((cell) => {
      cell.alive = cell.nextAlive;
    });
  }

  function renderGrid() {
    forEachCell(drawCell);
  }

  function gameLoop() {
    updateGrid();
    renderGrid();

    setTimeout(() => {
      window.requestAnimationFrame(gameLoop);
    }, 200);
  }

  function start() {
    createGrid();
    renderGrid();
    window.requestAnimationFrame(gameLoop);
  }

  return { grid, updateGrid, start };
}

function main() {
  const canvas = document.getElementById('canvas');
  canvas.height = NUM_ROWS * CELL_SIZE;
  canvas.width = NUM_COLUMNS * CELL_SIZE;
  const context = canvas.getContext('2d');
  const { start } = createGame(context, NUM_ROWS, NUM_COLUMNS);
  start();
}

try {
  window.addEventListener('load', main);
} catch {
  // ignore if running in node with jest
}

module.exports = createGame;
