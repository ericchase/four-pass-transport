import { Cell } from './cell';

export function make_heuristic_function(
  obstacles: boolean[],
  heuristic: (a: Cell, b: Cell) => number
): (a: Cell, b: Cell) => number {
  return function (a: Cell, b: Cell): number {
    if (obstacles[a.rc()] || obstacles[b.rc()]) {
      return 0;
    }
    return heuristic(a, b);
  }
}

export function make_obstacle_list(...cells: Cell[]): boolean[] {
  let obstacles: boolean[] = [];
  for (let c of cells) {
    obstacles[c.rc()] = true;
  }
  return obstacles;
}

export function manhattan_distance(a: Cell, b: Cell): number {
  return Math.abs(a.r - b.r) + Math.abs(a.c - b.c);
}
