import { expect } from 'chai';
import 'mocha';

import { Cell } from '../src/cell';
import { Grid } from "../src/grid";
import { aStar } from "../src/a-star";

describe('A Star', function () {
  describe('aStar', function () {
    it('should return [] for aStar((0,0), (-1,-1))', () => {
      expect(Grid.cleanCells(aStar(new Cell(0, 0), new Cell(-1, -1), new Grid())))
        .to.be.empty;
    });
    it('should return [(0,0)] for aStar((0,0), (0,0))', () => {
      expect(Grid.cleanCells(aStar(new Cell(0, 0), new Cell(0, 0), new Grid())))
        .to.deep.equal([new Cell(0, 0)]);
    });
    it('should return [(1,1),(1,2),(1,3)] for aStar((1,1), (1,3))', () => {
      expect(Grid.cleanCells(aStar(new Cell(1, 1), new Cell(1, 3), new Grid())))
        .to.deep.equal([new Cell(1, 1), new Cell(1, 2), new Cell(1, 3)]);
    });
  });
});
