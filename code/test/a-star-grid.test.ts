import { expect } from 'chai';
import 'mocha';

import { Cell, Grid, WeightedGrid } from '../src/grid';
import { AStarGrid } from '../src/a-star-grid';

describe('AStarGrid', function () {
  let grid: AStarGrid;

  beforeEach('make a 10x10 grid', () => {
    grid = new AStarGrid(10, 10);
  });

  describe('constructor', function () {
    it('should fill data', function () {
      expect(grid.data)
        .to.be.an('array')
        .of.length(100);
    });
  });

  describe('getNode', function () {
    it('should return the same node object in multiple calls' +
       'for any node with the same row and column', function () {
      expect(grid.getNode(new Cell(3, 3)))
        .to.be.equal(grid.getNode(new Cell(3, 3)));
    });
    it('should return a node not equal to a new node with the' +
       'same row and column', function () {
      expect(grid.getNode(new Cell(3, 3)))
        .to.not.equal(new Cell(3, 3));
    });
  });

  describe('getData', function () {
    it('should return the same data object in multiple calls' +
       'for any node with the same row and column', function () {
      grid.getData(new Cell(3, 3)).f = 123;
      expect(grid.getData(new Cell(3, 3)).f)
        .to.equal(123);
    });
  });
});
