import { expect } from 'chai';
import 'mocha';

import { Cell } from "../src/cell";
import { cell_pair_permutation_generator } from "../src/permutation-function"

describe('Permutation Functions', function () {
  describe('cell_pair_permutation_generator*', function () {
    it('should yield permutations of Cell[][]', () => {
      let a: Cell = new Cell(1, 1);
      let b: Cell = new Cell(2, 2);
      let c: Cell = new Cell(3, 3);
      let d: Cell = new Cell(4, 4);

      let generator = cell_pair_permutation_generator([a, b, c, d]);

      let ab: Cell[] = [a, b];
      let bc: Cell[] = [b, c];
      let cd: Cell[] = [c, d];

      expect(generator.next().value).to.deep.equal([ab, bc, cd]);
      expect(generator.next().value).to.deep.equal([ab, cd, bc]);
      expect(generator.next().value).to.deep.equal([bc, ab, cd]);
      expect(generator.next().value).to.deep.equal([bc, cd, ab]);
      expect(generator.next().value).to.deep.equal([cd, ab, bc]);
      expect(generator.next().value).to.deep.equal([cd, bc, ab]);
    });
  });
});
