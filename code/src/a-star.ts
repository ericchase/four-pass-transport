/*
  © 2011-2012 Xueqiao Xu <xueqiaoxu@gmail.com>

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
  SOFTWARE.
  */

export class Node {
  g: number = 0;
  h: number = 0;
  f: number = 0;
  opened: boolean = false;
  closed: boolean = false;
  x: number = 0;
  y: number = 0;
  parent: Node | undefined;
}

export class Graph {
  static getNeighbors(node: Node): Node[] {
    return [];
  }

  static getCost(nodeA: Node, nodeB: Node): number {
    return Math.abs(nodeA.x - nodeB.x) + Math.abs(nodeA.y - nodeB.y)
  }

  static getHeuristic(nodeA: Node, nodeB: Node): number {
    return Math.abs(nodeA.x - nodeB.x) + Math.abs(nodeA.y - nodeB.y)
  }
}

/**
 * Find and return the the path.
 * @return {Array<Array<number>>} The path, including both start and
 *     end positions.
 */
export function aStar(startNode: Node, endNode: Node, graph: Graph) {
  // aka. the frontier or fringe
  let openList = new MinHeap((cellA, cellB) => cellA.f - cellB.f);

  // set the `g` and `f` value of the start node to be 0
  startNode.g = 0;
  startNode.f = 0;

  // push the start node into the open list
  openList.push(startNode);
  startNode.opened = true;

  // while the open list is not empty
  while (!openList.empty()) {
    // pop the position of node which has the minimum `f` value.
    let node: Node = openList.pop();
    node.closed = true;

    // if reached the end position, construct the path and return it
    if (node === endNode) {
      return Util.backtrace(endNode);
    }

    // get neigbours of the current node
    let neighbors: Node[] = Graph.getNeighbors(node);
    for (let i = 0, l = neighbors.length; i < l; ++i) {
      let neighbor = neighbors[i];

      if (neighbor.closed) {
        continue;
      }

      // get the distance between current node and the neighbor
      // and calculate the next g score
      let new_g = node.g + Graph.getCost(node, neighbor);

      // check if the neighbor has not been inspected yet, or
      // can be reached with smaller cost from the current node
      if (!neighbor.opened || new_g < neighbor.g) {
        neighbor.g = new_g;
        neighbor.h = neighbor.h || Graph.getHeuristic(node, endNode);
        neighbor.f = neighbor.g + neighbor.h;
        neighbor.parent = node;

        if (!neighbor.opened) {
          openList.push(neighbor);
          neighbor.opened = true;
        } else {
          // the neighbor can be reached with smaller cost.
          // Since its f value has been updated, we have to
          // update its position in the open list
          openList.updateItem(neighbor);
        }
      }
    } // end for each neighbor
  } // end while not open list empty

  // fail to find the path
  return [];
}
