import { expect } from 'chai';
import 'mocha';

import { Grid } from "../src/grid";
import { Cell } from "../src/cell";

let grid: Grid = new Grid();

describe('Grid', function () {
  describe('getNeighbors(Cell)', function () {
    it('should return [(0,1),(1,0),(1,2),(2,1)] for (1,1)', function () {
      expect(Grid.cleanCells(grid.getNeighbors(new Cell(2, 2))))
        .to.include.deep.members(
        [
          new Cell(1, 2),
          new Cell(3, 2),
          new Cell(2, 1),
          new Cell(2, 3)
        ]);
    });
  });
});