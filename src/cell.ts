export class Cell {
  constructor(readonly location: number) {
    if (location < 0 || location > 99) throw Error('location out of bounds');
  }
}