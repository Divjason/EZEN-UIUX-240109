// enqueue : 데이터 삽입 기능
// dequeue : 데이거 제거 기능
// front : 데이터 참조 기능
// isEmpty : 데이터가 비어있는지 여부 확인 기능

import { DoublyLinkedList } from "./DoublyLinkedList.mjs";

class Queue {
  constructor() {
    this.list = new DoublyLinkedList();
  }

  enqueue(data) {
    this.list.insertAt(0, data);
  }

  dequeue() {
    try {
      return this.list.deleteLast();
    } catch (e) {
      return null;
    }
  }

  front() {
    return this.list.tail;
  }

  isEmpty() {
    return this.list.count === 0;
  }
}

export { Queue };
