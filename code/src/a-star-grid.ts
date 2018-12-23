import { Cell, WeightedGrid } from './grid';
import { AStarData, AStarGraph } from './a-star';
import { manhattanDistance } from './heuristic-function';

export class AStarGrid extends WeightedGrid implements AStarGraph<Cell> {
  data: AStarData<Cell>[] = [];

  constructor(readonly rows: number, readonly columns: number) {
    super(rows, columns, manhattanDistance, manhattanDistance);
    this.clearData();
  }

  clearData(): void {
    for (let row = this.minRow; row < this.rows; ++row) {
      for (let col = this.minCol; col < this.columns; ++col) {
        this.data[this.makeIndex(row, col)] = new AStarData<Cell>();
      }
    }
  }

  getData(node: Cell): AStarData<Cell> {
    return this.data[this.getIndex(node)];
  }

  getNode(node: Cell): Cell {
    return this.nodes[this.getIndex(node)];
  }

  getEndpoint(node: Cell): Cell {
    node = this.getNode(node);
    if (node !== undefined)
      this.clearObstacles([node]);
    return node;
  }
}