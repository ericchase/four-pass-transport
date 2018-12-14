import { expect } from 'chai';
import 'mocha';

import { Cell } from "../src/cell";

describe('Cell', function () {
  it('should contain a row and column between 0 and 9', () => {
    expect(() => new Cell(0, 1))
      .to.not.throw();
  });

  it('can contain (0, 0)', function () {
    expect(() => new Cell(0, 0))
      .to.not.throw();
  });

  it('can contain (9, 9)', function () {
    expect(() => new Cell(9, 9))
      .to.not.throw();
  });

  it('should not contain a row or column less than 0', function () {
    expect(() => new Cell(-1, 0))
      .to.throw();
    expect(() => new Cell(0, -1))
      .to.throw();
    expect(() => new Cell(-1, -1))
      .to.throw();
  });

  it('should not contain a row or column greater than 9', function () {
    expect(() => new Cell(10, 0))
      .to.throw();
    expect(() => new Cell(0, 10))
      .to.throw();
    expect(() => new Cell(10, 10))
      .to.throw();
  });
});

describe('rc()', function () {
  it('should return 3 for r=0 and c=3', () => {
    expect(new Cell(0, 3).rc())
      .to.equal(3);
  });
  it('should return 47 for r=4 and c=7', () => {
    expect(new Cell(4, 7).rc())
      .to.equal(47);
  });
  it('should return 80 for r=8 and c=0', () => {
    expect(new Cell(8, 0).rc())
      .to.equal(80);
  });
});
