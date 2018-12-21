import { Cell, WeightedGrid } from './grid';
import { AStarData, AStarGraph } from './a-star';
import { manhattanDistance } from './heuristic-function';

export class AStarGrid extends WeightedGrid implements AStarGraph<Cell> {
  data: AStarData<Cell>[] = [];

  constructor(readonly rows: number, readonly columns: number) {
    super(rows, columns, manhattanDistance, manhattanDistance);

    for (let row = this.minRow; row < rows; ++row) {
      for (let col = this.minCol; col < columns; ++col) {
        this.data[this.makeIndex(row, col)] = new AStarData<Cell>();
      }
    }
  }

  getNode(node: Cell): Cell {
    return this.nodes[this.getIndex(node)];
  }

  getData(node: Cell): AStarData<Cell> {
    return this.data[this.getIndex(node)];
  }
}