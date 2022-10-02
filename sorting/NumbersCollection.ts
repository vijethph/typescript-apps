import { Sorter } from "./BubbleSort";

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  // this is an accessor, which allows calling this method like a property
  // example: NumbersInstance.length;
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
