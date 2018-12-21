import { Graph, WeightedGraph } from './graph';
import { Point, manhattanDistance } from './heuristic-function';


export class Cell extends Point {
  constructor(readonly row: number,
              readonly col: number
  ) {
    super(col, row);
  }
}

export class Grid implements Graph<Cell> {
  readonly minRow: number = 0;
  readonly minCol: number = 0;
  readonly maxRow: number;
  readonly maxCol: number;

  readonly nodes: Cell[] = [];
  readonly obstacles: boolean[] = [];

  constructor(readonly rows: number, readonly columns: number) {
    this.maxRow = rows - 1;
    this.maxCol = columns - 1;

    for (let row = this.minRow; row < rows; ++row) {
      for (let col = this.minCol; col < columns; ++col) {
        const i = this.makeIndex(row, col);
        this.nodes[i] = new Cell(row, col);
        this.obstacles[i] = false;
      }
    }
  }

  makeIndex(row: number, col: number): number {
    return row * this.columns + col;
  };

  getIndex(node: Cell): number {
    return this.makeIndex(node.row, node.col);
  }

  addObstacles(nodes: Cell[]): void {
    nodes.forEach(node => {
      this.obstacles[this.getIndex(node)] = true;
    });
  }

  isObstacle(node: Cell): boolean {
    return this.obstacles[this.getIndex(node)];
  }

  adjacent(nodeA: Cell, nodeB: Cell): boolean {
    if (nodeA.row == nodeB.row) return Math.abs(nodeA.col - nodeB.col) <= 1;
    if (nodeA.col == nodeB.col) return Math.abs(nodeA.row - nodeB.row) <= 1;
    return false;
  }

  neighbors(node: Cell): Cell[] {
    const adjacent: Cell[] = [
      new Cell(node.row - 1, node.col), // top
      new Cell(node.row + 1, node.col), // bottom
      new Cell(node.row, node.col - 1), // left
      new Cell(node.row, node.col + 1)  // right
    ];

    let neighbors: Cell[] = [];
    if (node.row > this.minRow) if (!this.isObstacle(adjacent[0]))
      neighbors.push(this.nodes[this.getIndex(adjacent[0])]);
    if (node.row < this.maxRow) if (!this.isObstacle(adjacent[1]))
      neighbors.push(this.nodes[this.getIndex(adjacent[1])]);
    if (node.col > this.minCol) if (!this.isObstacle(adjacent[2]))
      neighbors.push(this.nodes[this.getIndex(adjacent[2])]);
    if (node.col < this.maxCol) if (!this.isObstacle(adjacent[3]))
      neighbors.push(this.nodes[this.getIndex(adjacent[3])]);
    return neighbors;
  }
}

export class WeightedGrid extends Grid implements WeightedGraph<Cell> {
  constructor(readonly rows: number, readonly columns: number,
              readonly costFunction: (nodeA: Cell, nodeB: Cell) => number,
              readonly estimateFunction: (nodeA: Cell, nodeB: Cell) => number
  ) {
    super(rows, columns);
  }

  cost(nodeA: Cell, nodeB: Cell): number {
    if (this.adjacent(nodeA, nodeB))
      return manhattanDistance(nodeA, nodeB);
    return 0;
  }

  estimate(nodeA: Cell, nodeB: Cell): number {
    if (!this.isObstacle(nodeB))
      return manhattanDistance(nodeA, nodeB);
    return 0;
  }
}
