import { expect } from 'chai';
import 'mocha';

import { Cell, Grid } from '../src/grid';
import { convertCellsToLinearIndices, convertLinearIndicesToCells } from '../src/marshal-function';
import { MinHeap } from '../src/min-heap';
import { getAllMinimalDistancePaths } from '../src/minimal-distance-paths';

function fourPass(stations: number[]) {
  let cells: Cell[] = convertLinearIndicesToCells(new Grid(10, 10), stations);
  let pathHeap: MinHeap<Cell[]> = getAllMinimalDistancePaths(cells);
  if (!pathHeap.isEmpty())
    return convertCellsToLinearIndices(new Grid(10, 10), pathHeap.top);
  return [];
}

describe('Test Cases', function () {
  describe('[1,69,95,70]', function () {
    it('should pass', () => {
      let indices = fourPass([1, 69, 95, 70]);
      expect(indices)
        .to.have.length([1, 2, 3, 4, 5, 6, 7, 8, 9, 19, 29, 39, 49, 59, 69, 79, 78, 77, 76, 75, 85, 95, 94, 93, 92, 91, 81, 71, 70].length);
    });
  });
  describe('[0,49,40,99]', function () {
    it('should pass', () => {
      let indices = fourPass([0, 49, 40, 99]);
      expect(indices)
        .to.have.length([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 19, 29, 39, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 69, 79, 89, 99].length);
    });
  });
  describe('[37,61,92,36]', function () {
    it('should pass', () => {
      let indices = fourPass([37, 61, 92, 36]);
      expect(indices)
        .to.have.length([37, 27, 26, 25, 24, 23, 22, 21, 31, 41, 51, 61, 71, 81, 91, 92, 93, 94, 95, 96, 86, 76, 66, 56, 46, 36].length);
    });
  });
  describe('[51,24,75,57]', function () {
    it('should pass', () => {
      let indices = fourPass([51, 24, 75, 57]);
      expect(indices)
        .to.have.length([51, 41, 42, 43, 44, 34, 24, 25, 35, 45, 55, 65, 75, 76, 77, 67, 57].length);
    });
  });
  describe('[92,59,88,11]', function () {
    it('should pass', () => {
      let indices = fourPass([92, 59, 88, 11]);
      expect(indices)
        .to.have.length([92, 93, 94, 95, 96, 97, 98, 99, 89, 79, 69, 59, 58, 68, 78, 88, 87, 77, 67, 57, 47, 37, 27, 17, 16, 15, 14, 13, 12, 11].length);
    });
  });

  // advanced cases

  //TODO: empty array might have been pushed onto the heap
  describe('[ 95, 99, 74, 97 ]', function () {
    it('should pass', () => {
      // Your solution must be an array of integers between 0 and 99.
      let indices = fourPass([95, 99, 74, 97]);
      expect(indices)
        .to.deep.equal([1]);
      expect(indices)
        .to.have.length(100);
    });
  });
  describe('[ 6, 72, 9, 11 ]', function () {
    it('should pass', () => {
      let indices = fourPass([6, 72, 9, 11]);
      expect(indices)
        .to.deep.equal([6,5,4,3,2,1,0,10,20,21,31,41,51,61,71,72,62,63,64,65,66,67,68,69,59,49,39,29,19,9,8,18,17,16,15,14,13,12,11]);
      expect(indices)
        .to.have.length(39);
    });
  });
  describe('[ 8, 89, 46, 11 ]', function () {
    it('should pass', () => {
      let indices = fourPass([8, 89, 46, 11]);
      expect(indices)
        .to.deep.equal([1]);
      expect(indices)
        .to.have.length(25);
    });
  });
  describe('[ 94, 43, 76, 51 ]', function () {
    it('should pass', () => {
      let indices = fourPass([94, 43, 76, 51]);
      expect(indices)
        .to.deep.equal([1]);
      expect(indices)
        .to.have.length(24);
    });
  });
  describe('[ 22, 73, 41, 86 ]', function () {
    it('should pass', () => {
      let indices = fourPass([22, 73, 41, 86]);
      expect(indices)
        .to.deep.equal([1]);
      expect(indices)
        .to.have.length(21);
    });
  });
  describe('[ 38, 99, 53, 41 ]', function () {
    it('should pass', () => {
      let indices = fourPass([38, 99, 53, 41]);
      expect(indices)
        .to.deep.equal([1]);
      expect(indices)
        .to.have.length(21);
    });
  });
});
