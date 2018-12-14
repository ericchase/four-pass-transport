import { expect } from 'chai';
import 'mocha';

import { cell } from "../src/cell";

describe('cell', function () {
  it('should contain a row and column between 0 and 99', () => {
    expect(() => new cell(0, 1)).to.not.throw();
  });

  it('can contain (0, 0)', function () {
    expect(() => new cell(0, 0)).to.not.throw();
  });

  it('can contain (9, 9)', function () {
    expect(() => new cell(9, 9)).to.not.throw();
  });

  it('should not contain a row or column greater than 9', function () {
    expect(() => new cell(10, 0)).to.throw();
  });

  it('should not contain a row or column less than 0', function () {
    expect(() => new cell(-1, 0)).to.throw();
  });
});

describe('rc()', function () {
  it('should return 47 for r=4 and c=7', () => {
    expect(new cell(4, 7).rc()).to.equal(47);
  });
});
