import { Sorter } from './Sorter';
import { Node } from './Node';

export class LinkedList extends Sorter {
  head: Node | null = null;

  constructor(...numbers: number[]) {
    super();

    for (const number of numbers) {
      this.add(number);
    }
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;

    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    let currentIndex = 0;
    let node: Node | null = this.head;

    while (node) {
      if (currentIndex === index) return node;

      currentIndex++;
      node = node.next;
    }

    throw new Error('Index out of bounds');
  }

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    // Swappinng values, not nodes
    const leftHand = this.at(leftIndex).data;
    this.at(leftIndex).data = this.at(rightIndex).data;
    this.at(rightIndex).data = leftHand;
  }

  print(): void {
    if (!this.head) {
      console.log('List is empty');
    }

    let node: Node | null = this.head;

    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
