/*© 2011-2012 Xueqiao Xu <xueqiaoxu@gmail.com>

  Permission is hereby granted, free of charge, to any person obtaining a copy of
  this software and associated documentation files (the "Software"), to deal in
  the Software without restriction, including without limitation the rights to
  use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
  of the Software, and to permit persons to whom the Software is furnished to do
  so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.*/

import { WeightedGraph } from './graph';
import { MinHeap } from './min-heap';

export class AStarData<NodeType> {
  g: number = 0;
  h: number = 0;
  f: number = 0;
  opened: boolean = false;
  closed: boolean = false;
  parent!: NodeType;
}

export interface AStarGraph<NodeType> extends WeightedGraph<NodeType> {
  clearData(): void;
  getData(node: NodeType): AStarData<NodeType>;
  getNode(node: NodeType): NodeType;
  getEndpoint(startNode: NodeType): NodeType;
}

/**
 * Find and return the the path.
 * @return {Array<Array<number>>} The path, including both start and
 *     end positions.
 */
export function aStar<NodeType>(startNode: NodeType, endNode: NodeType, graph: AStarGraph<NodeType>) {
  graph.clearData();

  startNode = graph.getEndpoint(startNode);
  endNode = graph.getEndpoint(endNode);

  if (startNode === undefined || endNode === undefined)
    return [];

  // aka. the frontier or fringe
  let openList = new MinHeap<NodeType>((cellA, cellB) => graph.getData(cellA).f - graph.getData(cellB).f);

  // set the `g` and `f` value of the start node to be 0
  graph.getData(startNode).g = 0;
  graph.getData(startNode).f = 0;

  // push the start node into the open list
  openList.push(startNode);
  graph.getData(startNode).opened = true;

  // while the open list is not empty
  while (!openList.isEmpty()) {
    // pop the position of node which has the minimum `f` value.
    let node: NodeType = openList.top;
    graph.getData(node).closed = true;
    openList.pop();

    // if reached the end position, construct the path and return it
    if (node === endNode) {
      let path: NodeType[] = [node];
      while (graph.getData(node).parent !== undefined) {
        node = graph.getData(node).parent;
        path.push(node);
      }
      return path.reverse();
    }

    // get neighbours of the current node
    let neighbors: NodeType[] = graph.neighbors(node);
    for (let i = 0, l = neighbors.length; i < l; ++i) {
      let neighbor: NodeType = neighbors[i];

      if (graph.getData(neighbor).closed) {
        continue;
      }

      // get the distance between current node and the neighbor
      // and calculate the next g score
      let new_g = graph.getData(node).g + graph.cost(node, neighbor);

      // check if the neighbor has not been inspected yet, or
      // can be reached with smaller cost from the current node
      if (!graph.getData(neighbor).opened || new_g < graph.getData(neighbor).g) {
        graph.getData(neighbor).g = new_g;
        graph.getData(neighbor).h = graph.getData(neighbor).h || graph.estimate(neighbor, endNode);
        graph.getData(neighbor).f = graph.getData(neighbor).g + graph.getData(neighbor).h;
        graph.getData(neighbor).parent = node;

        if (!graph.getData(neighbor).opened) {
          openList.push(neighbor);
          graph.getData(neighbor).opened = true;
        } else {
          // the neighbor can be reached with smaller cost.
          // Since its f value has been updated, we have to
          // update its position in the open list
          // (no idea when this would actually happen)
          openList.updateItem(neighbor);
        }
      }
    } // end for each neighbor
  } // end while not open list empty

  // fail to find the path
  return [];
}
