import { expect } from 'chai';
import 'mocha';

import { MinHeap } from "../src/min-heap";

let myHeap: MinHeap<number>;

beforeEach(function () {
  myHeap = new MinHeap((a: number, b: number) => a - b);
});

describe('MinHeap', function () {
  describe('Member Functions', function () {
    describe('arrayLength', function () {
      it('should return 0 for an empty heap', () => {
        expect(myHeap.arrayLength)
          .to.equal(0);
      });
      it('should return 1 after a single successful push', () => {
        myHeap.push(1);
        expect(myHeap.arrayLength)
          .to.equal(1);
      });
    });

    describe('size', function () {
      it('should return 0 for an empty heap', () => {
        expect(myHeap.size)
          .to.equal(0);
      });
      it('should return 1 after a single successful push', () => {
        myHeap.push(1);
        expect(myHeap.size)
          .to.equal(1);
      });
      it('should return 0 after a successful push and pop', () => {
        myHeap.push(1);
        myHeap.pop();
        expect(myHeap.size)
          .to.equal(0);
      });
    });

    describe('isEmpty()', function () {
      it('should return true for an empty heap', () => {
        expect(myHeap.isEmpty())
          .to.equal(true);
      });
      it('should return false for heap[1]', () => {
        myHeap.push(1);
        expect(myHeap.isEmpty())
          .to.equal(false);
      });
    });

    describe('top', function () {
      it('should throw error for an empty heap', () => {
        // notice that a function must be passed when checking for errors
        expect(() => myHeap.top)
          .to.throw(Error);
      });
      it('should return 1 for heap[1]', () => {
        myHeap.push(1);
        expect(myHeap.top)
          .to.equal(1);
      });
    });

    describe('push(element)', function () {
      it('should result in 1 at top when heap[].push(1)', () => {
        myHeap.push(1);
        expect(myHeap.top)
          .to.equal(1);
      });
      it('should result in 1 at top when heap[2].push(1)', () => {
        myHeap.push(2);
        myHeap.push(1);
        expect(myHeap.arr)
          .to.include.deep.members([1, 2]);
        expect(myHeap.top)
          .to.equal(1);
      });
      it('should result in 1 at top when heap[1].push(2)', () => {
        myHeap.push(2);
        myHeap.push(1);
        expect(myHeap.arr)
          .to.include.deep.members([1, 2]);
        expect(myHeap.top)
          .to.equal(1);
      });
      it('should result in 1 at top when heap[2,3].push(1)', () => {
        myHeap.push(2);
        myHeap.push(3);
        myHeap.push(1);
        expect(myHeap.arr)
          .to.include.deep.members([1, 2, 3]);
        expect(myHeap.top)
          .to.equal(1);
      });
      it('should result in 1 at top when heap[1,3].push(2)', () => {
        myHeap.push(1);
        myHeap.push(3);
        myHeap.push(2);
        expect(myHeap.arr)
          .to.include.deep.members([1, 2, 3]);
        expect(myHeap.top)
          .to.equal(1);
      });
      it('should result in 1 at top when heap[1,2].push(3)', () => {
        myHeap.push(1);
        myHeap.push(2);
        myHeap.push(3);
        expect(myHeap.arr)
          .to.include.deep.members([1, 2, 3]);
        expect(myHeap.top)
          .to.equal(1);
      });
    });

    describe('pop(element)', function () {
      it('should throw error for an empty heap', () => {
        // notice that a function must be passed when checking for errors
        expect(() => myHeap.pop())
          .to.throw(Error);
      });
      it('should result in heap [2,3] when heap[1,2,3].pop(1)', () => {
        // also test siftDown left
        myHeap.push(1);
        myHeap.push(2);
        myHeap.push(3);
        myHeap.pop();
        expect(myHeap.arr)
          .to.include.deep.members([2, 3]);
        expect(myHeap.top)
          .to.equal(2);
      });
      it('should result in heap [2,3] when heap[1,2,3].pop(1)', () => {
        // also test siftDown right
        myHeap.push(1);
        myHeap.push(2);
        myHeap.push(3);
        myHeap.push(4);
        myHeap.push(5);
        myHeap.pop();
        myHeap.pop();
        expect(myHeap.arr)
          .to.include.deep.members([3, 4, 5]);
        expect(myHeap.top)
          .to.equal(3);
      });
    });

    describe('updateItem(element)', function () {
      it('should result in heap [2,3,4] when heap[1,2,3].updateItem(1, 4)', () => {
        let myHeap = new MinHeap((a: { v: number }, b: { v: number }) => a.v - b.v);

        let e = {v: 1};
        myHeap.push(e);
        myHeap.push({v: 2});
        myHeap.push({v: 3});

        e.v = 4;
        myHeap.updateItem(e);

        expect(myHeap.arr)
          .to.include.deep.members([{v: 2}, {v: 3}, {v: 4}]);
        expect(myHeap.top.v)
          .to.equal(2);
      });
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
      it('should return 0 for index=0', () => {
        expect(MinHeap.parent(0))
          .to.equal(0);
      });

      it('should return 0 for index=1', () => {
        expect(MinHeap.parent(1))
          .to.equal(0);
      });

      it('should return 1 for index=3', () => {
        expect(MinHeap.parent(1))
          .to.equal(0);
      });

      it('should return 2 for index=5', () => {
        expect(MinHeap.parent(1))
          .to.equal(0);
      });
    });
  });
});
