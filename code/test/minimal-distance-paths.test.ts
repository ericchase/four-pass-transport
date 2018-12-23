import { expect } from 'chai';
import 'mocha';

import { Cell } from '../src/grid';
import { getAllMinimalDistancePaths, getMinimalDistancePath } from '../src/minimal-distance-paths';
import { AStarGrid } from '../src/a-star-grid';
import { PathSet } from '../src/pathset';
import { MinHeap } from '../src/min-heap';


describe('Minimal Distance Paths', function () {
  describe('getMinimalDistancePath', function () {
    let pathSet: PathSet;
    let board: AStarGrid;

    beforeEach('prepare pathSet and board', () => {
      pathSet = new PathSet(
        [new Cell(0, 0),
         new Cell(1, 1),
         new Cell(2, 2),
         new Cell(3, 3)], [2, 0, 1]);
      board = new AStarGrid(10, 10);
    });

    it('should return a path of length 7', () => {
      expect(getMinimalDistancePath(pathSet))
        .to.be.length(7);
    });
    it('should return a list of unique cells', () => {
      expect(getMinimalDistancePath(pathSet))
        .to.include.deep.members([new Cell(0, 0),
                                  new Cell(1, 1),
                                  new Cell(2, 2),
                                  new Cell(3, 3)]);
    });
  });

  describe('getAllMinimalDistancePaths', function () {

    let minHeap: MinHeap<Cell[]>;

    before('call getAllMinimalDistancePaths', () => {
      minHeap = getAllMinimalDistancePaths([new Cell(2, 2),
                                            new Cell(5, 5),
                                            new Cell(5, 2),
                                            new Cell(2, 5)]);
    });

    it('should return a min-heap of 6 minimal distance paths', () => {
      expect(minHeap.size)
        .to.equal(6);
    });
    it('should return a min-heap with a 20 length path on top', () => {
      expect(minHeap.top)
        .to.be.length(20);
    });
  });
});
