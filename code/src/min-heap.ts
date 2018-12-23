export class MinHeap<T> {
  static left(index: number): number {
    return 2 * index + 1;
  }

  static right(index: number): number {
    return 2 * index + 2;
  }

  static parent(index: number): number {
    // aka. Math.floor(index/2)
    return index >> 1;
  }

  constructor(readonly compare: (cellA: T, cellB: T) => number) { }

  arr: T[] = [];
  heapSize: number = 0;

  get arrayLength() {
    return this.arr.length;
  }

  get size() {
    return this.heapSize;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  get top(): T {
    if (this.heapSize < 1)
      throw new Error('heap underflow on pop');
    return this.arr[0];
  }

  push(element: T): void {
    this.heapSize = this.heapSize + 1;
    this.arr[this.heapSize - 1] = element;
    this.siftUp(this.heapSize - 1);
  }

  pop(): void {
    if (this.heapSize < 1)
      throw new Error('heap underflow on pop');
    this.arr[0] = this.arr[this.heapSize - 1];
    this.heapSize = this.heapSize - 1;
    if (this.heapSize > 1)
      this.siftDown(0);
  }

  updateItem(element: T): void {
    let index = this.arr.indexOf(element);
    this.siftUp(index);
    this.siftDown(0);
  }

  private siftUp(index: number): void {
    if (index > 0) {
      let parent = MinHeap.parent(index);
      if (this.compare(this.arr[index], this.arr[parent]) < 0) {
        [this.arr[index], this.arr[parent]] = [this.arr[parent], this.arr[index]];
        this.siftUp(parent);
      }
    }
  }

  private siftDown(index: number): void {
    let left = MinHeap.left(index);
    let right = MinHeap.right(index);

    let smallest: number = index;
    if (left < this.heapSize
        && this.compare(this.arr[left], this.arr[smallest]) < 0)
      smallest = left;
    if (right < this.heapSize
        && this.compare(this.arr[right], this.arr[smallest]) < 0)
      smallest = right;

    if (smallest !== index) {
      [this.arr[index], this.arr[smallest]] = [this.arr[smallest], this.arr[index]];

      //TODO: how did I miss this? why wasn't it covered in test cases?
      // possibly needed enough elements to trigger this problem.
      //this.siftDown(index); // incorrect
      this.siftDown(smallest);
    }
  }
}
