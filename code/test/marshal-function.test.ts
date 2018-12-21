import { expect } from 'chai';
import 'mocha';

import { Cell, Grid } from '../src/grid';
import { getAllMinimalDistancePaths } from '../src/minimal-distance-paths';
import { MinHeap } from '../src/min-heap';
import { convertCellsToLinearIndices, convertLinearIndicesToCells } from '../src/marshal-function';


describe('Marshal Functions', function () {
  describe('convertCellsToLinearIndices', function () {
    it('should convert [cell(0,0),cell(0,1),cell(0,2)] to [0,1,2]', () => {
      expect(convertCellsToLinearIndices(new Grid(10, 10), [new Cell(0, 0),
                                                            new Cell(0, 1),
                                                            new Cell(0, 2)]))
        .to.deep.equal([0, 1, 2]);
    });
    it('should convert [cell(9,7),cell(9,8),cell(9,9)] to [97,98,99]', () => {
      expect(convertCellsToLinearIndices(new Grid(10, 10), [new Cell(9, 7),
                                                            new Cell(9, 8),
                                                            new Cell(9, 9)]))
        .to.deep.equal([97, 98, 99]);
    });
  });

  describe('convertLinearIndicesToCells', function () {
    it('should convert [cell(0,0),cell(0,1),cell(0,2)] to [0,1,2]', () => {
      expect(convertLinearIndicesToCells(new Grid(10, 10),
                                         [0, 1, 2]))
        .to.deep.equal([new Cell(0, 0),
                        new Cell(0, 1),
                        new Cell(0, 2)]);
    });
    it('should convert [cell(9,7),cell(9,8),cell(9,9)] to [97,98,99]', () => {
      expect(convertLinearIndicesToCells(new Grid(10, 10),
                                         [97, 98, 99]))
        .to.deep.equal([new Cell(9, 7),
                        new Cell(9, 8),
                        new Cell(9, 9)]);
    });
  });

  describe('getAllMinimalDistancePaths', function () {

    let minHeap: MinHeap<Cell[]>;

    before('call getAllMinimalDistancePaths', () => {
      minHeap = getAllMinimalDistancePaths([new Cell(2, 2),
                                            new Cell(5, 5),
                                            new Cell(5, 2),
                                            new Cell(2, 5)]);
    });

    it('should return a min-heap of 6 minimal distance paths', () => {
      expect(minHeap.size)
        .to.equal(6);
    });
    it('should return a min-heap with a 20 length path on top', () => {
      expect(minHeap.top)
        .to.be.length(20);
    });
  });
});
