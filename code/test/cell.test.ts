import { expect } from 'chai';
import 'mocha';

import { Cell } from "../src/cell";

describe('canary()', function () {
  it('should not be dead', () => {
    expect(true)
      .to.be.true;
  });
});

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

  describe('linearPosition', function () {
    it('should return 3 for r=0 and c=3', () => {
      expect(new Cell(0, 3).linearPosition)
        .to.equal(3);
    });

    it('should return 47 for r=4 and c=7', () => {
      expect(new Cell(4, 7).linearPosition)
        .to.equal(47);
    });

    it('should return 80 for r=8 and c=0', () => {
      expect(new Cell(8, 0).linearPosition)
        .to.equal(80);
    });
  });
});
