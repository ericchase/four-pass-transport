import { Node } from './a-star';

export class Cell extends Node<Cell> {
  constructor(readonly row: number, readonly col: number) {
    super();
    //if (row < 0 || row > 9) throw Error('cell out of bounds');
    //if (col < 0 || col > 9) throw Error('cell out of bounds');
  }

  /**
   * Concatenates .row to .col and returns 'rowcol' as number.
   *
   * @return {number}
   */
  get linearPosition(): number {
    return this.row * 10 + this.col;
  };
}
