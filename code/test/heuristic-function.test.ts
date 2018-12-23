import { expect } from 'chai';
import 'mocha';

import { Cell } from '../src/grid';
import { manhattanDistance } from '../src/heuristic-function';

describe('Heuristic Functions', function () {
  describe('manhattanDistance', function () {
    it('should return 2 between (1,1) and (2,2)', () => {
      let a: Cell = new Cell(1, 1);
      let b: Cell = new Cell(2, 2);

      expect(manhattanDistance(a, b))
        .to.equal(2);
      expect(manhattanDistance(b, a))
        .to.equal(2);
    });
  });
});
