export class Point {
  constructor(readonly x: number,
              readonly y: number
  ) { }
}

export function manhattanDistance(a: Point, b: Point): number {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}
