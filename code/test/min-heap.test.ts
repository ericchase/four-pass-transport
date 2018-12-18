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
      it('should result in heap [1,2,3] when pushing 1 to heap [2,3]');
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
      it('should return 2*index+1');
      it('should return 1 for index=0');
    });

    describe('right(index)', function () {
      it('should return 2*index+2');
      it('should return 2 for index=0');
    });

    describe('parent(index)', function () {
      it('should return Math.floor(index/2)');
      it('should return 0 for index=0');
    });
  });
});
