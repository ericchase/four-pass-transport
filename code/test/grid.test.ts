import { expect } from 'chai';
import 'mocha';

describe('canary()', function () {
  it('should not be dead', () => {
    expect(true)
      .to.be.true;
  });
});

import { Cell, Grid, WeightedGrid } from '../src/grid';
import { manhattanDistance } from '../src/heuristic-function';

describe('Cell', function () {
  describe('constructor', function () {
    it('should set row and col', function () {
      let cell: Cell = new Cell(3, 4);
      expect(cell.row)
        .to.equal(3);
      expect(cell.col)
        .to.equal(4);
    });
  });
});

describe('Grid', function () {
  let grid: Grid;

  beforeEach('make a 10x10 grid', () => {
    grid = new Grid(10, 10);
  });

  describe('constructor', function () {
    it('should set maxRow', function () {
      expect(grid.maxRow)
        .to.equal(9);
    });
    it('should set maxCol', function () {
      expect(grid.maxCol)
        .to.equal(9);
    });
    it('should fill nodes', function () {
      expect(grid.nodes)
        .to.be.an('array')
        .of.length(100);
    });
    it('should fill obstacles', function () {
      expect(grid.obstacles)
        .to.be.an('array')
        .of.length(100);
    });
  });

  describe('makeIndex', function () {
    it('should return 0 for (0, 0)', function () {
      expect(grid.makeIndex(0, 0))
        .to.equal(0);
    });
    it('should return 99 for (9, 9)', function () {
      expect(grid.makeIndex(9, 9))
        .to.equal(99);
    });
  });

  describe('getIndex', function () {
    it('should return 0 for Cell(0, 0)', function () {
      expect(grid.getIndex(new Cell(0, 0)))
        .to.equal(0);
    });
    it('should return 99 for Cell(9, 9)', function () {
      expect(grid.getIndex(new Cell(9, 9)))
        .to.equal(99);
    });
  });

  describe('isObstacle', function () {
    it('should return true for Cell(2, 3)', function () {
      grid.addObstacles([new Cell(2, 3)]);
      expect(grid.isObstacle(new Cell(2, 3)))
        .to.be.true;
    });
    it('should return false for Cell(3, 3)', function () {
      expect(grid.isObstacle(new Cell(3, 3)))
        .to.be.false;
    });
  });

  describe('adjacent', function () {
    it('should return true for (1,1) and (1,2)', function () {
      expect(grid.adjacent(new Cell(1, 1),
                           new Cell(1, 2)))
        .to.be.true;
    });
    it('should return false for (1,1) and (2,2)', function () {
      expect(grid.adjacent(new Cell(1, 1),
                           new Cell(2, 2)))
        .to.be.false;
    });
  });

  describe('neighbors', function () {
    it('should return [(0,1),(1,0)] for (0,0)', function () {
      expect(grid.neighbors(new Cell(0, 0)))
        .to.include.deep.members([new Cell(0, 1),
                                  new Cell(1, 0)]);
    });
    it('should return [(0,1),(1,0),(1,2),(2,1)] for (1,1)', function () {
      expect(grid.neighbors(new Cell(1, 1)))
        .to.include.deep.members([new Cell(0, 1),
                                  new Cell(1, 0),
                                  new Cell(1, 2),
                                  new Cell(2, 1)]);
    });
    it('should return [(1,2),(3,2),(2,1),(2,3)] for (2,2)', function () {
      expect(grid.neighbors(new Cell(2, 2)))
        .to.include.deep.members([new Cell(1, 2),
                                  new Cell(3, 2),
                                  new Cell(2, 1),
                                  new Cell(2, 3)]);
    });
  });
});

describe('WeightedGrid', function () {
  let grid: WeightedGrid;

  beforeEach('make a 10x10 grid', () => {
    grid = new WeightedGrid(10, 10, manhattanDistance, manhattanDistance);
  });

  describe('cost', function () {
    it('should return 1 for (0,0) and (0,1)', function () {
      expect(grid.cost(new Cell(0, 0), new Cell(0, 1)))
        .to.equal(1);
    });
    it('should return 1 for (0,0) and (1,0)', function () {
      expect(grid.cost(new Cell(0, 0), new Cell(1, 0)))
        .to.equal(1);
    });
    it('should return 0 for (0,0) and (1,1)', function () {
      expect(grid.cost(new Cell(0, 0), new Cell(1, 1)))
        .to.equal(0);
    });
  });

  describe('estimate', function () {
    it('should return 1 for (0,0) and (0,1)', function () {
      expect(grid.estimate(new Cell(0, 0), new Cell(0, 1)))
        .to.equal(1);
    });
    it('should return 1 for (0,0) and (1,0)', function () {
      expect(grid.estimate(new Cell(0, 0), new Cell(1, 0)))
        .to.equal(1);
    });
    it('should return 2 for (0,0) and (1,1)', function () {
      expect(grid.estimate(new Cell(0, 0), new Cell(1, 1)))
        .to.equal(2);
    });
    it('should return 0 for (0,0) and obstacle (2,2)', function () {
      grid.addObstacles([new Cell(2, 2)]);
      expect(grid.estimate(new Cell(0, 0), new Cell(2, 2)))
        .to.equal(0);
    });
  });
});
