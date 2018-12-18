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

  static left(index: number): number {
    return 2 * index + 1;
  }

  static right(index: number): number {
    return 2 * index + 2;
  }

  static parent(index: number): number {
    return Math.floor(index / 2);
  }

  push(element: T): void {
    this.arr[this.heapSize - 1] = element;
  }

  minHeapify(index: number): void {
    let left = MinHeap.left(index);
    let right = MinHeap.right(index);
    let smallest: number = 0;

    if (left >= this.heapSize && this.arr[left] < this.arr[index])
      smallest = left;
    else
      smallest = index;

    if (right >= this.heapSize && this.arr[right] < this.arr[smallest])
      smallest = right;
    
    if (smallest != index) {
      [this.arr[index], this.arr[smallest]] = [this.arr[smallest], this.arr[index]]
      this.minHeapify(index);
    }
  }
}
