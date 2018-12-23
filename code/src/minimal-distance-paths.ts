import { Cell } from './grid';
import { aStar } from './a-star';
import { AStarGrid } from './a-star-grid';
import { PathSet } from './pathset';
import { MinHeap } from './min-heap';
import { threeAryPermutationGenerator } from './permutation-function';


export function getMinimalDistancePath(pathSet: PathSet) {
  let board: AStarGrid = new AStarGrid(10, 10);
  board.setObstacles(pathSet.endpoints);

  for (let pair of pathSet.nextEndpointPair()) {
    let path: Cell[] = aStar(pair[0], pair[1], board);
    pathSet.storeNextPath(path);
    board.setObstacles(path);
  }

  return pathSet.getCombinedPaths();
}

export function getAllMinimalDistancePaths(endpoints: Cell[]): MinHeap<Cell[]> {
  let minHeap = new MinHeap<Cell[]>((pathA: Cell[], pathB: Cell[]) => {return pathA.length - pathB.length;});

  for (let order of threeAryPermutationGenerator<number>(0, 1, 2)) {
    let pathSet: PathSet = new PathSet(endpoints, order);
    minHeap.push(getMinimalDistancePath(pathSet));
  }

  return minHeap;
}
