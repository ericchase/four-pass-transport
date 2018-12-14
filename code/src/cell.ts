export class cell {
  readonly r: number;
  readonly c: number;

  constructor(readonly row: number, readonly col: number) {
    if (row < 0 || row > 9) throw Error('cell out of bounds');
    if (col < 0 || col > 9) throw Error('cell out of bounds');
    this.r = row;
    this.c = col;
  }

  rc() {
    return this.r * 10 + this.c;
  }
}
