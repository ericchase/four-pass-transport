import {expect} from 'chai';
import 'mocha';
import {Cell} from '../src/cell';

it('Canary', () => {
  expect(true).is.true;
});

describe('Cell', () => {
  it('should contain a number between 0 and 99', () => {
    expect(() => new Cell(1)).to.not.throw();
  });

  it('can contain 0', () => {
    expect(() => new Cell(0)).to.not.throw();
  });

  it('can contain 99', () => {
    expect(() => new Cell(0)).to.not.throw();
  });

  it('should not contain a number greater than 99', () => {
    expect(() => new Cell(100)).to.throw();
  });

  it('should not contain a number less than 0', () => {
    expect(() => new Cell(-1)).to.throw();
  });
});