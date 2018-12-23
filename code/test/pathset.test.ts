import { expect } from 'chai';
import 'mocha';

import { PathSet } from '../src/pathset';
import { Cell } from '../src/grid';


describe('PathSet', function () {
  let pathSet: PathSet;

  beforeEach('prepare a Path Set', () => {
    pathSet = new PathSet(
      [new Cell(0, 0),
       new Cell(1, 1),
       new Cell(2, 2),
       new Cell(3, 3)], [2, 0, 1]);
  });

  describe('constructor', function () {
    it('should populate a pairs list with 3 pairs', () => {
      expect(pathSet.pairs)
        .to.be.length(3);
    });
    it('should store input cell list as pairs', () => {
      expect(pathSet.pairs)
        .to.deep.equal(
        [
          [new Cell(0, 0), new Cell(1, 1)],
          [new Cell(1, 1), new Cell(2, 2)],
          [new Cell(2, 2), new Cell(3, 3)]
        ]);
    });
    it('should store input number list as order', () => {
      expect(pathSet.order)
        .to.deep.equal([2, 0, 1]);
    });
  });

  describe('* nextEndpointPair', function () {
    it('should return endpoint pairs in the order specified by order', () => {
      let endpointPairs = pathSet.nextEndpointPair();

      expect(endpointPairs.next().value)
        .to.deep.equal([new Cell(2, 2), new Cell(3, 3)]);
      expect(endpointPairs.next().value)
        .to.deep.equal([new Cell(0, 0), new Cell(1, 1)]);
      expect(endpointPairs.next().value)
        .to.deep.equal([new Cell(1, 1), new Cell(2, 2)]);
    });
  });

  describe('storeNextPath', function () {
    it('should store paths in the order specified by order', () => {
      pathSet.storeNextPath([new Cell(2, 2), new Cell(2, 3), new Cell(3, 3)]);
      pathSet.storeNextPath([new Cell(0, 0), new Cell(0, 1), new Cell(1, 1)]);
      pathSet.storeNextPath([new Cell(1, 1), new Cell(1, 2), new Cell(2, 2)]);

      expect(pathSet.paths)
        .to.deep.equal(
        [
          [new Cell(2, 2), new Cell(2, 3), new Cell(3, 3)],
          [new Cell(0, 0), new Cell(0, 1), new Cell(1, 1)],
          [new Cell(1, 1), new Cell(1, 2), new Cell(2, 2)]
        ]);
    });
    it('should throw error if trying to store more than 3 paths', () => {
      pathSet.storeNextPath([new Cell(2, 2), new Cell(2, 3), new Cell(3, 3)]);
      pathSet.storeNextPath([new Cell(0, 0), new Cell(0, 1), new Cell(1, 1)]);
      pathSet.storeNextPath([new Cell(1, 1), new Cell(1, 2), new Cell(2, 2)]);

      expect(() => pathSet.storeNextPath([new Cell(1, 1), new Cell(1, 2), new Cell(2, 2)]))
        .to.throw(Error);
    });
  });

  describe('getCombinedPaths', function () {
    it('should return a combined path of paths in order of original end-points', () => {
      pathSet.storeNextPath([new Cell(2, 2), new Cell(2, 3), new Cell(3, 3)]);
      pathSet.storeNextPath([new Cell(0, 0), new Cell(0, 1), new Cell(1, 1)]);
      pathSet.storeNextPath([new Cell(1, 1), new Cell(1, 2), new Cell(2, 2)]);

      expect(pathSet.getCombinedPaths())
        .to.deep.equal([new Cell(0, 0), new Cell(0, 1), new Cell(1, 1),
                        new Cell(1, 2), new Cell(2, 2),
                        new Cell(2, 3), new Cell(3, 3)]);
    });
  });
});
