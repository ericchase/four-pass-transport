import { Cell } from './grid';
import { aStar } from './a-star';
import { AStarGrid } from './a-star-grid';
import { PathSet } from './pathset';
import { MinHeap } from './min-heap';
import { threeAryPermutationGenerator } from './permutation-function';


export function getMinimalDistancePath(pathSet: PathSet): Cell[] {
  let board: AStarGrid = new AStarGrid(10, 10);
  board.setObstacles(pathSet.endpoints);

  for (let pair of pathSet.nextEndpointPair()) {
    let path: Cell[] = aStar(pair[0], pair[1], board);
    if (path.length === 0)
      return [];
    pathSet.storeNextPath(path);
    board.setObstacles(path);
  }

  return pathSet.getCombinedPaths();
}

export function getAllMinimalDistancePaths(endpoints: Cell[]): MinHeap<Cell[]> {
  let minHeap: MinHeap<Cell[]> = new MinHeap<Cell[]>((pathA: Cell[], pathB: Cell[]) => {return pathA.length - pathB.length;});

  for (let order of threeAryPermutationGenerator<number>(0, 1, 2)) {
    let pathSet: PathSet = new PathSet(endpoints, order);
    let path: Cell[] = getMinimalDistancePath(pathSet);
    if (path.length === 0)
      continue;
    minHeap.push(path);
  }

  return minHeap;
}
