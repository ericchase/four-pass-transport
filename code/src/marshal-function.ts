import { Cell, Grid } from './grid';


export function convertCellsToLinearIndices(grid: Grid, cells: Cell[]): number[] {
  let indices: number[] = [];
  for (let cell of cells) {
    indices.push(grid.getIndex(cell));
  }
  return indices;
}

export function convertLinearIndicesToCells(grid: Grid, indices: number[]): Cell[] {
  let cells: Cell[] = [];
  for (let index of indices) {
    cells.push(grid.nodes[index]);
  }
  return cells;
}
