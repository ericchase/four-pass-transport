import { Cell } from './grid';
import { aStar } from './a-star';
import { AStarGrid } from './a-star-grid';
import { PathSet } from './pathset';


export function getMinimalDistancePath(pathSet: PathSet) {
  let board: AStarGrid = new AStarGrid(10, 10);

  for (let pair of pathSet.nextEndpointPair()) {
    let path: Cell[] = aStar(pair[0], pair[1], board);
    pathSet.storeNextPath(path);
    board.setObstacles(path);
  }

  return pathSet.getCombinedPaths();
}
