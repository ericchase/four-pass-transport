import { expect } from 'chai';
import 'mocha';

import { Cell } from '../src/grid';
import { aStar } from '../src/a-star';
import { AStarGrid } from '../src/a-star-grid';

describe('A Star', function () {
  let grid: AStarGrid;

  beforeEach('make 10x10 AStarGrid', () => {
    grid = new AStarGrid(10, 10);
  });

  describe('aStar', function () {
    it('should return empty array when cell is out of bounds', () => {
      expect(aStar(new Cell(0, 0),
                   new Cell(-1, -1),
                   grid))
        .to.be.empty;
    });
    it('should return [(0,0)] for aStar((0,0), (0,0))', () => {
      expect(aStar(new Cell(0, 0),
                   new Cell(0, 0),
                   grid))
        .to.deep.equal([new Cell(0, 0)]);
    });
    it('should return [(1,1),(1,2)] for aStar((1,1), (1,2))', () => {
      expect(aStar(new Cell(1, 1),
                   new Cell(1, 2),
                   grid))
        .to.deep.equal([new Cell(1, 1),
                        new Cell(1, 2)]);
    });
    it('should return [(1,1),(1,2),(1,3)] for aStar((1,1), (1,3))', () => {
      expect(aStar(new Cell(1, 1),
                   new Cell(1, 3),
                   grid))
        .to.be.length(3);
    });
    it('should return [(1,1),(1,2),(1,3)] for aStar((1,1), (1,3))', () => {
      expect(aStar(new Cell(1, 1),
                   new Cell(3, 3),
                   grid))
        .to.be.length(5);
    });
    it('should not find a path when surrounded by obstacles', () => {
      grid.setObstacles([new Cell(0, 1), new Cell(1, 0), new Cell(1, 2), new Cell(2, 1)]);
      expect(aStar(new Cell(1, 1),
                   new Cell(3, 3),
                   grid))
        .to.be.empty;
    });
    it('should update node when finding shorter path', () => {
      grid.setObstacles([new Cell(2, 2), new Cell(3, 2)]);
      expect(aStar(new Cell(2, 0),
                   new Cell(2, 3),
                   grid))
        .to.be.length(6);
    });
  });
});
