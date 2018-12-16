import { expect } from 'chai';
import 'mocha';

import { threeAryPermutationGenerator } from "../src/permutation-function"

describe('Permutation Functions', function () {
  describe('threeAryPermutationGenerator*', function () {
    it('should yield proper permutations of three arguments', () => {
      let generator = threeAryPermutationGenerator(1, 2, 3);

      expect(generator.next().value).to.deep.equal([1, 2, 3]);
      expect(generator.next().value).to.deep.equal([1, 3, 2]);
      expect(generator.next().value).to.deep.equal([2, 1, 3]);
      expect(generator.next().value).to.deep.equal([2, 3, 1]);
      expect(generator.next().value).to.deep.equal([3, 1, 2]);
      expect(generator.next().value).to.deep.equal([3, 2, 1]);
    });
  });
});
