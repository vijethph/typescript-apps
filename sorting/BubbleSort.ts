// every kind of collection of objects that need to get sorted should implement this interface

import { CharactersCollection } from "./CharactersCollection";
import { LinkedListCollection } from "./LinkedListCollection";
import { NumbersCollection } from "./NumbersCollection";

// // the arguments' names defined for the methods in this interface need not be identical in the implementations
// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }

// Abstract Classes cannot be used to create an object/instance directly. They can only be used as a parent class, and they can contain real implementation for some methods. The implemented methods can refer to other methods that don't actually exist yet (we still have to provide names and types for the un-implemented methods). Abstract class can make child classes promise to implement some other method. 'abstract' keyword is used to mark methods as those that do exist, and will be eventually defined in the child classes
// Inherited abstract members from a parent class should have the exact same names as those declared in parent class
export abstract class Sorter {
  abstract length: number;
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i += 1) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}

const numbersCollectionInstance = new NumbersCollection([10, 3, -5, 4, 1, 0]);
numbersCollectionInstance.sort();
console.log(numbersCollectionInstance.data);

const stringCollectionInstance = new CharactersCollection("hellothere");
stringCollectionInstance.sort();
console.log(stringCollectionInstance.data);

const linkedListInstance = new LinkedListCollection();
linkedListInstance.append(500);
linkedListInstance.append(-10);
linkedListInstance.append(4);
linkedListInstance.append(21);
linkedListInstance.append(-78);
linkedListInstance.sort();
linkedListInstance.print();
