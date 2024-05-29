// deque의 추상자료형 메서드 기능

// printAll() : 연결리스트를 출력하는 기능
// addFirst() : 연결리스트 최초인덱스에 값을 추가하는 기능
// removeFirst() : 연결리스트 최초인덱스의 값을 제거하는 기능
// addLast() : 연결리스트 마지막인덱스에 값을 추가하는 기능
// removeLast() : 연결리스트 마지막인덱스에 값을 제거하는 기능
// isEmpty() : 연결리스트 값이 존재하는지 여부를 확인하는 기능

import { DoublyLinkedList } from "./DoublyLinkedList.mjs";

class Deque {
  constructor() {
    this.list = new DoublyLinkedList();
  }

  printAll() {
    this.list.printAll();
  }

  addFirst(data) {
    this.list.insertAt(0, data);
  }

  removeFirst() {
    return this.list.deleteAt(0);
  }

  addLast(data) {
    this.list.insertAt(this.list.count, data);
  }

  removeLast() {
    return this.list.deleteLast();
  }

  isEmpty() {
    return this.list.count === 0;
  }
}

export { Deque };
