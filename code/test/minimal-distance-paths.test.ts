import { expect } from 'chai';
import 'mocha';

import { Cell } from '../src/grid';
import { getMinimalDistancePath } from '../src/minimal-distance-paths';
import { AStarGrid } from '../src/a-star-grid';
import { PathSet } from '../src/pathset';


describe('Minimal Distance Path', function () {
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

  describe('getMinimalDistancePath', function () {
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
});
