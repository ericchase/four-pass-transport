import { cell } from './cell';

export function make_heuristic_function(
  obstacles: boolean[],
  heuristic: (a: cell, b: cell) => number
): (a: cell, b: cell) => number {
  return function (a: cell, b: cell): number {
    if (obstacles[a.rc()] || obstacles[b.rc()]) {
      return 0;
    }
    return heuristic(a, b);
  }
}

export function make_obstacle_list(...cells: cell[]): boolean[] {
  let obstacles: boolean[] = [];
  for (let c of cells) {
    obstacles[c.rc()] = true;
  }
  return obstacles;
}

export function manhattan_distance(a: cell, b: cell): number {
  return Math.abs(a.r - b.r) + Math.abs(a.c - b.c);
}
