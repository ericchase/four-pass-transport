import { Cell } from './grid';
import { aStar } from './a-star';
import { AStarGrid } from './a-star-grid';
import { makePairs } from './permutation-function';

export class PathSet {
  readonly pairs: Cell[][];
  readonly paths: Cell[][] = [];

  constructor(readonly endpoints: Cell[], readonly order: number[]) {
    this.pairs = makePairs(endpoints);
  }

  * nextEndpointPair() {
    yield this.pairs[this.order[0]];
    yield this.pairs[this.order[1]];
    yield this.pairs[this.order[2]];
  };

  storeNextPath(path: Cell[]): void {
    if (this.paths.length === 3)
      throw new Error('PathSet.storeNextPath: trying to store more than 3 paths');
    this.paths.push(path);
  }

  getCombinedPaths(): Cell[] {
    // swap each index with its value in order
    let order: number[] = [];
    order[this.order[0]] = 0;
    order[this.order[1]] = 1;
    order[this.order[2]] = 2;

    return this.paths[order[0]]
      .concat(this.paths[order[1]].slice(1))
      .concat(this.paths[order[2]].slice(1));
  }
}

export function getMinimalDistancePath(pathSet: PathSet) {
  let board: AStarGrid = new AStarGrid(10, 10);

  for (let pair of pathSet.nextEndpointPair()) {
    let path: Cell[] = aStar(pair[0], pair[1], board);
    pathSet.storeNextPath(path);
    board.setObstacles(path);
  }

  return pathSet.getCombinedPaths();
}
