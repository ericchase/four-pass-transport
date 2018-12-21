export interface Point {
  getX(): number;
  getY(): number;
}

export function manhattanDistance(a: Point, b: Point): number {
  return Math.abs(a.getX() - b.getX()) + Math.abs(a.getY() - b.getY());
}
