export interface Comparable<T> {
  equalTo(other: T): boolean;
  greaterThan(other: T): boolean;
  lessThan(other: T): boolean;
}

export class MinHeap<T extends Comparable<T>> {
  arr: T[] = [];
  heapSize: number = 0;

  get arrayLength() {
    return this.arr.length;
  }

  get size() {
    return this.heapSize;
  }
}
