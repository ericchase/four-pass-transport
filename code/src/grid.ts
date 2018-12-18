import { Cell } from "./cell";
import { Graph } from "./a-star";
import { manhattanDistance } from "./heuristic-function";

export class Grid implements Graph<Cell> {
  maxRow: number = 9;
  maxCol: number = 9;
  nodes: Map<number, Cell> = new Map();

  getCost(nodeA: Cell, nodeB: Cell): number {
    return manhattanDistance(nodeA, nodeB);
  }

  getHeuristic(nodeA: Cell, nodeB: Cell): number {
    return manhattanDistance(nodeA, nodeB);
  }

  getMemoizedNode(node: Cell): Cell {
    if (!this.nodes.has(node.linearPosition))
      this.nodes.set(node.linearPosition, node);
    return <Cell>this.nodes.get(node.linearPosition);
  }

  getNeighbors(node: Cell): Cell[] {
    let neighbors: Cell[] = [];

    if (node.row > 0)
      neighbors.push(this.getMemoizedNode(new Cell(node.row - 1, node.col)));
    if (node.row < this.maxRow)
      neighbors.push(this.getMemoizedNode(new Cell(node.row + 1, node.col)));
    if (node.col > 0)
      neighbors.push(this.getMemoizedNode(new Cell(node.row, node.col - 1)));
    if (node.col < this.maxCol)
      neighbors.push(this.getMemoizedNode(new Cell(node.row, node.col + 1)));

    return neighbors;
  }

  static cleanCells(nodes: Cell[]): Cell[] {
    let clean_nodes: Cell[] = [];
    for (let i = 0; i < nodes.length; ++i) {
      clean_nodes[i] = new Cell(nodes[i].row, nodes[i].col);
    }
    return clean_nodes;
  }
}
