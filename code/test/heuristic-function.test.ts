import { expect } from 'chai';
import 'mocha';

import { Cell } from "../src/cell";
import {
  make_heuristic_function,
  make_obstacle_list,
  manhattan_distance
} from "../src/heuristic-function";

describe('make_heuristic_function()', function () {
  it('should return 2 for (1,1) to (2,2) and no obstacle', () => {
    let a: Cell = new Cell(1, 1);
    let b: Cell = new Cell(2, 2);

    expect(make_heuristic_function([], manhattan_distance)(a, b))
      .to.equal(2);
  });

  it('should return 0 for (1,1) to (2,2) if (1,1) is an obstacle', () => {
    let a: Cell = new Cell(1, 1);
    let b: Cell = new Cell(2, 2);

    expect(make_heuristic_function(make_obstacle_list(a), manhattan_distance)(a, b))
      .to.equal(0);
  });

  it('should return 0 for (1,1) to (2,2) if (2,2) is an obstacle', () => {
    let a: Cell = new Cell(1, 1);
    let b: Cell = new Cell(2, 2);

    expect(make_heuristic_function(make_obstacle_list(b), manhattan_distance)(a, b))
      .to.equal(0);
  });

  it('should return 2 for (1,1) to (1,3) if (1,2) is an obstacle', () => {
    let a: Cell = new Cell(1, 1);
    let b: Cell = new Cell(1, 3);

    expect(make_heuristic_function(make_obstacle_list(new Cell(1, 2)), manhattan_distance)(a, b))
      .to.equal(2);
  });
});

describe('make_obstacle_list()', function () {
  it('should return array of length 1 for [(0,0)]', () => {
    expect(make_obstacle_list(new Cell(0, 0)).length)
      .to.equal(1);
  });
  it('should return array of length 1 for [(0,0), (0,0)]', () => {
    expect(make_obstacle_list(new Cell(0, 0), new Cell(0, 0)).length)
      .to.equal(1);
  });
  it('should return array of length 1 for [(0,0), (0,1)]', () => {
    expect(make_obstacle_list(new Cell(0, 0), new Cell(0, 1)).length)
      .to.equal(2);
  });
  it('should return array of length 10 for [(0,9)]', () => {
    expect(make_obstacle_list(new Cell(0, 9)).length)
      .to.equal(10);
  });
  it('should return array of length 91 for [(9,0)]', () => {
    expect(make_obstacle_list(new Cell(9, 0)).length)
      .to.equal(91);
  });
  it('should return array of length 100 for [(9,9)]', () => {
    expect(make_obstacle_list(new Cell(9, 9)).length)
      .to.equal(100);
  });
});

describe('manhattan_distance()', function () {
  it('should return 2 for (1,1) to (2,2)', () => {
    let a: Cell = new Cell(1, 1);
    let b: Cell = new Cell(2, 2);

    expect(manhattan_distance(a, b))
      .to.equal(2);
  });
  it('should return 2 for (2,2) to (1,1)', () => {
    let a: Cell = new Cell(1, 1);
    let b: Cell = new Cell(2, 2);

    expect(manhattan_distance(a, b))
      .to.equal(2);
  });
});
