import { Cell } from './cell';

export const makeHeuristicFunction = (
  obstacles: boolean[],
  heuristic: (a: Cell, b: Cell) => number,
) =>
  (a: Cell, b: Cell) =>
    obstacles[a.linearPosition] || obstacles[b.linearPosition]
      ? 0
      : heuristic(a, b);


export const makeObstacleList = (...cells: Cell[]) => {
  let obstacles: boolean[] = [];
  cells.forEach((cell) => {
    obstacles[cell.linearPosition] = true;
  });
  return obstacles;
}

export const manhattanDistance = (a: Cell, b: Cell) =>
  Math.abs(a.row - b.row) + Math.abs(a.col - b.col);

