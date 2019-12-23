export enum Cell {
  Alive = 1,
  Dead = 0
}

class Grid {
  columns: number;
  rows: number;
  private cells: Cell[];

  constructor(columns: number, rows: number) {
    this.columns = columns;
    this.rows = rows;
    this.cells = new Array(this.columns * this.rows).fill(0);
  }

  getCell(x:number, y: number) {
    if (x < 0) {
      x += this.columns;
    } else if (x > this.columns - 1) {
      x -= this.columns;
    }

    if (y < 0) {
      y += this.rows;
    } else if (y > this.rows - 1) {
      y -= this.rows;
    }
    const idx = y * this.columns + x;
    return this.cells[idx];
  }

  getNeighborCellsAliveCount(x: number, y: number) {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (!(i === 0 && j === 0)) {
          count += this.getCell(x + j, y + i);
        }
      }
    }
    return count;
  }

  nextTick() {
    const newCells = new Array(this.columns * this.rows).fill(0);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        const a = this.getNeighborCellsAliveCount(i, j);
        console.log(a)
      }
    }
  }
}

export default Grid;
