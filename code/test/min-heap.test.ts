import { expect } from 'chai';
import 'mocha';

import { Comparable, MinHeap } from "../src/min-heap";

// a comparable class for testing the min-heap
class comparableNumber implements Comparable<comparableNumber> {
  constructor(readonly value: number) { }

  equalTo(other: comparableNumber): boolean {
    return this.value === other.value;
  }

  greaterThan(other: comparableNumber): boolean {
    return this.value < other.value;
  }

  lessThan(other: comparableNumber): boolean {
    return this.value > other.value;
  }
}

let myHeap: MinHeap<comparableNumber>;

before(function () {
  myHeap = new MinHeap<comparableNumber>();
});

describe('MinHeap', function () {
  describe('Member Functions', function () {
    describe('arrayLength()', function () {
      it('should return 0 for an empty heap', () => {
        expect(myHeap.arrayLength)
          .to.equal(0);
      });
      it('should return 1 after a single successful push')
    });

    describe('size()', function () {
      it('should return 0 for an empty heap', () => {
        expect(myHeap.size)
          .to.equal(0);
      });
      it('should return 1 after a single successful push')
    });

    describe('push(element)', function () {
      it('should result in heap [1,2,3] when pushing 1 to heap [2,3]', () => {
        // myHeap.push(2);
        // myHeap.push(3);
        // expect(myHeap.push(1))
        //   .to.have([1, 2, 3]);
      });
    });

    describe('pop(element)', function () {
      it('should result in heap [2,3] when popping 1 from heap [1,2,3]');
    });

    describe('top(element)', function () {
      it('should return 1 from heap [1,2,3]');
    });
  });

  describe('Static Functions', function () {
    describe('left(index)', function () {
      it('should return 3 for index=1', () => {
        expect(MinHeap.left(1))
          .to.equal(3);
      });

      it('should return 1 for index=0', () => {
        expect(MinHeap.left(0))
          .to.equal(1);
      });
    });

    describe('right(index)', function () {
      it('should return 4 for index=1', () => {
        expect(MinHeap.right(1))
          .to.equal(4);
      });

      it('should return 2 for index=0', () => {
        expect(MinHeap.right(0))
          .to.equal(2);
      });
    });

    describe('parent(index)', function () {
      it('should return Math.floor(index/2)', () => {
        expect(MinHeap.parent(1))
          .to.equal(0);
      });

      it('should return 0 for index=0', () => {
        expect(MinHeap.parent(0))
          .to.equal(0);
      });
    });
  });
});
